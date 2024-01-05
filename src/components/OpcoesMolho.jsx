export function OpcoesMolho() {
  return (
    <section>
      <h2>Molho:</h2>
      <ul>
        <Opcao id="5" value="vermelho"/>
        <Opcao id="6" value="amarelo"/>
      </ul>
    </section>
  );
}


function Opcao({id, value}){
  const url = `https://studio.code.org/v3/assets/1M0wVT7H--jMKxjDJMc3ZQZGs7pYH3KRZNxtxFT3m3U/Pizzaa-0${id}.png?t=1670932317000`
  
  return (
    <li>
    <input type="radio" id={"radio" + value} name="molho" value={value} />
    <label htmlFor={"radio" + value}>
      <img className="img-icon" src={url} alt={"molho " + value} />
    </label>
  </li>
  )
}