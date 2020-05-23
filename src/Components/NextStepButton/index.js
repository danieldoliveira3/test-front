import React from "react";

function NextStepButton(props) {
  return (
    <div className="nextStep">
      <div className="nextStepText">{props.text}</div>
    </div>
  );
}

export default NextStepButton;
