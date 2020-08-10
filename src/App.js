import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CaptionInput from "./components/CaptionInput";
import HowToUse from "./components/HowToUse";
const App = () => {
  return (
    <div className="App">
      <Header />
      <CaptionInput />
      <HowToUse />
      <Footer />
    </div>
  );
};

export default App;
