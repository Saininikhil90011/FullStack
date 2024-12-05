import React from "react" 

function Friends(props) {
    const {id,name,age,city,title,url}=props;
    return (
        <>
            <div className="card">
                <div className="card-content">
                <img src={url} alt="image" />
                    <h2>id:{id}</h2>
                    <h3>mane:{name}</h3>
                    <p>Age:{age}</p>
                    <p>City:{city}</p>
                    <p>Title:{title}</p>        
                </div>
            </div>
        </>
    )
}

export default Friends;