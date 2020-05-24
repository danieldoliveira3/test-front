import React from "react";

function ProductBox(props) {
  const { items } = props;
  return (
    <div className="productBox">
      <div className="productIgmAndName">
        <img
          src={items.product.imageObjects.map((img) => img.small)}
          alt={items.product.name}
        />
        <div className="wrapNameAndPrice">
          <p>{items.product.name}</p>
          <div className="productPrice">
            R$ {items.product.priceSpecification.price}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductBox;
