import "./Menu.css";
import React from "react";
import foodData from "../../data/db.json";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      <h1>Menu</h1>
      <ul className="cards">
        {foodData.foods.map((food) => (
          <li key={food.id} class="card">
            <img src={food.img} alt="" />
            <h2>{food.name}</h2>
            <p>Type: {food.type}</p>
            <p>Price: ${food.price}</p>
            <Link to={`/readmore/${food.id}`}>Read more</Link>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;