import useData from './useData';
import { Platform } from '../hooks/usePlatforms';
import { GameQuery } from '../App';

export type Game = {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
};

function useGames(gameQuery: GameQuery) {
  return useData<Game>('/games', [gameQuery], {
    params: {
      genres: gameQuery.genre?.id,
      platforms: gameQuery.platform?.id,
    },
  });
}

export default useGames;
