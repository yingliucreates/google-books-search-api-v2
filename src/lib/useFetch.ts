import { useState, useEffect } from "react";
import { mutations } from "../utilities/mutations";
import { mapData } from "../utilities/mapData";

const useFetch = (query, toggle, dependency) => {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);

  useEffect(() => {
    if (!query) {
      setList([]);
      return;
    } else {
      requestBooks();
    }

    async function requestBooks() {
      setLoading(true);
      const { url, options } = mutations(query, toggle);
      const res = await fetch(url, options);
      if (res.status > 299 && res.status < 200) {
        throw new Error();
      }
      const data = await res.json();
      setList(mapData(data.items, toggle));
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dependency]);

  return [loading, list];
};

export default useFetch;
