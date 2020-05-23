import React from "react";

function ProductBox(props) {
  return (
    <div className="productBox">
      <div className="productIgmAndName">
        <img
          src={props.item.product.imageObjects.map((img) => img.small)}
          alt={props.item.product.name}
        />
        <div className="wrapNameAndPrice">
          <p>{props.item.product.name}</p>
          <div className="productPrice">
            R$ {props.item.product.priceSpecification.price}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductBox;
