export const mapData = (data, toggle) => {
  if (toggle === "dropdown") {
    // console.log(data);
    data = data.items;
    return data.map((item) => {
      return {
        id: item?.id,
        title: item?.volumeInfo?.title,
        authors: item?.volumeInfo?.authors?.join(", "),
        image: item?.volumeInfo?.imageLinks?.smallThumbnail
          ? `https${item?.volumeInfo?.imageLinks?.smallThumbnail.slice(4)}`
          : "",
      };
    });
  } else if (toggle === "grid") {
    data = data.items;
    return data.map((item) => {
      return {
        id: item?.id,
        title: item?.volumeInfo?.title,
        authors: item?.volumeInfo?.authors[0],
        image: item?.volumeInfo?.imageLinks?.thumbnail
          ? `https${item?.volumeInfo?.imageLinks?.thumbnail.slice(4)}`
          : "",
        publisher: item?.volumeInfo?.publisher,
      };
    });
  } else if (toggle === "modal") {
    const item = data;
    return {
      image: item?.volumeInfo?.imageLinks?.thumbnail
        ? `https${item?.volumeInfo?.imageLinks?.thumbnail.slice(4)}`
        : "",
      title: item?.volumeInfo?.title,
      authors: item?.volumeInfo?.authors,
      category: item?.volumeInfo?.categories?.[0],
      publishedDate: item?.volumeInfo?.publishedDate,
      publisher: item?.volumeInfo?.publisher,
      description: item?.volumeInfo?.description,
    };
  }
};
