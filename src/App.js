import React from "react";
import Header from "./components/Header"
import Odometer from "./components/Odometer"
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="full-height">
      <Header text="Lab 37"/>
      <Odometer />
      <Footer copyright="Leo K."/>
    </div>
  );
}

export default App;
