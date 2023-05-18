import { useEffect } from "react";

const useOutsideClick = (ref, callback, ref2 = null) => {
  const handleClick = (e) => {
    if (
      ref.current &&
      !ref.current.contains(e.target) &&
      ref2.current &&
      !ref2.current.contains(e.target)
    ) {
      callback();
    } else if (ref.current && ref.current.contains(e.target)) {
      ref.current.focus();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

export default useOutsideClick;
