import React, { useEffect, useState } from 'react'
import Data from './Data';

function Postapi() {
    let [post , setpost] = useState()

    useEffect(() => {
        const apiCall = async ()=>{
            let response = await fetch("https://dummyjson.com/posts/tags")
            let responseData = await response.json()
            setpost(responseData)
            console.log(responseData);
            
        };
        apiCall();

},[])

  return (
    <>
        {
            post && post.map((item) =>(
                <>
                    <Data item = {item}></Data>
                </>
            ))
        }    
    </>
  )
}

export default Postapi