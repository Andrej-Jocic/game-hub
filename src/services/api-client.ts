import axios, { AxiosRequestConfig } from 'axios';

export type FetchResponse<T> = {
  count: number;
  next: string | null;
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
      .then((res) => res.data);
  };
  get = (id: number | string) => {
    return axiosInstance
      .get<T>(this.endpoint + '/' + id)
      .then((res) => res.data);
  };
}

export { APIClient };
