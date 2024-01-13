import { useQuery } from "@tanstack/react-query";
import parentPlatforms from "../data/parentPlatforms";
import apiClient, { FetchResponse } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// const usePlatforms = () => ({ data: parentPlatforms, error: null });

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 hrs.
    initialData: { count: parentPlatforms.length, results: parentPlatforms },
  });

export default usePlatforms;
