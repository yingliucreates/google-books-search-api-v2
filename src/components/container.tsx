import { useState } from "react";
import Form from "./input";
import Dropdown from "./dropdown";
import List from "./list";

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
  const onSubmit = (value) => setValue(value);
  return (
    <div>
      <div className="relative z-0">
        <Form onSubmit={onSubmit} />
        <div className="z-10 w-full absolute -bottom-18">
          <Dropdown>{items}</Dropdown>
        </div>
        <div className="z-0 -bottom-18">
          <List />
        </div>
      </div>
    </div>
  );
};

export default Container;
