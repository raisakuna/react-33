import React from "react";

const Person = () => {
  const Person = {
    name: "John",
    age: 30,
    email: "john@abc.com",
  };

  const title = "My page";

  return (
    <>
      <div>
        <p>Name = {Person.name}</p>
        <p>Age = {Person.age}</p>
        <p>email = {Person.email}</p>
      </div>
      <h1>{MyPage}</h1>
      <p>2 +3</p>
      <p>{2 + 3}</p>
    </>
  );
};

export default Person;
