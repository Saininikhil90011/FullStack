import React, { useEffect, useState } from "react";
import './Day501.css'

function Day501() {
  let [catalogs, setcatalogs] = useState([]);
  useEffect(() => {
    const apiCall = async () => {
      let response = await fetch("http://localhost:3000/");
      let responseData = await response.json();
      // console.log(responseData);

      setcatalogs(responseData);
    };
    apiCall();
  }, []);
//   console.log(
//     catalogs["catalogs"] && catalogs["catalogs"][0]["product_images"][0]["url"]
//   );

  return (
    <div>
      {catalogs["catalogs"] &&
        catalogs["catalogs"].map((item, i) => (
          < div>
            <p className="catalogs">{catalogs["catalogs"][i]["id"]}</p>
            <p>{catalogs["catalogs"][i]["hero_pid"]}</p>
            <p>{catalogs["catalogs"][i]["name"]}</p>
            <p>{catalogs["catalogs"][i]["category_id"]}</p>
            <p>{catalogs["catalogs"][i]["sub_sub_category_name"]}</p>
            <p>{catalogs["catalogs"][i]["min_catalog_price"]}</p>
            <p>{catalogs["catalogs"][i]["min_product_price"]}</p>
            <p>{catalogs["catalogs"][i]["description"]}</p>
            <p>{catalogs["catalogs"][i]["full_details"]}</p>
            <p>{catalogs["catalogs"][i]["share_text"]}</p>
            <p>{catalogs["catalogs"][i]["hot"]}</p>
            <p>{catalogs["catalogs"][i]["type"]}</p>
            <p>{catalogs["catalogs"][i]["pre_booking"]}</p>
            <p>{catalogs["catalogs"][i]["priority"]}</p>
            <p>{catalogs["catalogs"][i]["num_suppliers"]}</p>
            <p>{catalogs["catalogs"][i]["num_designs"]}</p>
            <img src={catalogs["catalogs"][i]["image"]} alt="" />
            <img src={catalogs["catalogs"][i]["collage_image"]} alt="" />
            <p>{catalogs["catalogs"][i]["image_aspect_ratio"]}</p>
            <p>{catalogs["catalogs"][i]["collage_image_aspect_ratio"]}</p>
            <p>{catalogs["catalogs"][i]["created"]}</p>
            <p>{catalogs["catalogs"][i]["created_iso"]}</p>
            <p>{catalogs["catalogs"][i]["valid"]}</p>
            <p>{catalogs["catalogs"][i]["trend"]}</p>
            <p>{catalogs["catalogs"][i]["has_mrp"]}</p>
            <p>{catalogs["catalogs"][i]["is_added_to_wishlist"]}</p>
            {catalogs["catalogs"][i] &&
              catalogs["catalogs"][i]["product_images"].map((item, i1) => (
                <>
                <h1>{catalogs["catalogs"][i]["product_images"][i1]["id"]}</h1>
                <img src={catalogs["catalogs"][i]["product_images"][i1]["url"]} alt="" />
                </>
              ))}
              <h1>{catalogs["catalogs"][i]['activated']}</h1>
              <h1>{catalogs["catalogs"][i]['activated_iso']}</h1>
              <h1>{catalogs["catalogs"][i]['num_shares']}</h1>


          </>
        ))}
    </div>
  );
}

export default Day501;
