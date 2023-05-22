import { useState, useEffect } from "react";
import { mapData } from "../utilities/mapData";
import { mutations } from "../utilities/mutations";
// import axios from "axios";

const useFetch = (query, displayDropdown, displayGrid) => {
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
      const { url, options } = mutations(query, displayDropdown, displayGrid);
      console.log(url);
      const res = await fetch(url, options);
      if (res.status > 299 && res.status < 200) {
        throw new Error();
      }

      const data = await res.json();
      setList(mapData(data.items, true));
      setLoading(false);
    }
  }, [query, displayDropdown, displayGrid]);

  return { loading, list };
};

export default useFetch;
