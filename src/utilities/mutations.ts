export const mutations = (query, displayDropdown, displayGrid) => {
  const paramsDropdown = {
    q: query,
    maxResult: 10,
    key: import.meta.env.VITE_API_KEY,
  };

  const paramsGrid = {
    q: query,
    startIndex: 0,
    key: import.meta.env.VITE_API_KEY,
  };

  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  const url = new URL(`https://books.googleapis.com/books/v1/volumes`);

  if (displayGrid && !displayDropdown) {
    Object.keys(paramsGrid).forEach((key) =>
      url.searchParams.append(key, paramsGrid[key])
    );
  } else {
    Object.keys(paramsDropdown).forEach((key) =>
      url.searchParams.append(key, paramsDropdown[key])
    );
  }
  return { url, options };
};
