import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { styleFoodName, styleKhungFood } from "../StyleCSS.js/StyleCSS";

function FoodType(props) {
  let listFoodType = useSelector((state) => state.listFoodType);

  let idParam = useParams();
  let typeId = parseInt(idParam.id);
  let foodTypeDetail = listFoodType.find((foodType) => foodType.id === typeId);
  let foods = foodTypeDetail.foods;
  let foodTypeById = foods.map((food) => {
    const src = "/IMG/foodTypeById/foodTypeById_" + food.id + ".jpg";
    const url = "/foodDetail/" + food.id;
    return (
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <Link to={url}>
          <img
            alt={food.typeName}
            src={src}
            style={styleKhungFood}
          ></img>
        </Link>
        <div className="row" style={styleFoodName}>
          {food.foodName}
        </div>
      </div>
    );
  });

  return <div className="row">{foodTypeById}</div>;
}

export default FoodType;
