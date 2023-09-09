import { useQuery } from '@tanstack/react-query';
import apiClient, { FetchResponse } from '../services/api-client';
import genres from '../data/genres';

export type Genre = {
  id: number;
  name: string;
  image_background: string;
};

function useGenres() {
  return useQuery<Genre[], Error>({
    queryKey: ['genres'],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Genre>>('/genres')
        .then((res) => res.data.results),
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: genres,
  });
}

export default useGenres;
