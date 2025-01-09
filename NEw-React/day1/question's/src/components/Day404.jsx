import React, { useEffect, useState } from 'react'

function Day404() {
    //
    let [photos, setphotos] = useState([]);

    useEffect(()=>{
        const apiCall = async() => {
            //
            let response = await fetch("https://jsonplaceholder.typicode.com/photos");
            let responseData  =  await response.json();
            setphotos(responseData);
            //
        }
        apiCall();
    },[])

    //

  return (
    <>
    {
        photos&&
        photos.map((item,i) => (
            <>
            <p>{photos[i]['albumId']}</p>
            <p>{photos[i]['id']}</p>
            <p>{photos[i]['title']}</p>
            <img src={photos[i]['url']} alt="" />
            <img src={photos[i]['thumbnailUrl']} alt="" />
            </>
        ))
    }
    </>
  )
}

export default Day404