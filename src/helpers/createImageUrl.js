export const createImageUrl = (backdropPath, posterPath, imageWidth) => {
  const dummyImgUrl =
    "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";

  if (backdropPath !== null) {
    return `https://image.tmdb.org/t/p/w${imageWidth}/${backdropPath}`;
  } else if (posterPath !== null) {
    return `https://image.tmdb.org/t/p/w${imageWidth}/${posterPath}`;
  }
  return dummyImgUrl;
};

export const createPosterUrl = (posterPath, backdropPath, imageWidth) => {
  const dummyImgUrl =
    "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";

  if (posterPath !== null) {
    return `https://image.tmdb.org/t/p/w${imageWidth}/${posterPath}`;
  } else if (backdropPath !== null) {
    return `https://image.tmdb.org/t/p/w${imageWidth}/${backdropPath}`;
  }
  return dummyImgUrl;
};

export const createActorUrl = (path, width) => {
  return `https://image.tmdb.org/t/p/w${width}/${path}`;
};
