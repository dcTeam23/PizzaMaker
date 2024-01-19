import { useState } from "react";

import "./App.css";

import { PizzaScreen } from "./components/PizzaScreen";
import { MakerScreen } from "./components/MakerScreen";
import { initState } from "./state";




function App() {
  const [state, _setState] = useState(initState);
  const [isMakerVisible, setIsMakerVisible] = useState(true);

  return (
    <>
      { isMakerVisible ? 
        <MakerScreen onChange={_setState} /> :
        <PizzaScreen molho={state.molho} borda={state.borda} tipos={state.tipo} />
      }
      {
        isMakerVisible && <button onClick={() => setIsMakerVisible(false)}> ➡️ </button>}
      {
        !isMakerVisible && <button onClick={() => setIsMakerVisible(true)}> ⬅️ </button> 
      }

    </>
  );
}

export default App;
