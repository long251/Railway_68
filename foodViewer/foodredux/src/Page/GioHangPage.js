import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
function GioHangPage(props) {
  let stateRedux = useSelector((state) => state);
  let listFoodOrder = stateRedux.listFoodOrderNew;
  // let dispatch = useDispatch();
  let listFood = stateRedux.listFood;
  let totalMoney = 0;
  listFoodOrder.forEach((element) => {
    let e = parseInt(element.totalMoney);
    totalMoney += e;
  });
  let items = listFoodOrder.map((foodOrder) => {
    let food = listFood.find((food) => food.id === foodOrder.foodId);
    // setTotalMoney(totalMoney + foodOrder.totalMoney);
    return (
      <div class="container">
        <table class="table">
          <thead>
            <tr>
              <th>Tên hàng order</th>
              <th>Số lượng</th>
              <th>Thành tiền</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{food.foodName}</td>
              <td>{foodOrder.foodNumber}</td>
              <td>{foodOrder.totalMoney}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  });
  return (
    <>
      {items}
      <h2>Tổng tiền là: {totalMoney}</h2>
      <Link to={"/orderSuccessful"}>
        <button type="button" class="btn btn-large btn-block btn-primary">
          Thanh Toán ngay!
        </button>
      </Link>
      <Link to={"/huyDon"}>
        <button type="button" class="btn btn-large btn-block btn-primary">
          Hủy đơn
        </button>
      </Link>
    </>
  );
}

export default GioHangPage;
