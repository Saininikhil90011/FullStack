import React from "react";
import Singleproduct from "./Singleproduct";
function Menue(props) {
  let obj = props["count"];
  // console.log(obj['chicken-burger']['mainImage']);
  // console.log(obj['chicken-burger']['assets'][4]);

  return (
    <>
      <div>
        <h1>{obj["milkshake"]["id"]}</h1>
        <h1>{obj["milkshake"]["title"]}</h1>
        <p>{obj["milkshake"]["description"]}</p>
        <img src={obj["milkshake"]["mainImage"]} alt="" />
      </div>
      <Singleproduct props={obj}></Singleproduct>
    </>
  );
}

export default Menue;
