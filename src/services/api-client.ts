import axios, { CanceledError } from 'axios';

export type FetchResponse<T> = {
  count: number;
  results: T[];
};

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'f8ea789babb64729b2801c250eca8a11',
  },
});

export { CanceledError };
