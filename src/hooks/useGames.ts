import { Platform } from '../hooks/usePlatforms';
import { GameQuery } from '../App';
import { useQuery } from '@tanstack/react-query';
import apiClient, { FetchResponse } from '../services/api-client';

export type Game = {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
};

function useGames(gameQuery: GameQuery) {
  return useQuery<Game[], Error>({
    queryKey: ['games', gameQuery],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Game>>('/games', {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchQuery,
          },
        })
        .then((res) => res.data.results),
  });
}

export default useGames;
