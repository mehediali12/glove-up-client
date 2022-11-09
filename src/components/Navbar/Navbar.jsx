import SearchIcon from "../../assets/icons/search.svg";
import ProfileIcon from "../../assets/icons/profile.svg";
import "./Navbar.scss";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="navbar__search">
        <img
          className="navbar__search-icon"
          src={SearchIcon}
          alt="search icon"
          onClick={() => {
            navigate("/search");
          }}
        />
      </div>
      <div className="navbar__divider"></div>
      <div className="navbar__profile">
        <img
          className="navbar__profile-icon"
          src={ProfileIcon}
          alt="profile icon"
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
    </div>
  );
};

export default Navbar;
