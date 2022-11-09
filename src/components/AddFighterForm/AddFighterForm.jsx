import Input from "../Input/Input";
import "./AddFighterForm.scss";
import Select from "react-select";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postToFighters } from "../../utils/api";

const AddFighterForm = ({ fightersList }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [gymName, setGymName] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("");
  const [fightStyle, setFightStyle] = useState("");
  const [win, setWin] = useState("");
  const [loss, setLoss] = useState("");
  const [draw, setDraw] = useState("");

  const navigate = useNavigate();

  const handleChangeGymName = (event) => {
    setGymName(event.target.value);
  };
  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };
  const handleChangeWeight = (event) => {
    setWeight(event.target.value);
  };
  const handleChangeHeight = (event) => {
    setHeight(event.target.value);
  };
  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };
  const handleChangeFightStyle = (event) => {
    setFightStyle(event.target.value);
  };
  const handleChangeSetWin = (event) => {
    setWin(event.target.value);
  };
  const handleChangeSetLoss = (event) => {
    setLoss(event.target.value);
  };
  const handleChangeSetDraw = (event) => {
    setDraw(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    postToFighters(fightersList);
    navigate("/");
  };

  const genderOptions = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];

  const fightStyles = [
    { value: "Muay Thai", label: "Muay Thai" },
    { value: "Boxing", label: "Boxing" },
    { value: "BJJ", label: "BJJ" },
    { value: "Wrestling", label: "Wrestling" },
    { value: "Judo", label: "Judo" },
    { value: "Karate", label: "Karate" },
  ];

  return (
    <div className="edit-form">
      <div className="edit-form__upload">
        <div className="edit-form__img"></div>
        <input
          className="edit-form__choose"
          type="file"
          name="edit-form-image"
          id="edit-form-image"
        />
        <button className="edit-form__upload-btn">Upload Image</button>
      </div>

      <form className="edit-form__form" onSubmit={handleSubmit}>
        <Input label="Gym Name" />
        <Input label="Name" />
        <Input label="Age" type="number" />
        <Input label="Weight (kg)" type="number" />
        <Input label="Height (cm)" type="number" />

        <label className="edit-form__label">Gender</label>
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={genderOptions}
        />
        <br />
        <label className="edit-form__label">Fight Style</label>
        <Select
          isMulti
          name="fight-styles"
          options={fightStyles}
          className="edit-form__fight-styles"
          classNamePrefix="select"
        />
        <br />
        <Input label="Win" type="number" />
        <Input label="Loss" type="number" />
        <Input label="Draw" type="number" />
      </form>

      <div className="edit-form__save-container">
        <button
          onClick={() => {
            navigate("/");
          }}
          className="edit-form__save-btn"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddFighterForm;
