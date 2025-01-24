import React from "react";

function Data(props) {
  let postdata = props["item"];
  console.log(postdata["url"]);

  return (
    <>
      <p>{postdata["slug"]}</p>
      <p>{postdata["name"]}</p>
      <img src={postdata["url"]} alt="" />
    </>
  );
}

export default Data;
