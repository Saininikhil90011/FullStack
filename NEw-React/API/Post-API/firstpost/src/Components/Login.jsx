import React, { useState } from "react";
import "../App.css"; // Importing the CSS file

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

 

    // Proceed with form submission logic (e.g., API call)
    //

    const apiCall = async () => {
    const response =   await fetch("http://3.7.68.182:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      const jsonresponse = await response.json();
      console.log(jsonresponse)
  
    };
    apiCall();

    //
    // console.log('Form submitted:', formData);
  };

  return (
    <div className="container">
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

      

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
