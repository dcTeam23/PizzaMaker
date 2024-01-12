import { Header } from "./Header";
import { ImgClient } from "./ImgClient";
import { OpcoesMassa } from "./OpcoesMassa";
import { OpcoesMolho } from "./OpcoesMolho";
import { OpcoesTipo } from "./OpcoesTipo";

export function MakerScreen({submit, onChange}) {
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

