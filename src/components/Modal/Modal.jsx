import "./Modal.scss";
import CloseBtn from "../../assets/icons/close.svg";
import fighter1 from "../../assets/images/fighter-1.jpg";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Modal = ({ closeModal, fightersList }) => {
  const navigate = useNavigate();

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

          <img
            src={`${fightersList.image}`}
            alt="fighter 1"
            className="modal__img"
          />
        </div>

        <div className="modal__info-container">
          <div className="modal__stats">
            <div className="modal__info">
              <p className="modal__name">GYM NAME: {fightersList.gymName}</p>
              <p className="modal__name">NAME: {fightersList.name}</p>
              <p className="modal__age">AGE: {fightersList.age}</p>
              <p className="modal__weight">WEIGHT: {fightersList.weight}</p>
              <p className="modal__height">HEIGHT: {fightersList.height}</p>
              <p className="modal__gender">GENDER: {fightersList.gender}</p>
              <p className="modal__fight-style">
                FIGHT STYLE: {fightersList.fightStyle}
              </p>
            </div>
            <div className="modal__record">
              <p className="modal__record-title">RECORD:</p>
              <p className="modal__win">WIN: {fightersList.win}</p>
              <p className="modal__loss">LOSS: {fightersList.loss}</p>
              <p className="modal__draw">DRAW: {fightersList.draw}</p>
            </div>
          </div>

          <div className="modal__buttons">
            <button
              onClick={() => {
                navigate("/edit");
              }}
              className="modal__edit"
            >
              Edit
            </button>
            <button className="modal__delete">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
