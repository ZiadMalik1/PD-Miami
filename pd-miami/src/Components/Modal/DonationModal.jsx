import isNil from "lodash/fp/isNil";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import DonationForm from "../DonationForm/DonationForm";
import "./DonationModal.scss";

const DonationModal = ({ modalState, onClose }) => {
  const modal = useRef(null);
  const [amount, setAmount] = useState(0);

  const handleKeyUp = useCallback(
    (e) => {
      const keys = {
        27: () => {
          e.preventDefault();
          onClose();
          window.removeEventListener("keyup", handleKeyUp, false);
        },
      };

      if (keys[e.keyCode]) {
        keys[e.keyCode]();
      }
    },
    [onClose]
  );

  const handleOutsideClick = useCallback((e) => {}, [onClose]);

  useEffect(() => {
    console.log(modalState);
    window.addEventListener("keyup", handleKeyUp, false);
    document.addEventListener("click", handleOutsideClick, false);

    return () => {
      window.removeEventListener("keyup", handleKeyUp, false);
      document.removeEventListener("click", handleOutsideClick, false);
    };
  }, [handleKeyUp, handleOutsideClick]);

  return (
    <>
      <CSSTransition
        in={modalState}
        unmountOnExit
        timeout={{ enter: 0, exit: 300 }}
      >
        <div className="modal" onClick={onClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-body">
              <DonationForm />
            </div>
          </div>
        </div>
      </CSSTransition>
    </>
  );
};

export default DonationModal;
