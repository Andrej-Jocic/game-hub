import { useQuery } from '@tanstack/react-query';
import apiClient, { FetchResponse } from '../services/api-client';
import platforms from '../data/platforms';

export type Platform = {
  id: number;
  name: string;
  slug: string;
};

function usePlatforms() {
  return useQuery<Platform[], Error>({
    queryKey: ['platforms'],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>('/platforms/lists/parents')
        .then((res) => res.data.results),
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: platforms.map((platform, i) => ({
      id: i,
      name: platform,
      slug: platform.toLowerCase(),
    })),
  });
}

export default usePlatforms;
