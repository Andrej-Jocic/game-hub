import { Platform } from '../hooks/usePlatforms';
import { GameQuery } from '../App';
import { useQuery } from '@tanstack/react-query';
import { APIClient } from '../services/api-client';

const apiClient = new APIClient<Game>('/games');

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
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchQuery,
        },
      }),
  });
}

export default useGames;
