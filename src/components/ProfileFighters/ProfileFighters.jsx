import "./ProfileFighters.scss";
import AddIcon from "../../assets/icons/add.svg";
import fighter1 from "../../assets/images/fighter-1.jpg";
import Modal from "../Modal/Modal";
import { useState } from "react";

const ProfileFighters = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <main className="p-fighters">
      <div className="add-fighter">
        <button className="add-fighter__btn">
          <img
            src={AddIcon}
            alt="add fighter"
            className="add-fighter__add-icon"
          />
          Add Fighter
        </button>
      </div>

      <article
        className="fighter"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        <div className="fighter__img-container">
          <img
            className="fighter__img"
            src={fighter1}
            alt="fighter__fighter-1"
          />
        </div>
        <div className="fighter__info">
          <p className="fighter__name">NAME: John Smith</p>
          <p className="fighter__age">AGE: 25</p>
          <p className="fighter__weight">WEIGHT: 80kg</p>
          <p className="fighter__height">HEIGHT: 178cm</p>
          <p className="fighter__gender">GENDER: Male</p>
          <p className="fighter__fight-style">FIGHT STYLE: Muay Thai, BJJ</p>
        </div>
      </article>
      {openModal && <Modal closeModal={setOpenModal} />}
    </main>
  );
};

export default ProfileFighters;
