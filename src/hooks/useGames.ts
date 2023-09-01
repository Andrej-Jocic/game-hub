import useData from './useData';
import { Genre } from './useGenres';

export type Platform = {
  id: number;
  name: string;
  slug: string;
};

export type Game = {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
};

function useGames(selectedGenre: Genre | null) {
  return useData<Game>('/games', [selectedGenre?.id], {
    params: { genres: selectedGenre?.id },
  });
}

export default useGames;
