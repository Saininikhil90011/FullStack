import React, { useEffect, useState } from 'react'
import ApiData from './ApiData';

function Apiprop() {
    let [limit , setlimit] = useState([]);
    useEffect(() => {
        const apiCall = async ()=>{
            let responses = await fetch("https://fakestoreapi.com/products?limit=5");
            let responsesData = await responses.json();
            setlimit(responsesData)
            console.log(responsesData);
            

        };
        apiCall();
    },[])
  return (
    <>
        {
            limit && limit.map((item) =>(
                <>
                <ApiData item ={item}></ApiData>
                </>
            ))
        }
    </>
  )
}

export default Apiprop