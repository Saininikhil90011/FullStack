import React, { useEffect, useState } from 'react'

function Day407() {
    //
    let [users,setusers]=useState([]);
    useEffect(() =>{
        const apiCall = async() => {
            //
            let response = await fetch ("https://jsonplaceholder.typicode.com/users");
            let responseData = await response.json();
            console.log(responseData);
            
            setusers(responseData);
            //
        }
        apiCall();


    },[])
    //
  return (

    <>
    {
        <p>{users[0]['id']}</p>
        
    }
    </>
  )
}

export default Day407