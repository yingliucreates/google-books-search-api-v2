import { useState, useRef, useEffect } from "react";
import useOutsideClick from "../lib/useOutsideClick";

const Form = ({ onSubmit }) => {
  const [isReady, setIsReady] = useState(true);
  const [isType, setIsType] = useState(false);
  const [search, setSearch] = useState("");

  const inputRef = useRef(null);
  useOutsideClick(inputRef, () => {
    setIsType(false);
  });
  const handleChange = (e) => setSearch(e.target.value);

  useEffect(() => {
    if (isReady) {
      inputRef.current.focus();
    }
  }, [isReady]);

  useEffect(() => {
    if (!search) {
      setIsType(false);
    }
  }, [search]);

  const handleKeyDown = () => {
    if (search) {
      setIsType(true);
    }
  };

  const handleSubmit = () => {
    onSubmit(search);
  };

  return (
    <div className="relative z-0">
      <form className="pl-10 pr-10 pt-10" onChange={handleSubmit}>
        <input
          className={
            isType
              ? "w-full p-1 h-16 text-4xl border-4 border-black focus:outline-none caret-w-2"
              : "w-1/2 p-1 h-16 text-4xl border-4 border-black focus: outline-none caret-w-2"
          }
          ref={inputRef}
          type="text"
          defaultValue={""}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        ></input>
        {isType ? (
          <div className="absolute top-11 right-11">
            <div className="p-1 w-16 text-3xl min-w-max h-14 border-4 border-fuchsia-400">
              more results
            </div>
          </div>
        ) : null}
      </form>
    </div>
  );
};

export default Form;
