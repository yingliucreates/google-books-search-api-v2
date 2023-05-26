import axios from "axios";

export const api = axios.create({
  baseURL: "https://books.googleapis.com/books/v1",
});

export const getPage = async (pageParam = 1, options = {}) => {
  const response = await api.get(
    `/volumes?startIndex=${pageParam}&key=${import.meta.env.VITE_API_KEY}`,
    options
  );
  return response.data;
};

/*created for infinite scroll - currently not in use*/
