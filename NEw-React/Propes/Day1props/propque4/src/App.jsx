import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ApiData from './apiData';

function App() {
  let [products , setproducts]=useState([]);
  useEffect(() => {
    const apiCall = async () =>{
      let response = await fetch
      ("https://fakestoreapi.com/products")
      let responseData = await response.json();
      setproducts(responseData);
      console.log(responseData);
      
    };
   apiCall();
  },[])

  return (
    <>
    {products && products.map((item) =>(
      <>
        <ApiData item = {item}></ApiData>
      </>
    ))}
    

    </>
  )
}

export default App
