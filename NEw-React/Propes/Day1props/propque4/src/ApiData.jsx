import React from "react";

function ApiData(props) {
  let product = props["item"];

  return (
    <>
      <p>{product["id"]}</p>
      <p>{product["title"]}</p>
      <p>{product["price"]}</p>
      <p>{product["description"]}</p>
      <p>{product["category"]}</p>
      <img src={product["image"]} alt="" />
    </>
  );
}

export default ApiData;
