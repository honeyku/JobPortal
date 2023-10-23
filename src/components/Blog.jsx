import React, { useState } from "react";
import Blog1 from "./Images/Blog/blog1.jpg";
import Blog2 from "./Images/Blog/blog2.jpg";
import Blog3 from "./Images/Blog/blog3.jpg";
import BlogContent2 from "./DetailedBlog2";
import BlogContent1 from "./DetailedBlog1";
import BlogDetailed from "./DetailedBlog";

// import BlogContent2 from "./DetailedBlog2";
// import BlogContent1 from "./DetailedBlog1";
// import BlogContent from "./DetailedBlog";

function Blog() {
  const [showDetails, setShowDetails] = useState(false);
  const [showDetails1, setShowDetails1] = useState(false);
  const [showDetails2, setShowDetails2] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  const toggleDetails1 = () => {
    setShowDetails1(!showDetails1);
  };

  const toggleDetails2 = () => {
    setShowDetails2(!showDetails1);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
  };
  const handleCloseDetails1 = () => {
    setShowDetails1(false);
  };

  const handleCloseDetails2 = () => {
    setShowDetails2(false);
  };

  return (
    <section className="reviews" id="blog">
      <div className="reviews-slider">
        <div className="wrapper">
          <div className="box">
            <img src={Blog1} alt="" />

            <h2 style={{ marginTop: "30px" }}>
              Top High Paying Jobs in India 2023 – The AIMHRS
            </h2>
            <p>
              In a dynamic and evolving job market, the pursuit of high-paying
              jobs has become a common aspiration. As 2023 unfolds, several
              industries are witnessing significant growth, offering lucrative
              opportunities for job seekers.
            </p>
            <button
              onClick={toggleDetails} // Click handler to toggle details
              style={{
                backgroundColor: "rgb(12, 142, 22)",
                height: "35px",
                color: "whitesmoke",
                width: "100px",
                fontWeight: "bold",
                borderRadius: "10px",
              }}
            >
              Read More
            </button>
            {showDetails && (
              <div className="detailed-content">
                <BlogDetailed onClose={handleCloseDetails} />
              </div>
            )}
          </div>

          <div className="box">
            <img src={Blog2} alt="" />
            <h2 style={{ marginTop: "30px" }}>
              Advantages of Being an Accountant and How AIMHRS Can Elevate Your
              Career
            </h2>
            <p>
              Choosing a career as an accountant offers a multitude of benefits,
              ranging from financial stability to professional growth
              opportunities.
            </p>
            <button
              onClick={toggleDetails1}
              style={{
                backgroundColor: "rgb(12, 142, 22)",
                height: "35px",
                color: "whitesmoke",
                width: "100px",
                fontWeight: "bold",
                borderRadius: "10px",
                marginTop: "75px",
              }}
            >
              Read More
            </button>
            {showDetails1 && (
              <div className="detailed-content">
                <BlogContent1 onClose={handleCloseDetails1} />
              </div>
            )}
          </div>

          <div className="box">
            <img src={Blog3} alt="" />
            <h2 style={{ marginTop: "30px" }}>
              15 Best Jobs for Teenagers to Consider for the Future - With
              Opportunities from AIMHRS
            </h2>
            <p>
              As a teenager, you're at the cusp of exploring the world of work.
              This is an exciting time to gain valuable experience, develop new
              skills, and set the foundation for a promising future.
            </p>
            <button
              onClick={toggleDetails2}
              style={{
                backgroundColor: "rgb(12, 142, 22)",
                height: "35px",
                color: "whitesmoke",
                width: "100px",
                fontWeight: "bold",
                borderRadius: "10px",
                marginTop: "20px",
              }}
            >
              Read More
            </button>
            {showDetails2 && (
              <div className="detailed-content">
                <BlogContent2 onClose={handleCloseDetails2} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
