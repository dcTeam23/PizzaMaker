export function OpcoesTipo() {
  return (
    <section>
      <h2>Tipo:</h2>
      <ul>
        <CheckOption id="1" label="Verdura"/>
        <CheckOption id="2" label="Carne"/>
      </ul>
    </section>
  );
}

function CheckOption({id, label}){
  return (
    <li>
      <input type="checkbox" id={"checkbox" + id} name="recheio" value={label.toLowerCase()} />
      <label htmlFor={"checkbox"+id}>{label}</label>
    </li>
  )
}
