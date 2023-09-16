import { useInfiniteQuery } from '@tanstack/react-query';
import { APIClient, FetchResponse } from '../services/api-client';
import ms from 'ms';
import useGameQueryStore from '../store';
import { Game } from '../entities/Game';

const apiClient = new APIClient<Game>('/games');

function useGames() {
  const gameQuery = useGameQueryStore((store) => store.gameQuery);

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          page: pageParam,
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchQuery,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms('24h'),
  });
}

export default useGames;
