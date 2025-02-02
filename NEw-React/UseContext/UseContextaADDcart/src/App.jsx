import { useState } from "react";
import "./App.css";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
import Disital from "./Components/Disital";
import Online from "./Components/Online";
import Testimonial from "./Components/Testimonial";
import Ecpert from "./Components/Ecpert";
import Contect from "./Components/Contect";
import Footer from "./Components/Footer";


function App() {
  let [arr, setarr] = useState([]);
  const add_add = (obj) => {
    // console.log("hello",obj);
    setarr([...arr, obj]); //
  };
  // console.log(arr);

  return (
    <>
      <Navbar props={{ arr: arr }} />

      <Hero />

      <Services />

      <Disital />

      <Online />

      <Testimonial />

      <Ecpert />

      <Contect />

      <Footer props={{ arr: arr }} />

    </>
  );
}

export default App;
