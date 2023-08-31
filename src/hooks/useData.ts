import { useEffect, useState } from 'react';
import apiClient, { CanceledError } from '../services/api-client';

type FetchResponse<T> = {
  count: number;
  results: T[];
};

function useData<T>(endpoint: string) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);

    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal })
      .then((res) => {
        setData(res.data.results);
        setLoading(false); // move to `finally()` for production
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false); // move to `finally()` for production
      });

    return () => controller.abort();
  }, [endpoint]);

  return { data, error, loading };
}

export default useData;
