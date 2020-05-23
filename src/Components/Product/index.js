import React from "react";

function Product(props) {
  return (
    <div className="outboxProduct">
      <p className="titleProduct">PRODUTOS</p>
      <div className="wrapProducts">
        <div id="productList">
          {props.item.map((item) => {
            return (
              <div className="productBox">
                <div className="productIgmAndName">
                  <img
                    src={item.product.imageObjects.map((img) => img.small)}
                    alt={item.product.name}
                  />
                  <div className="wrapNameAndPrice">
                    <p>{item.product.name}</p>
                    <div className="productPrice">
                      R$ {item.product.priceSpecification.price}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Product;
