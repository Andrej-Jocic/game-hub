import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import { Genre } from '../hooks/useGenres';

type Props = {
  selectedGenre: Genre | null;
};

function GameGrid({ selectedGenre }: Props) {
  const { data, error, loading } = useGames(selectedGenre);
  // create array with integers from 1 to 15
  const skeletons = Array.from({ length: 15 }, (_, i) => i + 1);
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={3}
        padding="10px"
      >
        {loading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
