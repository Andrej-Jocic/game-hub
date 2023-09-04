import genres from '../data/genres';

export type Genre = {
  id: number;
  name: string;
  image_background: string;
};

function useGenres() {
  return { data: genres, loading: false, error: null };
}

export default useGenres;
