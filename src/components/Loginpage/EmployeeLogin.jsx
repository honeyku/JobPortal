import React, { useState, useRef, Children } from "react";
import "../../App.css";
import { useAuth } from "../Authentication/AuthContext";
import axios from "axios";
import { isLoggedIn } from "../home";
import EmployerSignUpFrom from "../SignUp/Employee";
function EmployerLoginForm() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [forgetPassword, setForgetPassword] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [userData, setUserData] = useState("");
  const [username, setUsername] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8001/employerlogin", {
        email,
        password,
      });
      // console.log(response.data);
      if (response.status === 200) {
        const userData = response.data;
        const username = userData.employer.username;
        const useremail = userData.employer.email;
        setIsSuccess(true);
        setMessage("Login successful");
        setUserData(userData);
        setUsername(username);
        login({ username, email: useremail });
        console.log(username);
        console.log(useremail, "email");
      } else {
        setIsSuccess(false);
        setMessage("Login failed. Please check your credentials.");
      }
    } catch (error) {
      setIsSuccess(false);
      setMessage("Error logging in. Please try again later.");
      console.error("Error:", error);
    }
  };

  const toggleForgetPassword = () => {
    setForgetPassword(!forgetPassword);
  };

  const toggleSignUp = () => {
    setShowSignUp(!showSignUp);
  };

  return (
    <div>
      {showSignUp ? (
        <EmployerSignUpFrom />
      ) : (
        <div>
          {forgetPassword ? (
            <div>
              <h2>Forgot Password</h2>
              {isSuccess ? (
                <p className="success-message">{message}</p>
              ) : (
                <form method="post" className="form" onSubmit={handleSubmit}>
                  <label htmlFor="user-email" style={{ paddingTop: "13px" }}>
                    &nbsp;Email
                  </label>
                  <input
                    id="user-email"
                    type="email"
                    name="email"
                    autoComplete="on"
                    required
                    value={email}
                    onChange={handleEmailChange}
                    style={{
                      textAlign: "center",
                      borderRadius: "10px",
                      padding: "8px",
                      width: "85%",
                      margin: " 0 auto",
                    }}
                  />
                  <div style={{ display: "flex" }}>
                    <input
                      id="submit-btn"
                      type="submit"
                      name="submit"
                      value="Forget Password"
                      style={{ marginTop: "13px" }}
                    />{" "}
                    <input
                      id="submit-btn"
                      type="submit"
                      name="submit"
                      value="Back to Login"
                      style={{ marginTop: "13px" }}
                      onClick={toggleForgetPassword}
                    />
                  </div>
                  {isSuccess && <p className="success-message">{message}</p>}
                </form>
              )}
            </div>
          ) : (
            <>
              <form method="post" className="form" onSubmit={handleSubmit}>
                <label htmlFor="user-email" style={{ paddingTop: "13px" }}>
                  Email/Mobile Number
                </label>
                <input
                  id="user-email"
                  className="form-content"
                  type="email"
                  name="email"
                  autoComplete="on"
                  required
                  value={email}
                  onChange={handleEmailChange}
                  style={{
                    textAlign: "center",
                    borderRadius: "10px",
                    padding: "10px",
                    width: "85%",
                    margin: " 0 auto",
                  }}
                />
                <label
                  htmlFor="jobseeker-password"
                  style={{ paddingTop: "13px" }}
                >
                  Password
                </label>
                <input
                  id="jobseeker-password"
                  type="password"
                  name="password"
                  required
                  value={password}
                  onChange={handlePasswordChange}
                  style={{
                    textAlign: "center",
                    borderRadius: "10px",
                    padding: "10px",
                    width: "85%",
                    margin: " 0 auto",
                  }}
                />
                <a href="#" onClick={toggleForgetPassword}>
                  <p
                    id="forgot-pass"
                    style={{ marginLeft: "2rem", marginTop: "5px" }}
                  >
                    Forgot password?
                  </p>
                </a>
                {/* 
            <input
              id="submit-btn"
              type="submit"
              name="submit"
              value="LOGIN"
              style={{ marginTop: "13px" }}
              onClick={handleSubmit}
            /> */}
                <button
                  id="submit-btn"
                  type="submit"
                  name="submit"
                  style={{ marginTop: "13px" }}
                  onClick={handleSubmit}
                  UseRef={handleSubmit}
                >
                  LOGIN
                </button>

                <a
                  href="#"
                  style={{ marginBottom: "5px" }}
                  onClick={toggleSignUp}
                >
                  Don't have an account yet? | Create account
                </a>
                {/* {showSignUp && <JobSeekerSignUpForm />} */}
                {!isSuccess && <p className="error-message">{message}</p>}
              </form>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default EmployerLoginForm;
