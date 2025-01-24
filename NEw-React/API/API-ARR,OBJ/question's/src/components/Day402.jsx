import React from 'react'

function Day402() {

    //
    let arr ={
        "status": "success",
        "data": {
          "user": {
            "id": 42,
            "username": "superuser",
            "email": "superuser@example.com",
            "permissions": ["read", "write", "execute"]
          },
          "session": {
            "id": "abc123",
            "expiresAt": "2025-01-07T15:00:00Z"
          }
        }
      }

   
    //
  return (
    <>
    
        <h1>{arr['status']}</h1>
        <h1>{arr['data']['user']['id']}</h1>
        <h1>{arr['data']['user']['username']}</h1>
        <h1>{arr['data']['user']['email']}</h1>
        <h1>{arr['data']['user']['permissions'][0]}</h1>
        <h1>{arr['data']['user']['permissions'][1]}</h1>
        <h1>{arr['data']['user']['permissions'][2]}</h1>
        <h1>{arr['data']['session']['id']}</h1>
        <h1>{arr['data']['session']['expiresAt']}</h1>
    
    </>
  )
}

export default Day402