export const mapData = (data, displayDropdown = false) => {
  if (displayDropdown) {
    return data.map((item) => [
      item?.volumeInfo?.title,
      item?.volumeInfo?.authors,
    ]);
  } else {
    return data.map((item) => [
      item.volumeInfo?.imageLinks?.smallThumbnail
        ? `https${item.volumeInfo?.imageLinks?.smallThumbnail.slice(4)}`
        : "",
      item?.volumeInfo?.title,
      item?.volumeInfo?.authors,
      item?.volumeInfo?.publisher,
    ]);
  }
};
