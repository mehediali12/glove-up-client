import "./Modal.scss";
import CloseBtn from "../../assets/icons/close.svg";
import fighter1 from "../../assets/images/fighter-1.jpg";
import { useState } from "react";

const Modal = ({ closeModal }) => {
  return (
    <div className="modal">
      <div className="modal__container">
        <div className="modal__img-container">
          <button className="modal__close">
            <img
              src={CloseBtn}
              alt="close button"
              onClick={() => closeModal(false)}
            />
          </button>

          <img src={fighter1} alt="fighter 1" className="modal__img" />
        </div>

        <div className="modal__info-container">
          <div className="modal__stats">
            <div className="modal__info">
              <p className="modal__name">NAME: John Smith</p>
              <p className="modal__age">AGE: 25</p>
              <p className="modal__weight">WEIGHT: 80kg</p>
              <p className="modal__height">HEIGHT: 178cm</p>
              <p className="modal__gender">GENDER: Male</p>
              <p className="modal__fight-style">FIGHT STYLE: Muay Thai, BJJ</p>
            </div>
            <div className="modal__record">
              <p className="modal__record-title">RECORD:</p>
              <p className="modal__win">WIN: 5</p>
              <p className="modal__loss">LOSS: 1</p>
              <p className="modal__draw">DRAW: 0</p>
            </div>
          </div>

          <div className="modal__buttons">
            <button className="modal__edit">Edit</button>
            <button className="modal__delete">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
