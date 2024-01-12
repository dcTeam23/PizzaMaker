import { useState } from "react";

import "./App.css";
import { Header } from "./components/Header";
import { ImgClient } from "./components/ImgClient";
import { OpcoesMassa } from "./components/OpcoesMassa";
import { OpcoesMolho } from "./components/OpcoesMolho";
import { OpcoesTipo } from "./components/OpcoesTipo";
import { PizzaScreen } from "./components/PizzaScreen";

const initState = { 
  borda: "fina", 
  molho: "vermelho", 
  tipo: ["verdura", "carne"] 
};

function App() {
  const [state, _setState] = useState(initState);
  const [isMakerVisible, setIsMakerVisible] = useState(true);

  return (
    <>
      { isMakerVisible ? 
       <MakerScreen submit={() => setIsMakerVisible(false)} /> :
        <PizzaScreen molho={state.molho} borda={state.borda} tipos={state.tipo} />
      }
      {
        !isMakerVisible && <button onClick={() => setIsMakerVisible(true)}> ⬅️ </button> 
      }
    </>
  );
}

export default App;

function MakerScreen({submit}: {submit: () => void}) {
  return <div id="screenMaker">
    <Header />

    <div className="row">
      <OpcoesMassa />
      <OpcoesMolho />
    </div>
    <div className="row">
      <OpcoesTipo />
      <ImgClient />
    </div>
    <footer>
      <button onClick={submit}> ➡️ </button>
    </footer>
  </div>;
}

