import { useState, useRef, useEffect } from "react";
import useOutsideClick from "../lib/useOutsideClick";

const Form = ({ onPassChange, onSubmit }) => {
  const [isType, setIsType] = useState(false);
  const [search, setSearch] = useState("");

  const inputRef = useRef(null);
  const btnRef = useRef(null);

  useOutsideClick(
    inputRef,
    () => {
      setIsType(false);
    },
    btnRef
  );

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    if (!search) {
      setIsType(false);
    }
  }, [search]);

  const handleChange = (e) => setSearch(e.target.value);

  const handleKeyDown = () => {
    if (search) {
      setIsType(true);
    }
  };
  const handlePassChange = () => {
    onPassChange(search);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(search);
  };

  return (
    <div className="relative z-0">
      <form
        className="pl-10 pr-10 pt-10"
        onChange={handlePassChange}
        onSubmit={handleSubmit}
      >
        <input
          className={
            isType
              ? "w-full p-1 h-16 text-4xl border-4 border-black autofocus focus:outline-none caret-w-2"
              : "w-1/2 p-1 h-16 text-4xl border-4 border-black autofocus focus: outline-none caret-w-2"
          }
          ref={inputRef}
          type="text"
          value={search}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        ></input>
        {isType ? (
          <div className="absolute top-11 right-11">
            <button
              className="p-1 w-16 text-3xl min-w-max h-14 border-4 border-fuchsia-400"
              type="submit"
              ref={btnRef}
            >
              more results
            </button>
          </div>
        ) : null}
      </form>
    </div>
  );
};

export default Form;
