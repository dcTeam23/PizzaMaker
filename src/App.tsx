import { useState } from "react";

import "./App.css";

import { PizzaScreen } from "./components/PizzaScreen";
import { MakerScreen } from "./components/MakerScreen";
import { initState } from "./state";


function App() {
  const [state, _setState] = useState(initState);

  return (
    <div style={{display: 'flex'}}>
      <MakerScreen onChange={_setState} /> 
      <PizzaScreen molho={state.molho} borda={state.borda} tipos={state.tipos} />      
    </div>
  );
}

export default App;
