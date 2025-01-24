import React, { useState } from "react";
import "../App.css"; // Importing the CSS file

const Forget = () => {
  const [formData, setFormData] = useState({
    old_password: "",
    password: "",
    confirm_password: "",
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

    // Example validation
    if (formData.password !== formData.confirm_password) {
      alert("Passwords do not match!");
      return;
    }

    // Proceed with form submission logic (e.g., API call)
    //

    const apiCall = async () => {
      const response = await fetch(
        "http://13.235.68.227:5000/api/auth/change-password",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMzM1MDVhMi05N2UxLTRlZjgtOTMyZS00MmM3NDFmOWE3YzgiLCJpYXQiOjE3Mzc2MjgzOTAsImV4cCI6MTczNzYyODY5MCwidHlwZSI6ImFjY2VzcyJ9.PwJGZbqjAxI648X9XpSO9A9as824JC4YgmOJ6ceZ3Mk",
          },
          body: JSON.stringify(formData),
        }
      );
      const jsonresponse = await response.json();
      console.log(jsonresponse);
    };
    apiCall();

    //
    // console.log('Form submitted:', formData);
  };

  return (
    <div className="container">
      <h1>Forget Password</h1>

      <form onSubmit={handleSubmit}>


        <div>
          <label htmlFor="old_password">Old_password:</label>
          <input
            type="password"
            id="old_password"
            name="old_password"
            value={formData.old_password}
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

        <div>
          <label htmlFor="confirm_password">Confirm Password:</label>
          <input
            type="password"
            id="confirm_password"
            name="confirm_password"
            value={formData.confirm_password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Forget;
