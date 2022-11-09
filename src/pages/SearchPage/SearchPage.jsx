import Navbar from "../../components/Navbar/Navbar";
import SearchIcon from "../../assets/icons/search.svg";
import SearchBar from "../../components/SearchBar/SearchBar";
import SearchGyms from "../../components/SearchGyms/SearchGyms";
import "./SearchPage.scss";

const SearchPage = () => {
  return (
    <div>
      <SearchBar />
      <SearchGyms />
      <Navbar />
    </div>
  );
};

export default SearchPage;
