import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';
import useGenres from '../hooks/useGenres';
import usePlatforms from '../hooks/usePlatforms';

type Props = {
  gameQuery: GameQuery;
};
function GameHeading({ gameQuery }: Props) {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();

  const genre = genres.results.find((genre) => genre.id === gameQuery.genreId);
  const platform = platforms.results.find(
    (platform) => platform.id === gameQuery.platformId
  );

  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;

  return (
    <Heading as="h1" marginBottom={3}>
      {heading}
    </Heading>
  );
}

export default GameHeading;
