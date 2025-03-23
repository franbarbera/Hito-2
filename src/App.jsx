import { useState } from "react";
import { pizzaCart } from "./data/pizzas.js";
import "./App.css";

function App() {
  const [cart, setCart] = useState(pizzaCart);

  const handleIncrease = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => item.count > 0)
    );
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <div className="App">
      <header>
        <h1>Pizzería Mamma Mía 🍕</h1>
      </header>

      <div>
        {cart.length > 0 ? (
          cart.map((item) => (
            <div key={item.id} className="card">
              <img src={item.img} alt={item.name} />
              <h2>{item.name}</h2>
              <p>${item.price.toLocaleString("es-CL")}</p>
              <p>Cantidad: {item.count}</p>
              <div>
                <button onClick={() => handleIncrease(item.id)}>➕</button>
                <button onClick={() => handleDecrease(item.id)}>➖</button>
              </div>
            </div>
          ))
        ) : (
          <p style={{ color: "#fff", textAlign: "center" }}>
            No hay pizzas en el carrito 🍕
          </p>
        )}
      </div>

      {cart.length > 0 && (
        <div>
          <p className="total">Total: ${total.toLocaleString("es-CL")}</p>
          <button className="pay-button">Pagar</button>
        </div>
      )}

      <footer>
        © 2021 - Pizzería Mamma Mía! - Todos los derechos reservados
      </footer>
    </div>
  );
}

export default App;
