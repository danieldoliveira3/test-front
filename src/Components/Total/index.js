import React from "react";

function Total(props) {
  return (
    <div>
      <h2>
        Total:{" "}
        {props.loaded ? (
          (
            props.result.subTotal -
            props.result.discount +
            props.result.shippingTotal
          ).toFixed(2)
        ) : (
          <div>carregando</div>
        )}
      </h2>
      <h2>
        Desconto: {props.loaded ? props.result.discount : <div>carregando</div>}
      </h2>
      <h2>
        Entrega:{" "}
        {props.loaded ? props.result.shippingTotal : <div>carregando</div>}
      </h2>
      <h2>
        Subtotal: {props.loaded ? props.result.subTotal : <div>carregando</div>}
      </h2>
    </div>
  );
}

export default Total;
