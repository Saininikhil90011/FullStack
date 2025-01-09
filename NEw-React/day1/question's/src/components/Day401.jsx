import React from 'react'

function Day401() {
    //
    let arr = {
        "users": [
          {
            "id no.": 1,
            "name": "John Doe",
            "email": "john.doe@example.com",
    
            "role": "admin",
            "isActive": true
          },
          {
            "id no.": 2,
            "name": "Jane Smith",
            "email": "jane.smith@example.com",
            "role": "editor",
            "isActive": false
          },
          {
            "id no.": 3,
            "name": "Emily Johnson",
            "email": "emily.johnson@example.com",
            "role": "viewer",
            "isActive": true
          }
        ]
      }

    //
  return (
    <>
    {
        arr['users']&&
        arr['users'].map((item,index)=>(<>
            <p>{arr['users'][index]['id no.']}</p>
            <p>{arr['users'][index]['name']}</p>
            <p>{arr['users'][index]['email']}</p>
            <p>{arr['users'][index]['role']}</p>
            <p>{arr['users'][index]['isActive']}</p>
            </>
        ))
    }
    
    </>
  )
}

export default Day401