import useData from './useData';
import { Genre } from './useGenres';
import { Platform } from '../hooks/usePlatforms';

export type Game = {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
};

function useGames(
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) {
  return useData<Game>('/games', [selectedGenre?.id, selectedPlatform?.id], {
    params: {
      genres: selectedGenre?.id,
      platforms: selectedPlatform?.id,
    },
  });
}

export default useGames;
