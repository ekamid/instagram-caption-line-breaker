import React from "react";
import "./App.css";
import Heading from "./components/Heading";
import CaptionInput from "./components/CaptionInput";
import HowTo from "./components/HowTo";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <CaptionInput />
      <HowTo />
    </div>
  );
};

export default App;
