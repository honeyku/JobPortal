import React from "react";
import "./css/DetailedBlog.css";
import Blog3 from "./Images/Blog/blog3.jpg";

function BlogContent2({ onClose }) {
  return (
    <>
      <div className="blog-content" style={{ backgroundColor: "#f3fef7" }}>
        <button
          onClick={onClose}
          style={{ float: "right", backgroundColor: "black", color: "white" }}
        >
          X
        </button>
        <h2>
          15 Best Jobs for Teenagers to Consider for the Future - With
          Opportunities from AIMHRS
        </h2>
        <p>
          As a teenager, you're at the cusp of exploring the world of work. This
          is an exciting time to gain valuable experience, develop new skills,
          and set the foundation for a promising future. In this blog post,
          we'll introduce you to 15 of the best jobs for teenagers to consider,
          and we'll also show you how ALL India Marketing HR Solution can help
          you find the perfect opportunity to kickstart your career.
        </p>
        <img
          src={Blog3}
          alt=""
          style={{ width: "400px", alignItems: "center" }}
        />
        <br />
        <br />
        <ol>
          <li>
            <h3> Retail Associate</h3>
          </li>
        </ol>
        <ul>
          <li>
            Working in a retail store not only provides customer service
            experience but also exposes you to various aspects of business
            operations.
          </li>
        </ul>
        <ol start="2">
          <li>
            <h3>Tutoring or Coaching</h3>
          </li>
        </ol>
        <ul>
          <li>
            If you excel in a particular subject or skill, consider becoming a
            tutor. It's a great way to share your knowledge while earning some
            extra income
          </li>
        </ul>

        <ol start="3">
          <li>
            <h3>Internship in a Field of Interest</h3>
          </li>
        </ol>
        <ul>
          <li>
            ALL India Marketing HR Solution offers a range of internships for
            teenagers, allowing you to explore industries like marketing, human
            resources, and more.
          </li>
        </ul>

        <ol start="4">
          <li>
            <h3>Freelance Writing or Blogging</h3>
          </li>
        </ol>
        <ul>
          <li>
            If you have a flair for writing, consider freelance opportunities or
            start your own blog. It's a creative outlet that can lead to
            exciting future prospects.
          </li>
        </ul>
        <ol start="5">
          <li>
            <h3>Pet Sitting or Dog Walking</h3>
          </li>
        </ol>
        <ul>
          <li>
            For animal lovers, this job offers a chance to earn money while
            spending time with furry friends.
          </li>
        </ul>
        <ol start="6">
          <li>
            <h3>Social Media Management</h3>
          </li>
        </ol>
        <ul>
          <li>
            In the age of technology, companies are always in need of social
            media managers. ALL India Marketing HR Solution provides
            opportunities in this growing field.
          </li>
        </ul>
        <ol start="7">
          <li>
            <h3>Camp Counselor</h3>
          </li>
        </ol>
        <ul>
          <li>
            Working at a summer camp provides leadership experience, teamwork
            skills, and the opportunity to work with children.
          </li>
        </ul>
        <ol start="8">
          <li>
            <h3>Lawn Care and Landscaping</h3>
          </li>
        </ol>
        <ul>
          <li>
            Offering lawn care services in your neighbourhood can be a
            profitable venture, especially during the summer months.
          </li>
        </ul>
        <ol start="9">
          <li>
            <h3>Photography or Videography</h3>
          </li>
        </ol>
        <ul>
          <li>
            If you have a knack for capturing moments, explore opportunities in
            photography or videography. ALL India Marketing HR Solution may have
            openings in this creative field.
          </li>
        </ul>
        <ol start="10">
          <li>
            <h3>Graphic Design</h3>
          </li>
        </ol>
        <ul>
          <li>
            Develop your artistic skills by delving into graphic design. ALL
            India Marketing HR Solution can connect you with companies looking
            for young talent in this area.
          </li>
        </ul>
        <ol start="11">
          <li>
            <h3>Food Service</h3>
          </li>
        </ol>
        <ul>
          <li>
            Jobs in cafes or restaurants not only teach you valuable customer
            service skills but also provide insight into the food industry.
          </li>
        </ul>
        <ol start="12">
          <li>
            <h3>Event Planning</h3>
          </li>
        </ol>
        <ul>
          <li>
            If you're organised and love to plan, consider working in event
            planning. ALL India Marketing HR Solution may have opportunities in
            this dynamic field.
          </li>
        </ul>
        <ol start="13">
          <li>
            <h3>Fitness Instructor or Personal Trainer</h3>
          </li>
        </ol>
        <ul>
          <li>
            For those passionate about fitness, becoming a trainer or instructor
            is a rewarding path.
          </li>
        </ul>
        <ol start="14">
          <li>
            <h3>E-commerce Store Owner</h3>
          </li>
        </ol>
        <ul>
          <li>
            Explore the world of online entrepreneurship by starting your own
            e-commerce store.
          </li>
        </ul>
        <ol start="15">
          <li>
            <h3>App Development or Coding</h3>
          </li>
        </ol>
        <ul>
          <li>
            In today's digital age, coding skills are highly valuable. ALL India
            Marketing HR Solution offers internships and opportunities in
            tech-related fields.
          </li>
        </ul>
        <h3>Conclusion</h3>
        <p>
          Exploring part-time jobs as a teenager not only provides financial
          independence but also equips you with essential life skills. ALL India
          Marketing HR Solution is your gateway to finding the perfect
          opportunity to kickstart your career. Explore the possibilities and
          step confidently into a bright future!
        </p>
        <p>AIMHRS - Empowering Dreams, Connecting Careers</p>
      </div>
    </>
  );
}

export default BlogContent2;
