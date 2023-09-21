import React from "react";
import { imgError } from "../StyleCSS.js/StyleCSS";

function ErrorPage(props) {
  return (
    <div>
      <img style={imgError} src="/IMG/icons/404_1.png"></img>
    </div>
  );
}

export default ErrorPage;
