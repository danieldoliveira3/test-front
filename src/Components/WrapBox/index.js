import React from "react";

function WrapBox(props) {
  const { ChosedComponent, items, name } = props;
  return (
    <div className="outboxWrap">
      <p className="titleWrapBox">{name}</p>
      <div className="wrapboxList">
        <div id="wrapList">
          <ChosedComponent items={items} />
        </div>
      </div>
    </div>
  );
}

export default WrapBox;
