import "./ProfileFighters.scss";
import AddIcon from "../../assets/icons/add.svg";
// import fighter1 from "../../assets/images/fighter-1.jpg";
import Modal from "../Modal/Modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfileFighters = (props) => {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  return (
    <main className="p-fighters">
      <div className="add-fighter">
        <button
          onClick={() => {
            navigate("/add");
          }}
          className="add-fighter__btn"
        >
          <img
            src={AddIcon}
            alt="add fighter"
            className="add-fighter__add-icon"
          />
          Add Fighter
        </button>
      </div>

      {props.fightersList
        .filter((fighter) => fighter.gymName === "fightzone")
        .map((fighter) => {
          return (
            <article
              className="fighter"
              onClick={() => {
                setOpenModal(true);
              }}
            >
              <div className="fighter__img-container">
                <img
                  className="fighter__img"
                  src={`${fighter.image}`}
                  alt="fighter__fighter-1"
                />
              </div>
              <div className="fighter__info">
                <p className="fighter__name">NAME: {fighter.name}</p>
                <p className="fighter__age">AGE: {fighter.age}</p>
                <p className="fighter__weight">WEIGHT: {fighter.weight}</p>
                <p className="fighter__height">HEIGHT: {fighter.height}</p>
                <p className="fighter__gender">GENDER: {fighter.gender}</p>
                <p className="fighter__fight-style">
                  FIGHT STYLE:{" "}
                  {fighter.fightStyle.map((style) => {
                    return <span>{style} </span>;
                  })}
                </p>
                {/* FIGHT STYLE:{" "}
                {fighter.fightStyle.map((style) => (
                  <p>{fighter.fightStyle}</p>
                ))}
              </p>

              {fighter.fightStyle.map((style) => (
                <p>hi </p>
              ))} */}
              </div>
            </article>
          );
        })}
      {openModal && (
        <Modal closeModal={setOpenModal} fightersList={props.fightersList} />
      )}
    </main>
  );
};

export default ProfileFighters;
