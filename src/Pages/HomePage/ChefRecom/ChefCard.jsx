import React from "react";
import Button from "../../../Components/Button/Button";
const ChefCard = ({item}) => {
    const {name,recipe,image}=item
  return (
      <div className="card  ">
       
          <img src={image} alt={image} className="h-80 w-full" />
       
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe.slice(0,80)}</p>
          <div className="card-actions">
            {/* <button className=" btn btn-outline border-0  border-b-4 text-orange-300 hover:bg-slate-800 hover:text-orange-300">Add to Cart</button> */}
            <Button title="Add to Cart"/>

          </div>
        </div>
      </div>
  );
};

export default ChefCard;
