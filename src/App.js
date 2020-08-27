import React from "react";
// import "./App.css";
import Navb from "./components/Navb";
import GoogleForm from "./components/GoogleForm";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navb />
      <div className="header-color">
        <GoogleForm />
        <Footer />
      </div>
    </>
  );
};

export default App;
