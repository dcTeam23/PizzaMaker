/**
 * @typedef {import('../state').State['molho']} Molho
 *
 *
 * @param {{onMolho: (s: Molho) => void}} param0
 * @returns
 */
export function OpcoesMolho({ onMolho }) {
  
  const handleChange = ({target: {value}}) => {
    onMolho(value);
  }  

  return (
    <section>
      <h2>Molho:</h2>
      <ul>
        <Opcao id="5" value="vermelho" onChange={handleChange} />
        <Opcao id="4" value="amarelo" onChange={handleChange} />
      </ul>
    </section>
  );
}

/**
 * 
 * @param {{id: string, value: 'vermelho'|'amarelo', onChange}} props
 */
function Opcao({ id, value, onChange }) {
  const url = `https://studio.code.org/v3/assets/1M0wVT7H--jMKxjDJMc3ZQZGs7pYH3KRZNxtxFT3m3U/Pizzaa-0${id}.png?t=1670932317000`;

  return (
    <li>
      <input
        onChange={onChange}
        type="radio"
        id={"radio" + value}
        name="molho"
        value={value}
      />
      <label htmlFor={"radio" + value}>
        <img className="img-icon" src={url} alt={"molho " + value} />
      </label>
    </li>
  );
}
