import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

type Props = {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
};

function GenreList({ onSelectedGenre, selectedGenre }: Props) {
  const { data, loading, error } = useGenres();

  if (error) return null;
  if (loading) return <Spinner />;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              onClick={() => onSelectedGenre(genre)}
              variant="link"
              fontSize="lg"
              fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
