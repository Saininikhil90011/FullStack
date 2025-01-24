import React from 'react'

function Que05() {

    //
    let store = {
            "storeName": "Tech Store",
            "products": [
                {
                    "productId": "P001",
                    "name": "Laptop",
                    "price": 800,
                    "specs": {
                        "processor": "Intel i7",
                        "ram": "16GB",
                        "storage": "512GB SSD"
                    }
                },
                {
                    "productId": "P002",
                    "name": "Smartphone",
                    "price": 500,
                    "specs": {
                        "processor": "Snapdragon 888",
                        "ram": "8GB",
                        "storage": "128GB"
                    }
                }
            ]
        };
    //

  return (
    <>
    <p>{store['storeName']}</p>
    
    </>
  )
}

export default Que05