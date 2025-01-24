import React, { useEffect, useState } from 'react'

function Api405() {

    let [posts , setposts] = useState([]);

    useEffect(()=>{
        const apiCall = async()=>{

            let response = await fetch("https://jsonplaceholder.typicode.com/posts");
            let responseData = await response.json();
            setposts(responseData);
        }
        apiCall();
    },[])
  return (
    <>
        {
            posts&&
            posts.map((item,i) =>(
                <>
                <p>{posts[i]['userId']}</p>
                <p>{posts[i]['id']}</p>
                <p>{posts[i]['title']}</p>
                <p>{posts[i]['body']}</p>
                </>
            ))
        }
    </>
  )
}

export default Api405