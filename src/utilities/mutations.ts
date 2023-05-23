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
  };

  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  const url = new URL(`https://books.googleapis.com/books/v1/volumes`);

  Object.keys(params[toggle]).forEach((key) =>
    url.searchParams.append(key, params[toggle][key])
  );

  return { url, options };
};
