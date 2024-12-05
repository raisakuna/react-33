import React from "react";

const ProductProp = () => {
  return (
    <div>
      <Product
        title="Galaxy s23 ultra"
        brand="samsung"
        price={15000}
        ram="128gb"
        fingerPrint="yes"
      />
      <Product title="Apple 14" brand="apple" price={90000} rom="16gb" />
      <Product title="Zio  ultra" brand="zio" price={3500} />
    </div>
  );
};

export default ProductProp;
