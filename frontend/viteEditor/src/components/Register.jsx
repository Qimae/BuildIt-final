
import React, { useState } from "react";
import axiosInstance from "../axios";
import { useNavigate } from "react-router-dom";
//MaterialUI
import "./Login.css";

export default function Register() {
  const history = useNavigate();
  const initialFormData = Object.freeze({
    email: "",
    username: "",
    password: "",
  });

  const [formData, updateFormData] = useState(initialFormData);
  const [emailErr, setEmailErr] = useState("");
  const [passErr, setPassErr] = useState("");
  const [userErr, setUserErr] = useState("");
  const handleChange = (e) => {
    updateFormData({
      ...formData,
      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    axiosInstance
      .post(`user/create/`, {
        email: formData.email,
        user_name: formData.username,
        password: formData.password,
      })
      .then((res) => {
        history("/");
        console.log(res);
        console.log(res.data);
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          const emailErr = error.response.data.email;
          const passerr = error.response.data.password;
          const usererr = error.response.data.user_name;
          setPassErr(passerr);
          setEmailErr(emailErr);
          setUserErr(usererr);
          console.log(usererr);
          // console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  };

  return (
    <div className="Login">
      <div className="main-container">
        <div className="login-container">
          <div className="container">
            <form className="form" noValidate>
              <p>
                <h6>NOT A MEMBER</h6>
                <h5>Need help ?</h5>
                <br></br>
                <br></br>
              </p>
              <br></br>

              <input
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                placeholder="Email Address"
                onChange={handleChange}
              ></input>
              <p>
                <h6 >{emailErr}</h6>
              </p>
              <br></br>

              <input
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                placeholder="Username"
                onChange={handleChange}
              ></input>
              <br></br>
              <p>
                <h6>{userErr}</h6>
              </p>

              <input
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                placeholder="Password"
                autoComplete="current-password"
                onChange={handleChange}
              ></input>
              <br></br>


              <p>
                <h6>{passErr}</h6>
              </p>
              <button
                name="submit"
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Sign Up
              </button>
            </form>
          </div>
          <div className="container-2">
            <p>
              Already have an account ?<br></br>
              <a href="/">
                <span>Login Here</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}