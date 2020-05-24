import React from "react";

function NextStepButton(props) {
  const { Link, text, nextStep } = props;
  return (
    <div className="nextStep">
      <div className="nextStepText">
        <Link className="white" to={nextStep}>
          {text}
        </Link>
      </div>
    </div>
  );
}

export default NextStepButton;
