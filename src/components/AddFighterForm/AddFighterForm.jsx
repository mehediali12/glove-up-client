import Input from "../Input/Input";
import "./AddFighterForm.scss";
import Select from "react-select";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postToFighters, uploadImage } from "../../utils/api";

const AddFighterForm = ({ setFightersUpdated }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [formData, setFormData] = useState({});
  // const [image, setImage] = useState({});

  const navigate = useNavigate();

  const numberInputs = ["weight", "age", "height", "win", "loss", "draw"];

  const inputChangeHandler = (e) => {
    let value;

    if (numberInputs.includes(e.target.name)) {
      // Convert to number
      value = +e.target.value;
    } else {
      value = e.target.value;
    }

    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const fightStyleChangeHandler = (e) => {
    const values = e.map((selectedValue) => selectedValue.value);

    setFormData({
      ...formData,
      fightStyle: values,
    });
  };

  const genderChangeHandler = (e) => {
    setFormData({
      ...formData,
      gender: e.value,
    });
  };

  const imageChangeHandler = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const result = await uploadImage(formData.image);
    const imagePath = result.data.imageUrl;
    formData.image = imagePath;

    postToFighters(formData);

    setFightersUpdated(true);

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
        <div className="edit-form__img">Upload an image</div>
        <input
          onChange={(e) => {
            imageChangeHandler(e);
          }}
          className="edit-form__choose"
          type="file"
          name="edit-form-image"
          id="edit-form-image"
        />
        {/* <button className="edit-form__upload-btn">Upload Image</button> */}
      </div>

      <form className="edit-form__form" onSubmit={handleSubmit}>
        <Input
          name="gymName"
          inputChangeHandler={inputChangeHandler}
          label="Gym Name"
        />
        <Input
          name="name"
          inputChangeHandler={inputChangeHandler}
          label="Name"
        />
        <Input
          name="age"
          inputChangeHandler={inputChangeHandler}
          label="Age"
          type="number"
        />
        <Input
          name="weight"
          inputChangeHandler={inputChangeHandler}
          label="Weight (kg)"
          type="number"
        />
        <Input
          name="height"
          inputChangeHandler={inputChangeHandler}
          label="Height (cm)"
          type="number"
        />

        <label className="edit-form__label">Gender</label>
        <Select
          name="gender"
          // inputChangeHandler={inputChangeHandler}
          defaultValue={selectedOption}
          onChange={genderChangeHandler}
          options={genderOptions}
        />
        <br />
        <label className="edit-form__label">Fight Style</label>
        <Select
          // inputChangeHandler={inputChangeHandler}
          isMulti
          name="fightStyles"
          options={fightStyles}
          onChange={fightStyleChangeHandler}
          className="edit-form__fight-styles"
          classNamePrefix="select"
        />
        <br />
        <Input
          name="win"
          inputChangeHandler={inputChangeHandler}
          label="Win"
          type="number"
        />
        <Input
          name="loss"
          inputChangeHandler={inputChangeHandler}
          label="Loss"
          type="number"
        />
        <Input
          name="draw"
          inputChangeHandler={inputChangeHandler}
          label="Draw"
          type="number"
        />
        <div className="edit-form__save-container">
          <button className="edit-form__save-btn">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddFighterForm;
