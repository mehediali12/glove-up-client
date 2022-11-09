import { getGymsList } from "../../utils/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SearchGyms.scss";

const SearchGyms = () => {
  const [gymsList, setGymsList] = useState(null);

  const getGymsItems = async () => {
    try {
      const { data } = await getGymsList();
      setGymsList(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGymsItems();
  }, []);

  if (!gymsList) {
    return <h1>Cannot find gym...</h1>;
  }

  return (
    <div className="gyms">
      {gymsList
        .filter((gym) => gym.gymName !== "Fightzone")
        .map((gym) => {
          return (
            <Link key={gym.id} className="gym-link" to={`/${gym.username}`}>
              <article className="gym">
                <div className="gym__img-container">
                  <img
                    className="gym__img"
                    src={`${gym.profileImg}`}
                    alt="gym__gym-1"
                  />
                </div>
                <div className="gym__info">
                  <p className="gym__name">NAME: {gym.gymName}</p>
                  <p className="gym__username">USERNAME: @{gym.username}</p>
                  <p className="gym__address">ADDRESS: {gym.address}</p>
                </div>
              </article>
            </Link>
          );
        })}
    </div>
  );
};

export default SearchGyms;
