import React, { useState } from "react";
import "../components/css/JobPost.css";
import axios from "axios";

const JobApplicationForm = ({ onClose }) => {
  const [EmpoyerDetails, setEmpoyerDetails] = useState({
    name: "",
    email: "",
    mobile: "",
    qualification: "",
    resume: "",
    profile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmpoyerDetails({ ...EmpoyerDetails, [name]: value });
  };

  const handlePhoto = (e) => {
    setEmpoyerDetails({ ...EmpoyerDetails, resume: e.target.files[0] });
  };

  const handleSaveJob = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", EmpoyerDetails.name);
    formData.append("email", EmpoyerDetails.email);
    formData.append("mobile", EmpoyerDetails.mobile);
    formData.append("qualification", EmpoyerDetails.qualification);
    formData.append("resume", EmpoyerDetails.resume);
    formData.append("profile", EmpoyerDetails.profile);

    axios
      .post("http://localhost:8001/register", formData)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          window.location.href = "/";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form
      className="job-post-modal"
      style={{ color: "black" }}
      encType="multipart/form-data"
      onSubmit={handleSaveJob}
    >
      <div className="job-post-content">
        <button
          className="close-button"
          onClick={onClose}
          style={{
            float: "right",
            marginTop: "-18px",
          }}
        >
          X
        </button>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={EmpoyerDetails.name}
        />

        <label>Email:</label>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          value={EmpoyerDetails.email}
        />

        <label>Mobile No:</label>
        <input
          type="text"
          name="mobile"
          onChange={handleChange}
          value={EmpoyerDetails.mobile}
        />

        <label>Qualification:</label>
        <input
          type="text"
          name="qualification"
          onChange={handleChange}
          value={EmpoyerDetails.qualification}
        />

        <label>Profile:</label>
        <input
          type="text"
          name="profile"
          onChange={handleChange}
          value={EmpoyerDetails.profile}
        />

        <label>Resume:</label>
        <input type="file" name="resume" onChange={handlePhoto} />
        <br />
        <button type="submit" className="b-black">
          SUBMIT
        </button>
      </div>
    </form>
  );
};

export default JobApplicationForm;
