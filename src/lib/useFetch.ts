import { useState, useEffect, useRef, useMemo } from "react";
import { mutations } from "../utilities/mutations";
import { mapData } from "../utilities/mapData";
import { debounceAsync } from "../utilities/debounce";

const useFetch = (query, toggle, dependency) => {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const requestBooks = async () => {
    setLoading(true);
    const { url, options } = mutations(query, toggle);

    //seperate this part out - we don't want status code in a hook
    const res = await fetch(url, options);
    if (res.status > 299 && res.status < 200) {
      throw new Error();
    }
    const data = await res.json();
    //
    console.log(toggle, url, data);
    setList(mapData(data, toggle));
    setLoading(false);
  };

  const ref = useRef(requestBooks);

  useEffect(() => {
    ref.current = requestBooks;
  }, [requestBooks]);

  const debouncedRequestBooks = useMemo(() => {
    const func = () => {
      ref.current?.();
    };
    return debounceAsync(func, 500);
  }, []);

  useEffect(() => {
    if (!query) {
      setList([]);
      setLoading(false);
      return;
    } else {
      debouncedRequestBooks();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dependency]);

  return [loading, list];
};

export default useFetch;
