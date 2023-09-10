import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';
import usePlatform from '../hooks/usePlatform';
import useGenre from '../hooks/useGenre';

type Props = {
  gameQuery: GameQuery;
};
function GameHeading({ gameQuery }: Props) {
  const platform = usePlatform(gameQuery.platformId);
  const genre = useGenre(gameQuery.genreId);

  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;

  return (
    <Heading as="h1" marginBottom={3}>
      {heading}
    </Heading>
  );
}

export default GameHeading;
