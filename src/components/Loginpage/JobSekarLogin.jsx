import React, { useState } from "react";
import "../../App.css";
import JobSeekerSignUpForm from "../SignUp/JobSeeker";
import { useAuth } from "../Authentication/AuthContext";
import axios from "axios";

function JobSeekerLoginForm() {
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

  const resetPassword = () => {
    axios
      .post("http://localhost:8001/reset-password", { email })
      .then((response) => {
        if (response.data.success) {
          setMessage("Password reset link sent to your email.");
        } else {
          setMessage("Error: " + response.data.error);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setMessage("An error occurred while processing your request.");
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8001/login", {
        email,
        password,
      });
      if (response.status === 200) {
        const userData = response.data;
        const username = userData.user.username;
        const useremail = userData.user.email;

        setIsSuccess(true);
        setMessage("Login successful");
        setUserData(userData);
        setUsername(username);
        login({ username, email: useremail });
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
        <JobSeekerSignUpForm />
      ) : (
        <div>
          {forgetPassword ? (
            <div>
              <h2>Forgot Password</h2>
              {isSuccess ? (
                <p className="success-message">{message}</p>
              ) : (
                <form method="post" className="form" onSubmit={resetPassword}>
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
                    <button
                      id="submit-btn"
                      type="submit"
                      name="submit"
                      value="Forget Password"
                      style={{ marginTop: "13px" }}
                    >
                      Reset Password
                    </button>
                    <input
                      id="submit-btn"
                      type="button"
                      name="submit"
                      value="Back to Login"
                      style={{ marginTop: "13px" }}
                      onClick={toggleForgetPassword}
                    />
                  </div>
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
                <button
                  id="submit-btn"
                  type="submit"
                  name="submit"
                  style={{ marginTop: "13px" }}
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
                {!isSuccess && <p className="error-message">{message}</p>}
              </form>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default JobSeekerLoginForm;
