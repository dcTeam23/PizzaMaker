/**
 *
 * @param {{onTipo: ([string, boolean]) => void}} props
 */
export function OpcoesTipo({ onTipo }) {
  const handleChange = ({ target: { checked, name } }) => {
    onTipo([name, checked]);
  };

  return (
    <section>
      <h2>Tipo:</h2>
      <ul>
        <CheckOption id="1" label="Verdura" onChange={handleChange} />
        <CheckOption id="2" label="Carne" onChange={handleChange} />
      </ul>
    </section>
  );
}

/**
 * @param {{id: string, label: 'Carne'| 'Verdura', onChange: React.ChangeEventHandler<import("react").InputHTMLAttributes>}} param0
 */
function CheckOption({ id, label, onChange }) {
  return (
    <li>
      <input
        type="checkbox"
        id={"checkbox" + id}
        name={label.toLowerCase()}
        value={label.toLowerCase()}
        onChange={onChange}
      />
      <label htmlFor={"checkbox" + id}>{label}</label>
    </li>
  );
}
