import React from "react";
import Header from "./Components/Header/header.js";
import Main from "./Components/Main/main.js";
import Footer from "./Components/Footer/footer.js";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styled from "style-components";
// import * as S from "App.js";
// import Lupa from "./Components/Assets/lupa.svg";

// *{
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// }
// const h1 = styled.Header``

export default function App() {
  return (
    <BrowserRouter>
      {/* <Routes> */}
      {/* <Route path="" element="" /> */}
      <Header />
      <Main />
      <Footer />
      {/* </Routes> */}
    </BrowserRouter>
  );
}
