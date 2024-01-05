import './App.css'
import { Header } from './components/Header'
import { ImgClient } from './components/ImgClient'
import { OpcoesMassa } from './components/OpcoesMassa'
import { OpcoesMolho } from './components/OpcoesMolho'
import { OpcoesTipo } from './components/OpcoesTipo'
import { PizzaScreen } from './components/PizzaScreen'

function App() {

  return (
    <>
        
  <div id="screenMaker">
      <Header />

      <div className="row">
        <OpcoesMassa/>
        <OpcoesMolho/>
      </div>
      <div className="row">
        <OpcoesTipo/>
       <ImgClient />
      </div>
      <footer>
        <button className="hidden"> ➡️ </button>
      </footer>
    </div>

<PizzaScreen/>
    </>
  )
}

export default App
