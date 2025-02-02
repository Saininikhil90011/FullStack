import React, { useState } from "react";
import "../App.css"; // Importing the CSS file
import { Helmet } from "react-helmet-async";
import { useFormik } from "formik";
import * as Yup from "yup";

const Forget = () => {
  // Formik setup //
  const formik = useFormik({
    initialValues: {
      old_password: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: Yup.object({
      old_password: Yup.string().min(6, "Password must be at least 6 characters").required("Required"),
      password: Yup.string().min(6, "Password must be at least 6 characters").required("Required"),
      confirm_password: Yup.string().oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
    }),
    onSubmit: (values) => {
      // Proceed with form submission logic (e.g., API call)
      console.log("Form submitted:", values);


    // const apiCall = async () =>{
    //   const response = await fetch(
    //     "http://13.235.68.227:5000/api/auth/change-password",
    //     {
    //       method: "PUT",
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization:
    //           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMzM1MDVhMi05N2UxLTRlZjgtOTMyZS00MmM3NDFmOWE3YzgiLCJpYXQiOjE3Mzc2MjgzOTAsImV4cCI6MTczNzYyODY5MCwidHlwZSI6ImFjY2VzcyJ9.PwJGZbqjAxI648X9XpSO9A9as824JC4YgmOJ6ceZ3Mk",
    //       },
    //       body: JSON.stringify(formData),
    //     }
    //   );
    //   const jsonresponse = await response.json();
    //   console.log(jsonresponse);
    // };
    // apiCall();
  },
  
  });

 
    // console.log('Form submitted:', formData);
  

  return (
    <>
      <Helmet>
        <title> ForgetForm</title>
      </Helmet>
      <div className="container">
        <h1>Forget Password</h1>

        <form onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="old_password">old_password:</label>
            <input
              type="password"
              id="old_password"
              name="old_password"
              value={formik.values.old_password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
             {formik.touched.old_password && formik.errors.old_password ? (
              <div className="error">{formik.errors.old_password}</div>
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

          <div>
            <label htmlFor="confirm_password">Confirm Password:</label>
            <input
              type="password"
              id="confirm_password"
              name="confirm_password"
              value={formik.values.confirm_password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
             {formik.touched.confirm_password &&
            formik.errors.confirm_password ? (
              <div className="error">{formik.errors.confirm_password}</div>
            ) : null}
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Forget;
