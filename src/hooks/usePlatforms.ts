import parentPlatforms from "../data/parentPlatforms";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => ({ data: parentPlatforms, error: null });

export default usePlatforms;
