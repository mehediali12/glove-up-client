import "./ProfileFighters.scss";
import AddIcon from "../../assets/icons/add.svg";
import fighter1 from "../../assets/images/fighter-1.jpg";

const ProfileFighters = () => {
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

      <article className="fighter">
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

        {/* <div className="fighter__record">
          <p>W/L</p>
          <p className="fighter__win">5</p>
          <p className="fighter__loss">1</p>
          <p className="fighter__draw">0</p>
        </div> */}
      </article>
    </main>
  );
};

export default ProfileFighters;
