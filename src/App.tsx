import './App.css'
import { Header } from './components/Header'

function App() {

  return (
    <>
        
  <div id="screenMaker">
      <Header />

      <div className="row">
        <section>
            <h2>Massa:</h2>
            <ul>
            <li>
                <input type="radio" id="radioBase1" name="massa" value="borda" />
                <label htmlFor="radioBase1">
                  <img className="img-icon" src="https://studio.code.org/v3/assets/1M0wVT7H--jMKxjDJMc3ZQZGs7pYH3KRZNxtxFT3m3U/Pizzaa-01.png?t=1670932317000" alt="borda recheada" />
                </label>
            </li>
            <li>
                <input type="radio" id="radioBase2" name="massa" value="tradicional" />
                <label htmlFor="radioBase2">
                  <img className="img-icon" src="https://studio.code.org/v3/assets/1M0wVT7H--jMKxjDJMc3ZQZGs7pYH3KRZNxtxFT3m3U/Pizzaa-02.png?t=1670932317000" alt="massa tradicional" />
                </label>
            </li>
            <li>
                <input type="radio" id="radioBase3" name="massa" value="fina" />
                <label htmlFor="radioBase3">
                  <img className="img-icon" src="https://studio.code.org/v3/assets/1M0wVT7H--jMKxjDJMc3ZQZGs7pYH3KRZNxtxFT3m3U/Pizzaa-03.png?t=1670932317000" alt="massa fina" />
                </label>
            </li>
            </ul>
        </section>
        <section>
            <h2>Molho:</h2>
            <ul>
            <li>
                <input type="radio" id="radioRedSauce" name="molho" value="vermelho" />
                <label htmlFor="radioRedSauce">
                  <img className="img-icon" src="https://studio.code.org/v3/assets/1M0wVT7H--jMKxjDJMc3ZQZGs7pYH3KRZNxtxFT3m3U/Pizzaa-05.png?t=1670932317000" alt="molho vermelho" />
                </label>
              </li>
              <li>
                <input type="radio" id="radioYellowSauce" name="molho" value="amarelo" />
                <label htmlFor="radioYellowSauce">
                  <img className="img-icon" src="https://studio.code.org/v3/assets/1M0wVT7H--jMKxjDJMc3ZQZGs7pYH3KRZNxtxFT3m3U/Pizzaa-04.png?t=1670932317000" alt="molho vermelho" />
                </label>
            </li>
            </ul>
        </section>
        
      </div>
      <div className="row">
        <section>
          <h2>Tipo:</h2>
          <ul>
            <li>
              <input type="checkbox" id="checkboxVeg" name="recheio" value="verdura" />
              <label htmlFor="checkboxVeg">Verdura</label>
            </li>
            <li>
              <input type="checkbox" id="checkboxNon-veg" name="recheio" value="carne" />
              <label htmlFor="checkboxNon-veg">Carne</label>
            </li>
          </ul>
        </section>
        <section>
          <img  id="img-client" src="https://padariaalieske.com.br/wp-content/uploads/2021/10/moca-comendo-pizza-PNG-783x1024.png" alt="garota comendo uma fatia de pizza"/>
        </section>
      </div>
      <footer>
        <button className="hidden"  name="buttonCreate" id="buttonCreate"> ➡️ </button>
      </footer>
    </div>

    <section id="screenPizza" className="hidden">
        <div id="imagens" >
            <img id="imageBase" src="https://studio.code.org/v3/assets/1M0wVT7H--jMKxjDJMc3ZQZGs7pYH3KRZNxtxFT3m3U/Pizzaa-03.png?t=1670932317000" alt="massa" />
            
            <img className="hidden" id="imageYellowSauce" src="https://studio.code.org/v3/assets/1M0wVT7H--jMKxjDJMc3ZQZGs7pYH3KRZNxtxFT3m3U/Pizzaa-04.png?t=1670932317000" alt="molho amarelo" />
            <img className="hidden" id="imageRedSauce" src="https://studio.code.org/v3/assets/1M0wVT7H--jMKxjDJMc3ZQZGs7pYH3KRZNxtxFT3m3U/Pizzaa-05.png?t=1670932317000" alt="molho vermelho" />
            
            <img className="hidden" id="imageVegNon-veg" src="https://studio.code.org/v3/assets/1M0wVT7H--jMKxjDJMc3ZQZGs7pYH3KRZNxtxFT3m3U/veg-nonveg.png?t=1670932317000" alt="Non-Veg" />
            <img className="hidden" id="imageVeg" src="https://studio.code.org/v3/assets/1M0wVT7H--jMKxjDJMc3ZQZGs7pYH3KRZNxtxFT3m3U/Veg.png?t=1670932317000" alt="Non-V /eg" />
            <img className="hidden" id="imageNon-veg" src="https://studio.code.org/v3/assets/ai36I_gY5JPKznE1ttg-CqVl0NhRRSPu1b34n7Ctx6c/Non-veg.png?t=1671892191000" alt="Non-Veg" />
         </div>
        <footer>
          <button id="buttonBack">⬅️</button>
        </footer>
    </section>   
    </>
  )
}

export default App
