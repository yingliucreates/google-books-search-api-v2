export const mapData = (data, toggle) => {
  if (toggle === "dropdown") {
    // console.log(data);
    return data.map((item) => [
      item.id,
      item?.volumeInfo?.title,
      item?.volumeInfo?.authors?.join(", "),
    ]);
  } else if (toggle === "grid") {
    return data.map((item) => [
      item.id,
      item.volumeInfo?.imageLinks?.smallThumbnail
        ? `https${item.volumeInfo?.imageLinks?.smallThumbnail.slice(4)}`
        : "",
      item?.volumeInfo?.title,
      item?.volumeInfo?.authors,
      item?.volumeInfo?.publisher,
    ]);
  }
};
