import React,{ useEffect, useState } from 'react'

function Day406() {
    //
    let [albums, setalbums] = useState([]);
    
        useEffect(()=>{
            const apiCall = async() => {
                //
                let response = await fetch("https://jsonplaceholder.typicode.com/albums");
                let responseData  =  await response.json();
                console.log(responseData);
                
                setalbums(responseData);
                //
            }
            apiCall();
        },[])

    //
  return (
    <>
    {
        albums&&
        albums.map((item,i) => (
            <k>
            {/* <p>{albums[i]['albumId']}</p> */}
            <p>{albums[i]['id']}</p>
            <p>{albums[i]['title']}</p>
        
            </k>
        ))
    }
    </>
  )
}

export default Day406