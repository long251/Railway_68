import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { styleFoodName, styleKhungFood } from "../StyleCSS.js/StyleCSS";
// import FoodType from "./FoodType";

function HomePage(props) {
  let listFoodType = useSelector((state) => state.listFoodType);

  let items = listFoodType.map((foodType) => {
    const src = "/IMG/foodTypes/foodType_" + foodType.id + ".jpg";
    const url = "/foodtype/" + foodType.id;
    return (
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <Link to={url}>
          <img alt={foodType.typeName} src={src} style={styleKhungFood}></img>
        </Link>
        <div className="row" style={styleFoodName}>
          {foodType.typeName}
        </div>
      </div>
    );
  });
  return <div className="row">{items}</div>;
}
export default HomePage;
