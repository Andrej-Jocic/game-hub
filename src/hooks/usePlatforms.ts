import useData from './useData';

type Platform = {
  id: number;
  name: string;
};

function usePlatforms() {
  return useData<Platform>('/platforms/lists/parents');
}

export default usePlatforms;
