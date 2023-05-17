import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal");

function Modal({ children }) {
  console.log(children);
  const modalRef = useRef(null);
  if (!modalRef.current) modalRef.current = document.createElement("div");

  useEffect(() => {
    modalRoot.appendChild(modalRef.current);
    return () => modalRoot.removeChild(modalRef.current);
  }, []);

  return createPortal(
    <div className="absolute top-5 border-4 border-black">
      <div className="flex">{children}</div>
    </div>,
    modalRef.current
  );
}

export default Modal;
