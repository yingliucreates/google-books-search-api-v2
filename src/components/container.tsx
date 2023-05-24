import { useEffect, useState, useCallback } from "react";
import Form from "./input";
import Dropdown from "./dropdown";
import Grid from "./grid";
import useFetch from "../lib/useFetch";
import Modal from "./modal";
import Details from "./details";

const Container = () => {
  const [dropdownValue, setDropdownValue] = useState("");
  const [gridValue, setGridValue] = useState("");
  const [displayDropdown, setDisplayDropdown] = useState(false);
  const [displayGrid, setDisplayGrid] = useState(false);
  const [displayModal, setDisplayModal] = useState(false);
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
      setDisplayModal(false);
      setDisplayGrid(true);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [gridValue]
  );

  const handleDetailClick = useCallback(
    (id) => {
      setId(id);
      setDisplayDropdown(false);
      setDisplayModal(true);
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [id]
  );

  const handleModalClick = () => setDisplayModal(false);

  const [loadingDropdown, dropdownData] = useFetch(
    dropdownValue,
    "dropdown",
    onPassChange
  );
  const [loadingGrid, gridData] = useFetch(gridValue, "grid", onSubmit);
  const [loadingModal, modalData] = useFetch(id, "modal", handleDetailClick);

  useEffect(() => {
    if (!dropdownValue) {
      setDisplayDropdown(false);
      return;
    }
    setDisplayDropdown(true);
  }, [dropdownValue]);

  return (
    <div
      className={
        displayModal
          ? "bg-fuchsia-600 h-screen min-h-screen w-screen"
          : "h-screen"
      }
    >
      <div className="relative z-0">
        <Form
          onPassChange={onPassChange}
          onSubmit={onSubmit}
          isLoading={loadingDropdown}
          displayModal={displayModal}
        />
        {displayDropdown ? (
          <div className="z-10 w-full absolute -bottom-18">
            <Dropdown onDetailClick={handleDetailClick}>
              {dropdownData}
            </Dropdown>
          </div>
        ) : null}

        {displayGrid ? (
          <div className="z-0 -bottom-18">
            <Grid onDetailClick={handleDetailClick} displayModal={displayModal}>
              {gridData}
            </Grid>
          </div>
        ) : null}
      </div>
      {displayModal ? (
        <Modal onClick={handleModalClick}>
          <Details content={modalData}></Details>
        </Modal>
      ) : null}
    </div>
  );
};

export default Container;
