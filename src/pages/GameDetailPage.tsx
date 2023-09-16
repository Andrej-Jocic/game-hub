import { Heading, Spinner } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import ExpendableText from '../components/ExpendableText';
import GameAttributes from '../components/GameAttributes';
import useGame from '../hooks/useGame';
import GameTrailer from '../components/GameTrailer';
import GameScreenshots from '../components/GameScreenshots';

function GameDetailPage() {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpendableText>{game.description_raw}</ExpendableText>
      <GameAttributes game={game} />
      <GameTrailer gameId={game.id} />
      <GameScreenshots gameId={game.id} />
    </>
  );
}

export default GameDetailPage;