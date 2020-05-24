import React from "react";
import ProductBox from "./../ProductBox";
function Products(props) {
  const { items } = props;
  return items.map((item, index) => {
    return <ProductBox items={item} key={index} />;
  });
}

export default Products;
