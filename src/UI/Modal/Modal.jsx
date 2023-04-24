import React, { useEffect, useRef, useCallback } from "react";
import isNil from "lodash/fp/isNil";
import PropTypes from "prop-types";
import classes from "./Modal.module.scss";

const Modal = ({ onCloseRequest, children }) => {
  const modal = useRef(null);

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
    <div className={classes.modalOverlay} onClick={onCloseRequest}>
      <div
        className={classes.modalOverlay__modal}
        ref={modal}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className={classes.modalOverlay__modal__closeButton}
          onClick={onCloseRequest}
        />
        {children}
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
