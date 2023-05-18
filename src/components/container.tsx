import { useEffect, useState } from "react";
import Form from "./input";
import Dropdown from "./dropdown";
import Grid from "./grid";

const items = [
  "item1",
  "item1",
  "item1",
  "item1",
  "item1",
  "item1",
  "item1",
  "item1",
  "item1",
  "item1",
];

const Container = () => {
  const [value, setValue] = useState("");
  const [displayDropdown, setDisplayDropdown] = useState(false);
  const [displayGrid, setDisplayGrid] = useState(false);

  const onPassChange = (value) => setValue(value);
  const onSubmit = () => {
    setDisplayDropdown(false);
    setDisplayGrid(true);
  };

  useEffect(() => {
    setDisplayDropdown(true);
  }, [value]);

  return (
    <div>
      <div className="relative z-0">
        <Form onPassChange={onPassChange} onSubmit={onSubmit} />
        {displayDropdown ? (
          <div className="z-10 w-full absolute -bottom-18">
            <Dropdown>{items}</Dropdown>
          </div>
        ) : null}

        {displayGrid ? (
          <div className="z-0 -bottom-18">
            <Grid>{items}</Grid>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Container;
