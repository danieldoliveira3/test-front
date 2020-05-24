import React from "react";
import ProductList from "./../../Components/ProductList";
import Total from "./../../Components/Total";
import NextStepButton from "./../../Components/NextStepButton";

function Bag(props) {
  return (
    <div>
      <ProductList item={props.items} />
      <Total result={props.result} loaded={props.loaded} />
      <NextStepButton text="SEGUIR PARA O PAGAMENTO" />
    </div>
  );
}

export default Bag;
