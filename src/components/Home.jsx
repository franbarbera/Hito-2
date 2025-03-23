import "./Home.css";
import Header from "./Header";
import CardPizza from "./CardPizza";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <h2>Explora nuestras deliciosas pizzas 🍕</h2>
      <div className="row">
        <CardPizza
          name="Napolitana"
          price={5950}
          ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
          img="https://assets.elgourmet.com/wp-content/uploads/2023/03/8metlvp345_portada-pizza.jpg"
        />
        <CardPizza
          name="Española"
          price={6950}
          ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
          img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
        />
        <CardPizza
          name="Pepperoni"
          price={6950}
          ingredients={["mozzarella", "pepperoni", "orégano"]}
          img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"
        />
      </div>
      {/* Footer al final de la página */}
      <footer className="footer">
        © 2021 - Pizzería Mamma Mía! - Todos los derechos reservados
      </footer>
    </div>
  );
};

export default Home;
