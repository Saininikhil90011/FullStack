import React,{useEffect , useState} from 'react'
import ApiData from './ApiData';

function Apiprops() {

    let [comments, setcomments] = useState([]);

    useEffect(() => {
        const apiCall = async () => {
          //
          let response = await fetch(
            "https://jsonplaceholder.typicode.com/comments"
          );
          let responseData = await response.json();
          setcomments(responseData);
          //
        };
        apiCall();
      }, []);
  return (
    <>
     {comments &&
        comments.map((item, i) => (
          <>
          
            <ApiData item = {item}></ApiData>

          </>
        ))}

    </>
  )
}

export default Apiprops