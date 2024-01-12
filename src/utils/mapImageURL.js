export const mapImageURL = (arr) => {
  return arr.map((item) => {
    return {
      ...item,
      image: require("../app/" + item.image),
    };
  });
};
