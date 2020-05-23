import React from "react";

function Total(props) {
  return (
    <div className="totalWrap">
      <div className="totalBox">
        <div className="totalFlexbox">
          <div>PRODUTOS: </div>
          <div>
            R$ {props.loaded ? props.result.subTotal : <div>carregando</div>}
          </div>
        </div>

        <div className="totalFlexbox">
          <div>FRETE: </div>
          <div>
            R${" "}
            {props.loaded ? props.result.shippingTotal : <div>carregando</div>}
          </div>
        </div>

        <div className="totalFlexbox orange">
          <div>DESCONTO: </div>
          <div>
            - R$ {props.loaded ? props.result.discount : <div>carregando</div>}
          </div>
        </div>
        <div className="totalFlexbox totalPrice">
          <div>TOTAL</div>

          <div>
            R${" "}
            {props.loaded ? (
              (
                props.result.subTotal -
                props.result.discount +
                props.result.shippingTotal
              ).toFixed(2)
            ) : (
              <div>carregando</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Total;
