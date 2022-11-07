import Input from "../Input/Input";
import "./AddFighterForm.scss";
import Select from "react-select";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddFighterForm = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const options = [
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

      <form className="edit-form__form">
        <Input label="Name" />
        <Input label="Age" type="number" />
        <Input label="Weight (kg)" type="number" />
        <Input label="Height (cm)" type="number" />

        <label className="edit-form__label">Gender</label>
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
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
          Save
        </button>
      </div>
    </div>
  );
};

export default AddFighterForm;
