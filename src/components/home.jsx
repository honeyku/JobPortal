import React, { useState } from "react";
import EmployerLoginForm from "./Loginpage/EmployeeLogin";
import JobSeekerLoginForm from "./Loginpage/JobSekarLogin";
import { useAuth } from "./Authentication/AuthContext";
import "../App.css";
// import JobListing from "./JobListing";
import JobListing1 from "./Joblisting1";

function Home() {
  const { user, employer } = useAuth();
  const [isEmployerLogin, setIsEmployerLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLoginType = () => {
    setIsEmployerLogin(!isEmployerLogin);
  };

  const [isEmployerLoginFormVisible, setEmployerLoginFormVisible] =
    useState(true);
  const [isJobSeekerLoginFormVisible, setJobSeekerLoginFormVisible] =
    useState(false);

  const showEmployerLoginForm = () => {
    setEmployerLoginFormVisible(true);
    setJobSeekerLoginFormVisible(false);
  };

  const showJobSeekerLoginForm = () => {
    setEmployerLoginFormVisible(false);
    setJobSeekerLoginFormVisible(true);
  };

  console.log(employer, "emp");
  return (
    <section className="home" id="home">
      <div className="row">
        <div className="content">
          <h3 style={{ fontSize: "6rem" }}>
            Find the right candidate And right Job Fast.
          </h3>
          <p>Trusted by 5 Cr+ Candidates | 4 Lakh+ Employers</p>
        </div>
        {user || employer ? (
          // <JobListing1 />
          ""
        ) : (
          <>
            <div className="swiper image-slider">
              <div id="card">
                <div id="card-content">
                  <div>
                    <button
                      onClick={showEmployerLoginForm}
                      style={{
                        backgroundColor: isEmployerLoginFormVisible
                          ? "darkblue"
                          : "rgb(149, 147, 210)",
                        color: isEmployerLoginFormVisible ? "white" : "inherit",
                        width: "50%",
                        borderTopLeftRadius: "10px",
                        borderBottomLeftRadius: "10px",
                        fontSize: "15px",
                      }}
                    >
                      Employee Login
                    </button>
                    <button
                      onClick={showJobSeekerLoginForm}
                      style={{
                        backgroundColor: isJobSeekerLoginFormVisible
                          ? "darkblue"
                          : "rgb(149, 147, 210)",
                        color: isJobSeekerLoginFormVisible
                          ? "white"
                          : "inherit",
                        width: "50%",
                        borderTopRightRadius: "10px",
                        fontSize: "15px",
                        borderBottomRightRadius: "10px",
                      }}
                    >
                      Job Seeker Login
                    </button>
                  </div>
                  {isEmployerLoginFormVisible && (
                    <div>
                      <EmployerLoginForm />
                    </div>
                  )}
                  {isJobSeekerLoginFormVisible && (
                    <div>
                      <JobSeekerLoginForm />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Home;
