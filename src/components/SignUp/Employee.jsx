import React, { useState } from "react";
import { useAuth } from "../Authentication/AuthContext";
import axios from "axios";

function EmployerSignUpFrom() {
  const { signup } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [username, setUsername] = useState("");
  const [company_name, setcCompanyName] = useState("");
  const [mobile, setMobile] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleMobileChnage = (e) => {
    setMobile(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleUserNameChange = (e) => {
    setUsername(e.target.value);
  };
  const handleCompanyName = (e) => {
    setcCompanyName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8001/employer", {
        username,
        mobile,
        company_name,
        email,
        password,
      });
      // console.log(response.data);
      if (response.status === 201) {
        const userData = response.data;
        const username = userData.employer.username;
        setIsSuccess(true);
        setMessage("Login successful");
        setUsername(username);
        signup(username);
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

  return (
    <>
      <div id="card-title">
        <h2>Employer Sign Up</h2>
        <div className="underline-title"></div>
      </div>
      <form method="post" className="form" onSubmit={handleSubmit}>
        <label htmlFor="user-email" style={{ paddingTop: "13px" }}>
          &nbsp;User Name
        </label>
        <input
          id="user-name"
          type="text"
          name="username"
          autoComplete="on"
          required
          value={username}
          onChange={handleUserNameChange}
          style={{
            textAlign: "center",
            borderRadius: "10px",
            padding: "10px",
            width: "85%",
            margin: " 0 auto",
          }}
        />
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
            padding: "10px",
            width: "85%",
            margin: " 0 auto",
          }}
        />
        <label htmlFor="user-email" style={{ paddingTop: "13px" }}>
          &nbsp;Mobile Number
        </label>
        <input
          id="user-mobile"
          type="mobile"
          name="mobile"
          autoComplete="on"
          required
          value={mobile}
          onChange={handleMobileChnage}
          style={{
            textAlign: "center",
            borderRadius: "10px",
            padding: "10px",
            width: "85%",
            margin: " 0 auto",
          }}
        />
        <label htmlFor="user-email" style={{ paddingTop: "13px" }}>
          &nbsp;Company Name
        </label>
        <input
          id="companyname"
          type="company_name"
          name="company_name"
          autoComplete="on"
          required
          value={company_name}
          onChange={handleCompanyName}
          style={{
            textAlign: "center",
            borderRadius: "10px",
            padding: "10px",
            width: "85%",
            margin: " 0 auto",
          }}
        />
        <label htmlFor="user-password" style={{ paddingTop: "22px" }}>
          &nbsp;Password
        </label>
        <input
          id="Hobseeker-password"
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
        {/* <label htmlFor="user-password" style={{ paddingTop: "22px" }}>
          &nbsp;Re-Type Password
        </label>
        <input
          id="Hobseeker-password"
          type="password"
          name="password"
          required
          value={repassword}
          onChange={handleRePasswordChange}
          style={{
            textAlign: "center",
            borderRadius: "10px",
            padding: "10px",
            width: "85%",
            margin: " 0 auto",
          }}
        /> */}
        {/* <input
          id="submit-btn"
          type="submit"
          name="submit"
          value="SIGN UP"
          onClick={handleSubmit}
          style={{ marginTop: "13px" }}
        /> */}
        <button
          id="submit-btn"
          type="submit"
          name="submit"
          style={{ marginTop: "13px" }}
          onClick={handleSubmit} // Add onClick event handler
        >
          {" "}
          SIGN UP
        </button>
      </form>
    </>
  );
}
export default EmployerSignUpFrom;
