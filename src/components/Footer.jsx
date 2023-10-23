import React from "react";
import Facebook from "./Images/fbicon.png";
import Linkdin from "./Images/linkdin.png";
import InstaGram from "./Images/insta.png";
import Twitter from "./Images/twiter.png";
import Pinterest from "./Images/pinterest.png";
import YouTube from "./Images/youtube.png";
function Footer() {
  return (
    <section className="footer" id="footer">
      <div className="box-container">
        <div className="box">
          <h3>our locations</h3>
          <a href="https://www.google.com/maps/search/?api=1&query=Laxmi%20Nagar%20D-35,1st%20Floor,%20Near%20Shiv%20Mandir,%20Laxmi%20Nagar,%20Delhi(110092)">
            {" "}
            <i className="fas fa-map-marker-alt"></i>Laxmi Nagar <br />
            D-35,1st Floor,
            <br /> Near Shiv Mandir,
            <br /> Laxmi Nagar,
            <br /> Delhi(110092){" "}
          </a>
        </div>

        <div className="box">
          <h3>quick links</h3>
          <a href="#home">
            {" "}
            <i className="fas fa-arrow-right"></i> home{" "}
          </a>
          <a href="#feature">
            {" "}
            <i className="fas fa-arrow-right"></i> featured{" "}
          </a>
          <a href="#reviews">
            {" "}
            <i className="fas fa-arrow-right"></i> reviews{" "}
          </a>
        </div>

        <div className="box">
          <h3>extra links</h3>
          <a href="/myaccount">
            {" "}
            <i className="fas fa-arrow-right"></i> account info{" "}
          </a>
          <a href="/about">
            {" "}
            <i className="fas fa-arrow-right"></i> our services{" "}
          </a>
        </div>

        <div className="box">
          <h3>contact info</h3>
          <a href="tel:+919540032656">
            {" "}
            <i className="fas fa-phone"></i> +91 9540032656{" "}
          </a>
          <a
            href="mailto:info@allindiamarketinghrsolution.com"
            style={{ display: "flex" }}
          >
            <i className="fas fa-envelope"></i>
            info@allindiamarketinghrsolution.com
          </a>
        </div>
      </div>

      <div className="share">
        <h2 style={{ color: "gray", marginBottom: "20px" }}>
          Follow us on social media
        </h2>
        <a
          href="https://www.facebook.com/theaimhrs/"
          className="icon-facebook"
          target="_blank" // Add this attribute
          rel="noopener noreferrer" // Recommended for security
        >
          <img src={Facebook} alt="Facebook" />
        </a>
        <a
          href="https://twitter.com/aimhrs83580/"
          className="twitter"
          target="_blank" // Add this attribute
          rel="noopener noreferrer" // Recommended for security
        >
          <img src={Twitter} alt="Twitter" />
        </a>
        <a
          href="https://www.instagram.com/aimhrs/"
          className="instagram"
          target="_blank" // Add this attribute
          rel="noopener noreferrer" // Recommended for security
        >
          <img src={InstaGram} alt="Instagram" />
        </a>
        <a
          href="https://www.linkedin.com/company/the-aimhrs/"
          className="linkedin"
          target="_blank" // Add this attribute
          rel="noopener noreferrer" // Recommended for security
        >
          <img src={Linkdin} alt="LinkedIn" />
        </a>
        <a
          href="https://in.pinterest.com/aimhrs/"
          className="pinterest"
          target="_blank" // Add this attribute
          rel="noopener noreferrer" // Recommended for security
        >
          <img src={Pinterest} alt="Pinterest" />
        </a>
        <a
          href="https://www.youtube.com/@aimhrsofficial/"
          className="youtube"
          target="_blank" // Add this attribute
          rel="noopener noreferrer" // Recommended for security
        >
          <img src={YouTube} alt="YouTube" />
        </a>
      </div>
      <div className="credit">
        {" "}
        created by 🧡{" "}
        <a
          href="https://allindiamarketinghrsolution.com"
          style={{ textDecoration: "none" }}
        >
          <span> All India Market Hr Solution</span>
        </a>{" "}
        | All rights reserved! Made In India{" "}
      </div>
    </section>
  );
}

export default Footer;
