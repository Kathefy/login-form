import React, { Component } from "react";
import { withFormik, Form, Field } from "formik";
import "./App.css";
import Yup from "yup";

const App = ({ values, errors, touched, isSubmitting, handleChange }) => (
  <div className="form">
    <form>
      <div className="loginForm">
        <div className="container">
          <input
            className={
              "inputText " + (errors.name && touched.name && errors.nameClass)
            }
            type="text"
            name="name"
            onChange={handleChange}
            value={values.name}
          />
          <span className="labelFloat">
            Full Name
            {errors.name && touched.name && errors.name}
          </span>
        </div>
        <div className="container">
          <input
            className={
              "inputText " +
              (errors.email && touched.email && errors.emailClass)
            }
            type="email"
            name="email"
            onChange={handleChange}
            value={values.email}
          />
          <span className="labelFloat">
            Email
            {errors.email && touched.email && errors.email}
          </span>
        </div>
        <div className="container">
          <input
            className={
              "inputText inputTextLast " +
              (errors.password && touched.password && errors.passwordClass)
            }
            type="password"
            name="password"
            onChange={handleChange}
            value={values.password}
          />
          <span className="labelFloat">
            Password
            {errors.password && touched.password && errors.password}
          </span>
        </div>
      </div>
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </form>
  </div>
);
const FormikApp = withFormik({
  mapPropsToValues({ name, email, password }) {
    return {
      name: name || "",
      email: email || "",
      password: password || ""
    };
  },
  handleSubmit(values) {
    console.log(values);
  }
})(App);

export default FormikApp;
