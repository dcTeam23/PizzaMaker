export function OpcoesMassa() {
  
  return (
    <section>
      <h2>Massa:</h2>
      <ul>
        <OpcaoMassa id="1" value="borda"/>
        <OpcaoMassa id="2" value="tradicional" />
        <OpcaoMassa id="3" value="fina" />
      </ul>
    </section>
  );
}

function OpcaoMassa({ id, value }) {
  const url = `https://studio.code.org/v3/assets/1M0wVT7H--jMKxjDJMc3ZQZGs7pYH3KRZNxtxFT3m3U/Pizzaa-0${id}.png?t=1670932317000`;
  return (
    <li>
      <input type="radio" id={"radioBase" + id} name="massa" value={value} />
      <label htmlFor={"radioBase" + id}>
        <img className="img-icon" src={url} alt={value} />
      </label>
    </li>
  );
}
