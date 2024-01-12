import { Header } from "./Header";
import { ImgClient } from "./ImgClient";
import { OpcoesMassa } from "./OpcoesMassa";
import { OpcoesMolho } from "./OpcoesMolho";
import { OpcoesTipo } from "./OpcoesTipo";

export function MakerScreen({submit, onChange}) {
  const changeBorda = (value) => {
    onChange((atual) => ({...atual, borda: value}));
  };

  const changeMolho = () => {
    const molho = 'vermelho';
    onChange((atual) => ({...atual, molho: molho}));
  };

  const changeTipo = () => {
    const tipo = ['carne'];
    onChange((atual) => ({...atual, tipo: tipo}));
  };

  
  return <div id="screenMaker">
    <Header />

    <div className="row">
      {/* `onChange(
            (s) => ({...s, massa: 'vermelha'})
          )`
       quando a Massa for escolhida */}
      <OpcoesMassa onMassa={changeBorda} />
      {/* `onChange()` quando o Molho for escolhido */}
      <OpcoesMolho />
    </div>
    <div className="row">
      {/* `onChange()` quando o Tipo for escolhido */}
      <OpcoesTipo />
      <ImgClient />
    </div>
    <footer>
      <button onClick={submit}> ➡️ </button>
    </footer>
  </div>;
}

