import { useQuery } from '@tanstack/react-query';
import platforms from '../data/platforms';
import { APIClient } from '../services/api-client';

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

export type Platform = {
  id: number;
  name: string;
  slug: string;
};

function usePlatforms() {
  return useQuery<Platform[], Error>({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: platforms.map((platform, i) => ({
      id: i,
      name: platform,
      slug: platform.toLowerCase(),
    })),
  });
}

export default usePlatforms;
