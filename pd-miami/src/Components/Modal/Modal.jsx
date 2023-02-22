import React, { useEffect, useRef, useCallback, useState } from "react";
import isNil from "lodash/fp/isNil";
import { TfiClose } from "react-icons/tfi";
import Amount from "../Amount/Amount";
import "./Modal.scss";
import StripeContainer from "../StripeContainer/StripeContainer";

const DonationModal = ({ modalState, setModalState }) => {
  const modal = useRef(null);
  const [amount, setAmount] = useState(0);

  // const handleKeyUp = useCallback(
  //   (e) => {
  //     const keys = {
  //       27: () => {

  //           e.preventDefault();
  //           setModalState();
  //           window.removeEventListener("keyup", handleKeyUp, false);

  //       },
  //     };

  //     if (keys[e.keyCode]) {
  //       keys[e.keyCode]();
  //     }
  //   },
  //   [setModalState]
  // );

  // const handleOutsideClick = useCallback(
  //   (e) => {
  //     if (!isNil(modal) && modalState) {
  //       if (!modal.current.contains(e.target)) {
  //         if (modalState) {
  //           setModalState();
  //           document.removeEventListener("click", handleOutsideClick, false);
  //         }
  //       }
  //     }
  //   },
  //   [setModalState]
  // );

  // useEffect(() => {
  //   window.addEventListener("keyup", handleKeyUp, false);
  //   document.addEventListener("click", handleOutsideClick, false);

  //   return () => {
  //     window.removeEventListener("keyup", handleKeyUp, false);
  //     document.removeEventListener("click", handleOutsideClick, false);
  //   };
  // }, [handleKeyUp, handleOutsideClick]);

  return (
    <>
      <div
        className={
          modalState ? "services__modal active-modal" : "services__modal"
        }
      >
        <div className="services__modal-content" ref={modal}>
          <div className="header-content">
            <div className="header">
              <h2 className="services__modal-title">Donate</h2>
              <TfiClose className="close-button" onClick={setModalState} />
            </div>
            <div className="caption">
              Help us with the costs of maintaining this service on a weekly
              basis.
            </div>
          </div>
          <div className="body-content">
            {amount ? (
              <StripeContainer amount={amount} />
            ) : (
              <Amount setAmount={setAmount} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DonationModal;
