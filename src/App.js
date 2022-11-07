import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState, useEffect } from "react";
import "./App.scss";
import AddFighterPage from "./pages/AddFighterPage/AddFighterPage";
import EditPage from "./pages/EditPage/EditPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProfilePage />} />
          <Route path="/edit" element={<EditPage />} />
          <Route path="/add" element={<AddFighterPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
