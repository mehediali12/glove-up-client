import { useState } from "react";
// import error from "../../assets/icons/error-24px.svg";
import "./Input.scss";

const Input = ({
  value,
  label,
  name,
  type,
  valid,
  min,
  phoneValid,
  emailValid,
}) => {
  const [newValue, setNewValue] = useState(null);
  return (
    <div className="input__container">
      <div className="input__sub-container">
        <label htmlFor={label} className="label">
          {label}
        </label>
        <input
          value={newValue || newValue === "" ? newValue : value}
          min={min}
          name={name}
          placeholder={label}
          className={valid ? "input" : "input input--invalid"}
          type={type ? type : "text"}
          onChange={(event) => {
            setNewValue(event.target.value);
          }}
        />
      </div>
      {/* {!valid && (
        <div className="invalid">
          <img src={error} alt="error icon" />
          <p className="invalid__text">This field is required</p>
        </div>
      )}
      {!phoneValid && type === "tel" && (
        <div className="invalid">
          <img src={error} alt="error icon" />
          <p className="invalid__text">
            Format 01234567890 or +1 (234) 567-8910
          </p>
        </div>
      )}
      {!emailValid && type === "email" && (
        <div className="invalid">
          <img src={error} alt="error icon" />
          <p className="invalid__text">Email needs an @</p>
        </div>
      )} */}
    </div>
  );
};

export default Input;
