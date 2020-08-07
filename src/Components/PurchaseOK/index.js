import React from "react";
import icon from "./../../assets/images/success.png";

function PurchaseOK(props) {
  return (
    <div>
      <div id="PurchaseDone">
        <img src={icon} alt="ok" />
        <p>COMPRA EFETUADA COM SUCESSO</p>
      </div>
    </div>
  );
}

export default PurchaseOK;
