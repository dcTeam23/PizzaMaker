import { Header } from "./Header";
import { ImgClient } from "./ImgClient";
import { OpcoesMassa } from "./OpcoesMassa";
import { OpcoesMolho } from "./OpcoesMolho";
import { OpcoesTipo } from "./OpcoesTipo";


/**
 * @typedef {import("../state").State} xState
 * @typedef {(s: xState) => xState} Callback
 */

/**
 * @param {{onChange: (c: Callback) => void}} props 
 */
export function MakerScreen({onChange}) {
  /**
   * @param {'fina'|'tradicional'|'borda'} value 
   */
  const changeBorda = (value) => {
    onChange((atual) => ({...atual, borda: value}));
  };

  /**
   * @param {'vermelho'|'amarelo'} value 
   */
  const changeMolho = (/** @type {string}*/ molho) => {
    onChange((atual) => ({...atual, molho: molho}));
  };

  /**
   * @param {['carne', 'verdura', boolean]} param 
   */
  const changeTipo = ([name, checked]) => {
    onChange((atual) => {
      let newvalue = Array.from(atual.tipos); //create a copy from actual value

      if (!checked) {
        //remove
        newvalue = newvalue.filter((val) => name !== val);
      } else {
        
        if (!newvalue.some((val) => val === name)){
          //add
          newvalue.push(name);
        }
      }
      return ({...atual, tipos: newvalue})
    });
  };

  
  return <div id="screenMaker">
    <Header />
    <div className="row">
      <OpcoesMassa onMassa={changeBorda} />
      <OpcoesMolho onMolho={changeMolho} />
    </div>
    <div className="row">
      <OpcoesTipo onTipo={changeTipo} />
      <ImgClient />
    </div>

  </div>;
}

