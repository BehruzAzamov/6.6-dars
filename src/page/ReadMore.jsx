import "./ReadMore.css"
import React from 'react';
import { useParams } from 'react-router-dom';
import foodData from '../../data/db.json';

const ReadMore = () => {
  const { id } = useParams();
  const selectedFood = foodData.foods.find(food => food.id === parseInt(id));

  return (
    <div className="read-more">
      <h1>{selectedFood.name}</h1>
      <img src={selectedFood.img} alt={selectedFood.name} />
      <p>Type: {selectedFood.type}</p>
      <p>Price: ${selectedFood.price}</p>
      <h3>Ingredients:</h3>
      <ul>
        {selectedFood.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default ReadMore;