export const createImageUrl = (imageUrl, imageWidth) => {
  return `https://image.tmdb.org/t/p/w${imageWidth}/${imageUrl}
`;
};
