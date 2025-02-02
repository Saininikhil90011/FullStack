import React, { useState } from "react";
import "../App.css"; // Importing the CSS file
import { Helmet } from "react-helmet-async";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
  // formik setup //
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
       email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
               .min(6, "Password must be at least 6 characters")
               .required("Required"),
    }),
    onSubmit: (values) => {
      // Proceed with form submission logic (e.g., API call)
      console.log("Form submitted:", values);

      
      const apiCall = async () => {
        const response = await fetch("http://3.7.68.182:5000/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        const jsonresponse = await response.json();
        console.log(jsonresponse);
      };
      apiCall();
    },

  });

  return (
    <>
      <Helmet>
        <title>LoginForm</title>
      </Helmet>
      <div className="container">
        <h1>Login Form</h1>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}

          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
             {formik.touched.password && formik.errors.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Login;
