import React from "react";
import { Link } from "react-router-dom";
import NextStepButton from "./../../Components/NextStepButton";
import Total from "./../../Components/Total";
import WrapBox from "./../../Components/WrapBox";
import PaymentForm from "./../../Components/PaymentForm";

function Payment(props) {
  const { items, result, loaded } = props;
  return (
    <form>
      <PaymentForm result={result} loaded={loaded} />
    </form>
  );
}

export default Payment;
