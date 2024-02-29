// import styled from "styled-components";

import { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";

// const Button = styled.button ` // top ya botom me khi bhi daal skte h
// background-color : black;
// color:white;
// padding:10px;

// `

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  }; // curley braces me js run hota h

  return (
    <>{isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}</>
  );
}

export default App;
