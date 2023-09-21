import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Input } from "reactstrap";
import { actionSetListFoodOrder } from "../Redux/Action/OrderAction";
import {
  styleFoodDetail,
  styleFoodName,
  styleKhungFood,
} from "../StyleCSS.js/StyleCSS";

function FoodDetail(props) {
  let [number, setNumber] = useState("");
  let [money, setMoney] = useState("");
  let stateRedux = useSelector((state) => state);
  let listFoodOrder = stateRedux.listFoodOrderNew;
  let dispatch = useDispatch();

  //khai báo listfood:
  let listFood = useSelector((state) => state.listFood);
  let idParam = useParams();
  let foodId = parseInt(idParam.id);
  let handleGioHang = () => {
    let foodOrderNew = {
      foodNumber: number,
      foodId: foodId,
      totalMoney: money,
    };
    let foodOrders = listFoodOrder;
    foodOrders.push(foodOrderNew);
    dispatch(actionSetListFoodOrder(foodOrders));
  };
  //
  let foodDetail = listFood.find((food) => food.id === foodId);
  const src = "/IMG/foodTypeById/foodTypeById_" + foodDetail.id + ".jpg";
  let foodItems = (
    <div class="row" style={styleFoodDetail}>
      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <img alt={foodDetail.foodName} src={src} style={styleKhungFood}></img>
      </div>
      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="row" style={styleFoodName}>
          {foodDetail.foodName}: {foodDetail.price}đ
        </div>
        <br />
        <h2>Tổng tiền: {money}</h2>
        <br />
        <Input
          style={{ justifyContent: "center" }}
          type="number"
          min="0"
          value={number}
          onChange={(event) => {
            setNumber(event.target.value);
          }}
        ></Input>

        <div class="row" style={{ marginTop: "30px" }}>
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <button
              type="button"
              class="btn btn-large btn-block btn-primary"
              onClick={() => setMoney(number * foodDetail.price)}
            >
              In tiền
            </button>
          </div>

          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <Link to={"/gioHang"}>
              <button
                type="button"
                class="btn btn-primary"
                onClick={handleGioHang}
              >
                Thêm vào giỏ hàng
              </button>
            </Link>
          </div>
        </div>
      </div>
      //{" "}
    </div>
  );
  return foodItems;
}
export default FoodDetail;
