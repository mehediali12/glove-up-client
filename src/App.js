import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState, useEffect } from "react";
import "./App.scss";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProfilePage />} />
          {/* <Route path="/commute" element={<CommutePage />} />
          <Route path="/route" element={<RoutePage />} />
          <Route path="/complete" element={<CompletePage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
