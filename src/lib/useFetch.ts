import { useState, useEffect } from "react";
import { mutations } from "../utilities/mutations";
import { mapData } from "../utilities/mapData";
import { debounceAsync } from "../utilities/debounce";

const useFetch = (query, toggle, dependency) => {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    if (!query) {
      setList([]);
      setLoading(false);
      return;
    } else {
      debounceAsync(requestBooks(), 1000);
    }

    async function requestBooks() {
      setLoading(true);
      const { url, options } = mutations(query, toggle);
      const res = await fetch(url, options);
      if (res.status > 299 && res.status < 200) {
        throw new Error();
      }
      const data = await res.json();
      console.log(toggle, url, data);
      setList(mapData(data, toggle));
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dependency]);

  return [loading, list];
};

export default useFetch;
