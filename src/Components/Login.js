import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import './Login.css';  // Import the CSS file

const Login = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleLogin = async (values) => {
    const { email, password } = values;

    try {
      const response = await axios.get("http://localhost:5000/Users");
      const users = response.data;

      const user = users.find((i) => i.email === email && i.password === password);

      if (user) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("role", user.role); // Store role if needed
        if (user.role === 1) {
          navigate("/admin");
        } else if (user.role === 2) {
          navigate("/hr");
        } else if (user.role === 3) {
          navigate("/employee");
        }
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      setError("Error in fetching the data. Please try again.");
      console.log(err, "Error in fetching the data");
    }
  };

  return (

    <div class="login-wrapper">
      <h1 className="heading"> Welcome to the Login  </h1>
    <div className="login-container">
      <h1>Login</h1>
      {error && <p className="error">{error}</p>}

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleLogin}
      >
        <Form>
          <div>
            <label htmlFor="email">Email:</label>
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <Field
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
            <ErrorMessage name="password" component="div" className="error" />
          </div>

          <div>
            <button type="submit">Submit</button>
          </div>
        </Form>
      </Formik>
    </div>
    </div>
 
    
  );
};

export default Login;
