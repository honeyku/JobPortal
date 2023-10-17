import React from "react";
import honey from "./Images/ReviewsImage/honey.jpeg";
import kunal from "./Images/ReviewsImage/kunal.jpg";
function Reviews() {
  return (
    <section className="reviews" id="reviews">
      <div className="reviews-slider">
        <div className="wrapper">
          <div className="box">
            <img src={kunal} alt="" />
            <p>
              My job is very easy to prospect as a result, and I don't waste my
              time or other people's time because I know before emailing or
              calling enough about the company that I know if it is worth
              pursuing.
            </p>
            <button
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
          </div>

          <div class=" box">
            <img src={honey} alt="" />

            <p>
              Easy to use, great filters, fast, powerful. I loved the fact that
              you can insert personalised fields on emails.
            </p>
            <button
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
          </div>
          <div class=" box">
            <img
              src="https://cdn.apna.co/employerDashboard_FE/empowerment.webp"
              alt=""
            />

            <p>
              The customer service is amazing. Personally met with the
              [SENSITIVE CONTENT] but their hands-on approach is needed to
              perfect the system.
            </p>
            <button
              style={{
                backgroundColor: "rgb(12, 142, 22)",
                height: "35px",
                color: "whitesmoke",
                width: "100px",
                fontWeight: "bold",
                borderRadius: "10px",
                marginTop: "45px",
              }}
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
