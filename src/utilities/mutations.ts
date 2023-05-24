export const mutations = (query, toggle) => {
  const params = {
    dropdown: {
      q: query,
      maxResult: 10,
      key: import.meta.env.VITE_API_KEY,
    },
    grid: {
      q: query,
      startIndex: 0,
      key: import.meta.env.VITE_API_KEY,
    },
    modal: {
      key: import.meta.env.VITE_API_KEY,
    },
  };

  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  const endPoint = `https://books.googleapis.com/books/v1/volumes`;
  const endPoint2 = `https://books.googleapis.com/books/v1/volumes/${query}`;
  let url;
  if (toggle === "dropdown" || toggle === "grid") {
    url = new URL(endPoint);
    Object.keys(params[toggle]).forEach((key) =>
      url.searchParams.append(key, params[toggle][key])
    );
  } else {
    url = new URL(endPoint2);
    Object.keys(params[toggle]).forEach((key) =>
      url.searchParams.append(key, params[toggle][key])
    );
  }

  return { url, options };
};
