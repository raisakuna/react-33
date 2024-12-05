import React from "react";

const TernaryOperator = ({ name, age, panCard }) => {
  if (age > 18) {
    console.log("You can drive");
  } else {
    console.log("u cannot drive");
  }
  age > 18 ? console.log("You can drive") : console.log("You cannot drive");

  return (
    <div>
      <h1>Name ={name}</h1>
      <h2>
        {age > 18} ? <h3>You can drive</h3> : <h3>You cannot drive</h3>
      </h2>

      <h6>{panCard ? <h5>You can open account</h5> : <h5> you cannot open </h5></h6>
    </div>
  );
};

export default TernaryOperator;
