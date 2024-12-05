import React from "react"
import Friends from "./Friends"

let friendsData=[
    {
        id:1,
        name:"Nikhil",
        age:22,
        city:"Amer",
        title:"Frontend Developer",
        url:"https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/bike-riding-tips.jpg",
        },
    {
    id:1,
    name:"chirage",
    age:22,
    city:"udaipur",
    title:"Frontend Developer",
    url:"https://cms-img.coverfox.com/46.jpg",
    },
    {
    id:2,
    name:"Abhishek",
    age:22,
    city:"jaipur",
    title:"Frontend Developer",
    url:"https://static.vecteezy.com/system/resources/previews/008/063/100/non_2x/rear-view-portrait-of-young-man-traveler-with-backpack-standing-on-a-mountain-with-arms-spread-open-travel-life-style-and-adventure-concept-free-photo.jpg",
    },
    {
    id:3,
    name:"Rohit",
    age:23,
    city:"Amer",
    title:"Frontend Developer",
    url:"https://www.tvsmotor.com/-/media/Feature/Blog/Did-you-know/Benefits-of-Biking.jpg?la=en&h=675&w=1200&hash=525DFA8CC3DD63D3488CEEC42EEEB70A",
    },
    {
    id:4,
    name:"Punit",
    age:20,
    city:"kunda",
    title:"backend Developer",
    url:"https://www.wildstone.in/cdn/shop/articles/Things-You-Should-Keep-In-Mind-While-Traveling.jpg?v=1660050621",
    },
    {
    id:5,
    name:"Nikhil",
    age:21,
    city:"pushkara",
    title:"Frontend Developer",
    url:"https://adminassets.devops.arabiaweather.com/sites/default/files/field/image/traveling.jpg",
    },
    {
    id:6,
    name:"govind",
    age:22,
    city:"kota",
    title:"Data Scientist",
    url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXvISWV--yWSsHVx9MeoMlK8a_iawaZDX9Bg&s",
    },
];

function  Friend(){
    return(
        <div className="container">
            <h1 className="friends">Friends data</h1>
            <div className="data">
                {
                    friendsData.map((data)=><Friends key={data.id} {...data} />)
                }

            </div>
        </div>
    )
}

export default Friend
