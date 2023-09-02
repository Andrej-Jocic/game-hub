// Transforming image URL
// FROM: https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg
// TO: https://media.rawg.io/media/crop/600/400/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg

import noImage from '../assets/no-image-placeholder.webp';

function getCroppedImageUrl(url: string) {
  // TODO: add an 'No cover' image if game doesn't have one
  if (!url) return noImage;

  const target = 'media/';
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
}

export default getCroppedImageUrl;
