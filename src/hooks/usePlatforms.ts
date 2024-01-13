import { useQuery } from "@tanstack/react-query";
import parentPlatforms from "../data/parentPlatforms";
import APIClient from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hrs.
    initialData: { count: parentPlatforms.length, results: parentPlatforms },
  });

export default usePlatforms;
