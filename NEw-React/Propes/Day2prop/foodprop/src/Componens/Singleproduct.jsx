import React from "react";

function Singleproduct(props) {
  let obj = props["props"];
  // console.log(obj["chicken-burger"]["id"]);
  // console.log(obj["chicken-burger"]["assets"][0]);

  return (
    <>
      {obj["chicken-burger"] &&
        obj["chicken-burger"]["assets"].map((item, i) => (
          <>
            <div>
              <h1>{obj["chicken-burger"]["variants"][i]["id"]}</h1>
              <h1>{obj["chicken-burger"]["variants"][i]["title"]}</h1>
              <h1>{obj["chicken-burger"]["variants"][i]["subTitle"]}</h1>
              <h1>{obj["chicken-burger"]["variants"][i]["price"]}</h1>
            </div>
            <div>
              <img src={obj["chicken-burger"]["assets"][i]} alt="" />
            </div>
          </>
        ))}
    </>
  );
}

export default Singleproduct;
