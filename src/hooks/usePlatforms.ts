import useData from './useData';

export type Platform = {
  id: number;
  name: string;
  slug: string;
};

function usePlatforms() {
  return useData<Platform>('/platforms/lists/parents');
}

export default usePlatforms;
