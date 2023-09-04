import meh from '../assets/meh.webp';
import thumbsUp from '../assets/thumbs-up.webp';
import bullsEye from '../assets/bulls-eye.webp';
import { Image, ImageProps } from '@chakra-ui/react';

type Props = {
  rating: number;
};

function Emoji({ rating }: Props) {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: 'meh emoji', boxSize: '25px' },
    4: { src: thumbsUp, alt: 'recomended - thumbs up emoji', boxSize: '25px' },
    5: { src: bullsEye, alt: 'exceptional - bulls eye emoji', boxSize: '35px' },
  };

  //   return <Image src={emojiMap[rating].src} alt={emojiMap[rating].alt} />;
  return <Image {...emojiMap[rating]} marginTop={1} />;
}

export default Emoji;
