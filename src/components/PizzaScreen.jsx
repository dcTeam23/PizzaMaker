
export function PizzaScreen() {
  return (
    <section id="screenPizza" className="hidden">
      <div id="imagens">
        <img
          id="imageBase"
          src="https://studio.code.org/v3/assets/1M0wVT7H--jMKxjDJMc3ZQZGs7pYH3KRZNxtxFT3m3U/Pizzaa-03.png?t=1670932317000"
          alt="massa"
        />

        <img
          className="hidden"
          id="imageYellowSauce"
          src="https://studio.code.org/v3/assets/1M0wVT7H--jMKxjDJMc3ZQZGs7pYH3KRZNxtxFT3m3U/Pizzaa-04.png?t=1670932317000"
          alt="molho amarelo"
        />
        <img
          className="hidden"
          id="imageRedSauce"
          src="https://studio.code.org/v3/assets/1M0wVT7H--jMKxjDJMc3ZQZGs7pYH3KRZNxtxFT3m3U/Pizzaa-05.png?t=1670932317000"
          alt="molho vermelho"
        />

        <img
          className="hidden"
          id="imageVegNon-veg"
          src="https://studio.code.org/v3/assets/1M0wVT7H--jMKxjDJMc3ZQZGs7pYH3KRZNxtxFT3m3U/veg-nonveg.png?t=1670932317000"
          alt="Non-Veg"
        />
        <img
          className="hidden"
          id="imageVeg"
          src="https://studio.code.org/v3/assets/1M0wVT7H--jMKxjDJMc3ZQZGs7pYH3KRZNxtxFT3m3U/Veg.png?t=1670932317000"
          alt="Non-V /eg"
        />
        <img
          className="hidden"
          id="imageNon-veg"
          src="https://studio.code.org/v3/assets/ai36I_gY5JPKznE1ttg-CqVl0NhRRSPu1b34n7Ctx6c/Non-veg.png?t=1671892191000"
          alt="Non-Veg"
        />
      </div>
      <footer>
        <button id="buttonBack">⬅️</button>
      </footer>
    </section>
  );
}
