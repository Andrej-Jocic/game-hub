import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';

type Props = {
  gameQuery: GameQuery;
};
function GameHeading({ gameQuery }: Props) {
  const heading = `${gameQuery.platform?.name || ''} ${
    gameQuery.genre?.name || ''
  } Games`;

  return (
    <Heading as="h1" marginBottom={3}>
      {heading}
    </Heading>
  );
}

export default GameHeading;
