import { useState, useEffect } from "react";
import { mapData } from "../utilities/mapData";
// import axios from "axios";

const useFetch = (query) => {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);

  useEffect(() => {
    if (!query) return;
    setLoading(true);

    fetch(
      `https://books.googleapis.com/books/v1/volumes?q=${query}&maxResults=10&key=${
        import.meta.env.VITE_API_KEY
      }`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => {
        if (res.status > 299 && res.status < 200) throw new Error();
        return res.json();
      })
      .then((data) => {
        setList(mapData(data.items, true));
        setLoading(false);
      });
  }, [query]);

  return { loading, list };
};

export default useFetch;
