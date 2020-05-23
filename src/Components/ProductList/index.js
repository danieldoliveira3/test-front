import React from "react";
import ProductBox from "./../ProductBox";

function ProductList(props) {
  return (
    <div className="outboxProduct">
      <p className="titleProduct">PRODUTOS</p>
      <div className="wrapProducts">
        <div id="productList">
          {props.item.map((item, index) => {
            return <ProductBox item={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
