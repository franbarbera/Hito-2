const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card" style={{ width: "100%" }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Precio: ${price.toLocaleString()}</p>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <button className="btn btn-primary">Ver más</button>
        <button className="btn btn-secondary">Añadir</button>
      </div>
    </div>
  );
};

export default CardPizza;
