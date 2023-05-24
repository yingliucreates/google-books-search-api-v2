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
    <div className="absolute z-20 pb-32 flex w-full top-1/4 justify-center">
      <div className="relative w-3/4 border-4 border-black">
        {children}
        <div
          className="absolute z-20 right-5 top-2 text-5xl hover:cursor-pointer"
          onClick={onClick}
        >
          x
        </div>
      </div>
    </div>,
    modalRef.current
  );
}

export default Modal;
