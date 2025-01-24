import React, { useEffect, useState } from "react";

function Comment() {
  //
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
  //
  return (
    <>
      {comments &&
        comments.map((item, i) => (
          <>
          
            <p>{comments[i]["id"]}</p>
            <p>{comments[i]["postId"]}</p>
            <p>{comments[i]["name"]}</p>
            <p>{comments[i]["email"]}</p>
            <p>{comments[i]["body"]}</p>

          </>
        ))}
    </>
  );
}

export default Comment;
