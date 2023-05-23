import { useEffect, useState, useCallback } from "react";
import Form from "./input";
import Dropdown from "./dropdown";
import Grid from "./grid";
import useFetch from "../lib/useFetch";
import Modal from "./modal";

const Container = () => {
  const [dropdownValue, setDropdownValue] = useState("");
  const [gridValue, setGridValue] = useState("");
  const [displayDropdown, setDisplayDropdown] = useState(false);
  const [displayGrid, setDisplayGrid] = useState(false);
  const [id, setId] = useState("");

  const onPassChange = useCallback(
    (value, isClickedOut) => {
      setDropdownValue(value);
      if (isClickedOut) setDisplayDropdown(false);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dropdownValue]
  );
  const onSubmit = useCallback(
    (value) => {
      setGridValue(value);
      setDisplayDropdown(false);
      setDisplayGrid(true);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [gridValue]
  );

  const handleDropdownClick = (id) => {
    setId(id);
  };

  const [loadingDropdown, dropdownData] = useFetch(
    dropdownValue,
    "dropdown",
    onPassChange
  );
  const [loadingGrid, gridData] = useFetch(gridValue, "grid", onSubmit);

  useEffect(() => {
    if (!dropdownValue) {
      setDisplayDropdown(false);
      return;
    }
    setDisplayDropdown(true);
  }, [dropdownValue]);

  return (
    <div>
      <div className="relative z-0">
        <Form
          onPassChange={onPassChange}
          onSubmit={onSubmit}
          isLoading={loadingDropdown || loadingGrid}
        />
        {displayDropdown ? (
          <div className="z-10 w-full absolute -bottom-18">
            <Dropdown onClick={handleDropdownClick}>{dropdownData}</Dropdown>
          </div>
        ) : null}

        {displayGrid ? (
          <div className="z-0 -bottom-18">
            <Grid>{gridData}</Grid>
          </div>
        ) : null}
      </div>
      <Modal>{id}</Modal>
    </div>
  );
};

export default Container;
