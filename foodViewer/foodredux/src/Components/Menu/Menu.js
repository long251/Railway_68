import React from "react";
import { Link } from "react-router-dom";
import { linkStyle, menuStyle } from "../../StyleCSS.js/StyleCSS";

function Menu(props) {
  return (
    <div style={menuStyle} className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <Link style={linkStyle} to={"/home"}>
          <h4>HOME</h4>
        </Link>
      </div>
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <Link style={linkStyle} to={"/food"}>
          <h4>FOOD</h4>
        </Link>
      </div>
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <Link style={linkStyle} to={"/customer"}>
          <h4>CUSTOMER</h4>
        </Link>
      </div>
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <Link style={linkStyle} to={"/giohang"}>
          <h4>CART</h4>
        </Link>
      </div>
    </div>
  );
}

export default Menu;
