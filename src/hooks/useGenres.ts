import { useEffect, useState } from 'react';
import apiClient, { CanceledError } from '../services/api-client';

type Genres = {
  id: number;
  name: string;
};

type FetchGenresResponse = {
  count: number;
  results: Genres[];
};

function useGenres() {
  const [genres, setGenres] = useState<Genres[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);

    apiClient
      .get<FetchGenresResponse>('/genres', { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false); // move to `finally()` for production
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false); // move to `finally()` for production
      });

    return () => controller.abort();
  }, []);

  return { genres, error, loading };
}

export default useGenres;
