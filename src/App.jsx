import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/Home";
import { Route, Routes } from "react-router-dom";
import FavList from "./component/FavList "
import NavBar from './component/NavBar';

function App() {
  return (
    <>
    <NavBar/>
      <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="/favlist" element={<FavList/>} />
      </Routes>
    </>
  );
}

export default App;
