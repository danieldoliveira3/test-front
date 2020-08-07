import React, { Component } from "react";
import Total from "../Total";

class PaymentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: "",
    };
  }

  render() {
    const { result, loaded } = this.props;
    return (
      <form
        id="paymentForm"
        name="creditCardPayment"
        onSubmit={this.handleSubmit}
      >
        <div className="outboxWrap">
          <p className="titleWrapBox">CARTÃO DE CRÉDITO</p>
          <div className="wrapboxList">
            <div id="wrapList">
              <div id="paymentForm">
                <div className="inputDefault">
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
                  <input
                    id="cardName"
                    type="text"
                    placeholder="Como no cartão"
                  />
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
            </div>
          </div>
        </div>
        <Total result={result} loaded={loaded} />

        <input
          className="nextStep nextStepText"
          type="submit"
          onChange={this.handleChange}
          value="FINALIZAR PEDIDO"
          onClick={() => this.irParaOutraPagina()}
        />
      </form>
    );
  }
}

export default PaymentForm;
