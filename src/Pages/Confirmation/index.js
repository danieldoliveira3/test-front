import React from "react";
import Total from "./../../Components/Total";
import WrapBox from "./../../Components/WrapBox";
import PurchaseOK from "./../../Components/PurchaseOK";
import CreditCardData from "./../../Components/CreditCardData";

function Confirmation(props) {
  const { items, result, loaded } = props;
  return (
    <div>
      <PurchaseOK />
      <WrapBox
        items={items}
        ChosedComponent={CreditCardData}
        name="PAGAMENTO"
      />
      <WrapBox items={items} ChosedComponent={PurchaseOK} name="PRODUTOS" />
      <Total result={result} loaded={loaded} />
    </div>
  );
}

export default Confirmation;
