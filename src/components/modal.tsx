import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

function Modal({ children, onClick }) {
  const modalRef = useRef(null);
  if (!modalRef.current) modalRef.current = document.createElement("div");

  useEffect(() => {
    const modalRoot = document.querySelector("#modal");

    modalRoot.appendChild(modalRef.current);
    return () => modalRoot.removeChild(modalRef.current);
  }, []);

  return createPortal(
    <div className="flex justify-center items-center">
      <div className="fixed z-20 w-1/2 h-5/6 overflow-y-auto top-12 border-4 border-black bg-white">
        <div className="relative w-full">
          {children}
          <div
            className="absolute z-20 right-5 top-2 text-5xl border-4 border-black pl-2 pr-2 hover:cursor-pointer"
            onClick={onClick}
          >
            x
          </div>
        </div>
      </div>
    </div>,
    modalRef.current
  );
}

export default Modal;
