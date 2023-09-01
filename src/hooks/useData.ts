import { useEffect, useState } from 'react';
import apiClient, { CanceledError } from '../services/api-client';
import { AxiosRequestConfig } from 'axios';

type FetchResponse<T> = {
  count: number;
  results: T[];
};

function useData<T>(
  endpoint: string,
  dependencies?: unknown[],
  requestConfig?: AxiosRequestConfig
) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();

      setLoading(true);

      apiClient
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
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
    },
    dependencies ? [...dependencies] : []
  );

  return { data, error, loading };
}

export default useData;
