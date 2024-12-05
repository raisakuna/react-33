import React from "react";
// const Product = (props) => {
//   return;
//   <div>Mobile Name: {props.title}</div>;
//   <div>Mobile brand: {props.brand}</div>;
//   <div>Mobile price: {props.price}</div>;
// };

const Product = ({ title, brand, price, rom, fingerPrint, ram }) => {
  return;
  <>
    <h2>Mobile Name: {title}</h2>;<h2>Mobile brand: {brand}</h2>;
    <h2>Mobile price: {price}</h2>;<h2>Ram: {ram}</h2>
    <h2>fingerPrint: {fingerPrint}</h2>
  </>;
};

export default Product;
