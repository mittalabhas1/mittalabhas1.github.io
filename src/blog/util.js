export const generateImageURL = (image, slug) => {
  return `${process.env.PUBLIC_URL}/images/${slug}/${image}`;
};