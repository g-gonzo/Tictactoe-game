import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ttt.css"
import Header from "./Header";
import Game from "./Game";
import Footer from "./Footer";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Game />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);



