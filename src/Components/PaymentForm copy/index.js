import React, { useState } from "react";

function PaymentForm(props) {
  const [input] = useState();
  return (
    <div id="paymentForm">
      <div className="inputDefaultMargin0 inputDefault">
        <label>Número do Cartão:</label>
        <input
          id="cardNumber"
          type="tel"
          pattern="[0-9\s]{13,19}"
          placeholder="____.____.____.____"
        />
      </div>

      <div className="inputDefault">
        <label>Nome do Titular:</label>
        <input id="cardName" type="text" placeholder="Como no cartão" />
      </div>

      <div className="inputMiniWrap">
        <div className="inputMini">
          <label>Validade (mês/ano):</label>
          <input id="cardDate" type="text" placeholder="__/____" />
        </div>

        <div className="inputMini">
          <label>CVV:</label>
          <input id="cardCVV" type="text" placeholder="___" />
        </div>
      </div>
    </div>
  );
}

export default PaymentForm;
