import axios, { AxiosRequestConfig } from 'axios';

export type FetchResponse<T> = {
  count: number;
  results: T[];
};

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'f8ea789babb64729b2801c250eca8a11',
  },
});

class APIClient<T> {
  constructor(public endpoint: string) {}

  getAll = (requestConfig?: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, requestConfig)
      .then((res) => res.data.results);
  };
}

export { APIClient };
