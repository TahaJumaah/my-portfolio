import { useState } from "react";
import "./App.css";
import NavBar from "./components/navBar";
import AboutMe from "./components/aboutMe";
import MyWork from "./components/myWork";
import Modal from "./components/Modal";
import ContactMe from "./components/contactMe";

function App() {
  const [showAbout, setShowAbout] = useState(true);

  function changeView(Event) {
    if (Event.target.innerText == "My Work") {
      setShowAbout(false);
    }
    if (
      Event.target.innerText == "About Me" ||
      Event.target.innerText == "TJ"
    ) {
      setShowAbout(true);
    }
  }

  return (
    <div className="layout">
      <NavBar changeView={changeView}></NavBar>
      {showAbout ? <AboutMe /> : <MyWork />}
      <ContactMe></ContactMe>
    </div>
  );
}

export default App;
