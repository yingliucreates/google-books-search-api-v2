import { useEffect, useState } from "react";
import Form from "./input";
import Dropdown from "./dropdown";
import Grid from "./grid";
import useFetch from "../lib/useFetch";

const Container = () => {
  const [value, setValue] = useState("");
  const [displayDropdown, setDisplayDropdown] = useState(false);
  const [displayGrid, setDisplayGrid] = useState(false);

  const { loading, list } = useFetch(value);

  const onPassChange = (value, isClickedOut = false) => {
    setValue(value);
    if (isClickedOut) setDisplayDropdown(false);
  };
  const onSubmit = () => {
    setDisplayDropdown(false);
    setDisplayGrid(true);
  };

  useEffect(() => {
    if (!value) setDisplayDropdown(false);
    else setDisplayDropdown(true);
  }, [value]);

  return (
    <div>
      <div className="relative z-0">
        <Form
          onPassChange={onPassChange}
          onSubmit={onSubmit}
          isLoading={loading}
        />
        {displayDropdown ? (
          <div className="z-10 w-full absolute -bottom-18">
            <Dropdown>{list}</Dropdown>
          </div>
        ) : null}

        {displayGrid ? (
          <div className="z-0 -bottom-18">
            <Grid>{list}</Grid>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Container;
