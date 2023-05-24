export const mapData = (data, toggle) => {
  if (toggle === "dropdown") {
    // console.log(data);
    return data.map((item) => [
      item.id,
      item?.volumeInfo?.title,
      item?.volumeInfo?.authors?.join(", "),
      item.volumeInfo?.imageLinks?.smallThumbnail
        ? `https${item.volumeInfo?.imageLinks?.smallThumbnail.slice(4)}`
        : "",
    ]);
  } else if (toggle === "grid") {
    return data.map((item) => [
      item.id,
      item.volumeInfo?.imageLinks?.thumbnail
        ? `https${item.volumeInfo?.imageLinks?.thumbnail.slice(4)}`
        : "",
      item?.volumeInfo?.title,
      item?.volumeInfo?.authors,
      item?.volumeInfo?.publisher,
    ]);
  } else if (toggle === "modal") {
    const item = data;
    return [
      item.id,
      item.volumeInfo?.imageLinks?.small
        ? `https${item.volumeInfo?.imageLinks?.small.slice(4)}`
        : "",
      item.volumeInfo?.title,
      item.volumeInfo?.authors,
      item.volumeInfo?.categories?.[0],
      item.volumeInfo?.publishedDate,
      item.volumeInfo?.publisher,
      item.volumeInfo?.description,
    ];
  }
};
