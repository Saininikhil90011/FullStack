import React from "react";

function Catalogs(props) {
  let obj = props["count"];
  console.log(obj["catalogs"][0]["image"]);

  return (
    <>
      {  obj['catalogs']&&
        obj["catalogs"].map((item, i) => (
          <>
            <p>{obj["catalogs"][i]["hero_pid"]}</p>
            <p>{obj["catalogs"][i]["category_id"]}</p>
            <p>{obj["catalogs"][i]["id"]}</p>
            <p>{obj["catalogs"][i]["sub_sub_category_name"]}</p>
            <p>{obj["catalogs"][i]["min_catalog_price"]}</p>
            <p>{obj["catalogs"][i]["description"]}</p>
            <p>{obj["catalogs"][i]["full_details"]}</p>
            <p>{obj["catalogs"][i]["share_text"]}</p>
            <p>{obj["catalogs"][i]["hot"]}</p>
            <p>{obj["catalogs"][i]["type"]}</p>
            <p>{obj["catalogs"][i]["num_designs"]}</p>
            <p>{obj["catalogs"][i]["name"]}</p>
            <img src={obj["catalogs"][i]["image"]} alt="" />
            <img src={obj["catalogs"][i]["collage_image"]} alt="" />
            <hr />
          </>
        ))}
    </>
  );
}

export default Catalogs;
