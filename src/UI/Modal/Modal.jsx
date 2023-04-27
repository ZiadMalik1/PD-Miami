import PropTypes from "prop-types";
import React, { useCallback, useEffect, useRef } from "react";
import "./Modal.scss";

const Modal = ({ onCloseRequest, modalState, children }) => {
  const modal = useRef(null);

  const handleClick = (event) => {
    onCloseRequest();
    event.stopPropagation();
  };

  const handleKeyUp = useCallback(
    (e) => {
      const keys = {
        27: () => {
          e.preventDefault();
          onCloseRequest();
          window.removeEventListener("keyup", handleKeyUp, false);
        },
      };

      if (keys[e.keyCode]) {
        keys[e.keyCode]();
      }
    },
    [onCloseRequest]
  );

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp, false);
    return () => {
      window.removeEventListener("keyup", handleKeyUp, false);
    };
  }, [handleKeyUp]);

  return (
    <div
      className={`modal__container ${modalState ? "show-modal" : ""}`}
      id="modal-container"
      ref={modal}
      onClick={(e) => handleClick}
    >
      <div className="modal__content">
        <div className="modal__close close-modal" title="Close">
          <i className="bx bx-x"></i>
        </div>
        {children}
        <button
          className="modal__button-link close-modal"
          onClick={onCloseRequest}
        >
          Close
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  onCloseRequest: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Modal;
