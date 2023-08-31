import useData from './useData';

type Genres = {
  id: number;
  name: string;
};

function useGenres() {
  return useData<Genres>('/genres');
}

export default useGenres;
