import React from "react";
import { imgError } from "../StyleCSS.js/StyleCSS";

function OrderSuccessful(props) {
  return (
    <div>
      <h1>Chúc mừng bạn đã thanh toán thành công!!</h1>
      <img style={imgError} src="IMG/icons/thanhCong.png"></img>
    </div>
  );
}

export default OrderSuccessful;
