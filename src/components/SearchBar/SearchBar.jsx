import "./SearchBar.scss";
import SearchIcon from "../../assets/icons/search.svg";

const SearchBar = () => {
  return (
    <div className="search">
      <input className="search__bar" type="search" placeholder="Search..." />
      <button className="search__btn">
        <img className="search__icon" src={SearchIcon} alt="search icon" />
      </button>
    </div>
  );
};

export default SearchBar;
