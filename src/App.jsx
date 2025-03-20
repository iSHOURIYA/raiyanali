import React from "react";
import Hyperspeed from "./blocks/Backgrounds/Hyperspeed/Hyperspeed";
import TrueFocus from "./blocks/TextAnimations/TrueFocus/TrueFocus";
import "./blocks/Backgrounds/Hyperspeed/Hyperspeed.css";



function App() {
  return (
    <div id = "main">
      <div>
        <Hyperspeed />
      </div>
      <div class = "container">
        <TrueFocus />
      </div>
    </div>

  );
}

export default App;
