import React from "react";
import WrapBox from "./../../Components/WrapBox";
import Products from "./../../Components/Products";
import Total from "./../../Components/Total";
import NextStepButton from "./../../Components/NextStepButton";

function Bag(props) {
  const { items, Link, result, loaded } = props;
  return (
    <div>
      <WrapBox items={items} ChosedComponent={Products} name="PRODUTOS" />
      <Total result={result} loaded={loaded} />
      <NextStepButton
        text="SEGUIR PARA O PAGAMENTO"
        Link={Link}
        nextStep="/payment"
      />
    </div>
  );
}

export default Bag;
