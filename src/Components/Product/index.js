import React from "react";

function Product(props) {
  return (
    <div id="Product">
      <div>
        {props.item.map((item) => {
          return (
            <div>
              <h3>{item.product.name}</h3>
              <h3>{item.product.price}</h3>
              <img
                src={item.product.imageObjects.map((img) => img.small)}
                alt={item.product.name}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Product;
