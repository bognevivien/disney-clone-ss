 const getImagePath = (imagePatch?: string, fullSize?: boolean) => {
  return imagePatch
    ? `http://image.tmdb.org/t/p/${fullSize ? "original" : "w500"}/${imagePatch}`
    : "https://links.papareact.com/o8z";
};

export default getImagePath