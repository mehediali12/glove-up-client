import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.scss";
import AddFighterPage from "./pages/AddFighterPage/AddFighterPage";
import EditPage from "./pages/EditPage/EditPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
// import axios from "axios";
import { getFightersList } from "./utils/api";
import SearchPage from "./pages/SearchPage/SearchPage";
import Shootfighters from "./pages/Shootfighters/Shootfighters";
import FightFactory from "./pages/FightFactory/FightFactory";

function App() {
  const [fightersList, setFightersList] = useState(null);

  const getFightersItems = async () => {
    try {
      const { data } = await getFightersList();
      setFightersList(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFightersItems();
  }, []);

  if (!fightersList) {
    return <h1>Cannot find...</h1>;
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<ProfilePage fightersList={fightersList} />}
          />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/edit" element={<EditPage />} />
          <Route path="/shootfighters" element={<Shootfighters />} />
          <Route path="/fightfactory" element={<FightFactory />} />
          <Route
            path="/add"
            element={<AddFighterPage fightersList={fightersList} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
