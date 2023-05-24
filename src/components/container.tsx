import { useEffect, useState, useCallback } from "react";
import Form from "./input";
import Dropdown from "./dropdown";
import Grid from "./grid";
import useFetch from "../lib/useFetch";
import Modal from "./modal";

const modalData = [
  "lM50DQAAQBAJ",
  "http://books.google.com/books/publisher/content?id=lM50DQAAQBAJ&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE73wFZvUG9WAYhb_uZ_EGUM-quDEAWtQ8nmiZlhcoij9QOLOfrau7b8wShj9PkiBvtMiov0BEYPKuJ5DwPr9li64JAZyZB76PjLu9k5-8v3J9T-9Mn0&source=gbs_api",
  "Atlas of Clinical Imaging and Anatomy of the Equine Head",
  "Larry Kimberlin, Alex zur Linden, Lynn Ruoff",
  "John Wiley & Sons",
  "\u003ci\u003eAtlas of Clinical Imaging and Anatomy of the Equine Head\u003c/i\u003e presents a clear and complete view of the complex anatomy of the equine head using cross-sectional imaging. \u003cbr\u003e \u003cul\u003e \u003cli\u003eProvides a comprehensive comparative atlas to structures of the equine head\u003c/li\u003e \u003cli\u003ePairs gross anatomy with radiographs, CT, and MRI images\u003c/li\u003e \u003cli\u003ePresents an image-based reference for understanding anatomy and pathology\u003c/li\u003e \u003cli\u003eCovers radiography, computed tomography, and magnetic resonance imaging\u003c/li\u003e \u003c/ul\u003e",
];
const Container = () => {
  const [dropdownValue, setDropdownValue] = useState("");
  const [gridValue, setGridValue] = useState("");
  const [displayDropdown, setDisplayDropdown] = useState(false);
  const [displayGrid, setDisplayGrid] = useState(false);
  const [displayModal, setDisplayModal] = useState(true);
  const [id, setId] = useState("");

  const onPassChange = useCallback(
    (value, isClickedOut) => {
      console.log("typing");
      setDropdownValue(value);
      if (isClickedOut) setDisplayDropdown(false);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dropdownValue]
  );
  const onSubmit = useCallback(
    (value) => {
      console.log("more details clicked");
      setGridValue(value);
      setDisplayDropdown(false);
      setDisplayGrid(true);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [gridValue]
  );

  const handleDropdownClick = useCallback(
    (id) => {
      console.log("handleDropdownClick clicked");
      setId(id);
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const handleModalClick = () => setDisplayModal(false);

  const [loadingDropdown, dropdownData] = useFetch(
    dropdownValue,
    "dropdown",
    onPassChange
  );
  const [loadingGrid, gridData] = useFetch(gridValue, "grid", onSubmit);
  // const [loadingModal, modalData] = useFetch(id, "modal", handleDropdownClick);

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
          isLoading={loadingDropdown}
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
      {displayModal ? (
        <Modal onClick={handleModalClick}>
          <div className="overflow-y-auto">
            <div className="flex flex-col w-10/12 m-1/4 gap-1">
              <p>{modalData[3]}</p>
              <p>{modalData[2]}</p>
            </div>
            <div className="flex flex-col items-center gap-10">
              <img src={modalData[1]} className="w-80 h-min" />
              <div className="w-2/3">
                <p>{modalData[5]}</p>
              </div>
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

export default Container;
