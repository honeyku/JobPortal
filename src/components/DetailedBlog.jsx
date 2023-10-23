import React from "react";
import "./css/DetailedBlog.css";
import Blog1 from "./Images/Blog/blog1.jpg";
import Blog2 from "./Images/Blog/blog2.jpg";

function BlogContent({ onClose }) {
  return (
    <>
      <div className="blog-content" style={{ backgroundColor: "#f3fef7" }}>
        <button
          onClick={onClose}
          style={{ float: "right", backgroundColor: "black", color: "white" }}
        >
          X
        </button>
        <h2>Top High Paying Jobs in India 2023 – The AIMHRS</h2>
        <p>
          In a dynamic and evolving job market, the pursuit of high-paying jobs
          has become a common aspiration. As 2023 unfolds, several industries
          are witnessing significant growth, offering lucrative opportunities
          for job seekers. Let's delve into the top high-paying jobs in India
          this year, and also introduce a key player in the HR industry - AIMHRS
          (All India Marketing HR Solution).
        </p>
        <img
          src={Blog1}
          alt=""
          style={{ width: "400px", alignItems: "center" }}
        />
        <br />
        <br />
        <ol>
          <li>
            <h3>Data Scientist/Analyst</h3>
          </li>
        </ol>
        <ul>
          <li>Salary Range: INR 8 - 20 lakhs per annum</li>
          <li>Industry: Information Technology, Finance, Healthcare</li>
          <li>
            Overview: Data scientists and analysts continue to be in high
            demand, owing to the increasing reliance on data-driven
            decision-making across industries.
          </li>
        </ul>
        <ol start="2">
          <li>
            <h3>Artificial Intelligence and Machine Learning Engineer</h3>
          </li>
        </ol>
        <ul>
          <li>Salary Range: INR 10 - 25 lakhs per annum</li>
          <li>Industry: Information Technology, Research, Healthcare</li>
          <li>
            Overview: AI and ML professionals are instrumental in developing
            cutting-edge technologies, from autonomous vehicles to healthcare
            diagnostics.
          </li>
        </ul>

        <ol start="3">
          <li>
            <h3>Block chain Developer</h3>
          </li>
        </ol>
        <ul>
          <li>Salary Range: INR 8 - 20 lakhs per annum</li>
          <li>Industry: Fintech, Information Technology, Supply Chain</li>
          <li>
            Overview: With the rise of cryptocurrencies and decentralized
            finance, blockchain developers are in high demand for creating
            secure and transparent systems.
          </li>
        </ul>

        <ol start="4">
          <li>
            <h3>Cloud Engineer/Architect</h3>
          </li>
        </ol>
        <ul>
          <li>Salary Range: INR 10 - 25 lakhs per annum</li>
          <li>Industry: Information Technology, E-commerce, Finance</li>
          <li>
            Overview: Cloud computing continues to dominate the tech landscape,
            driving the need for professionals who can manage and optimize cloud
            infrastructure.
          </li>
        </ul>
        <ol start="5">
          <li>
            <h3>Cyber security Expert</h3>
          </li>
        </ol>
        <ul>
          <li>Salary Range: INR 8 - 20 lakhs per annum</li>
          <li>Industry: Information Technology, Finance, Government</li>
          <li>
            Overview: With the escalating threat of cyber-attacks, cybersecurity
            experts play a critical role in safeguarding sensitive information.
          </li>
        </ul>
        <ol start="6">
          <li>
            <h3>
              Medical Professionals (Surgeons, Radiologists, Anesthesiologists)
            </h3>
          </li>
        </ol>
        <ul>
          <li>Salary Range: INR 10 - 50 lakhs per annum</li>
          <li>Industry: Healthcare</li>
          <li>
            Overview: The healthcare sector continues to be a high-paying
            domain, with specialists commanding substantial remuneration.
          </li>
        </ul>
        <ol start="7">
          <li>
            <h3>Management Consultants</h3>
          </li>
        </ol>
        <ul>
          <li>Salary Range: INR 12 - 30 lakhs per annum</li>
          <li>Industry: Consulting, Finance</li>
          <li>
            Overview: Management consultants provide valuable insights and
            strategies to organizations, making them indispensable in the
            business world.
          </li>
        </ul>
        <p>AIMHRS - Empowering Dreams, Connecting Careers</p>
        <p>
          All India Marketing HR Solution is a distinguished HR Solution company
          based in Noida sector 2. With a dedicated team of seasoned
          professionals, AIMHRS specializes in bridging the gap between job
          seekers and their dream careers. The company's mission is to empower
          job seekers with the right skills and opportunities, ensuring they
          secure fulfilling positions in the competitive job market.
        </p>
        <p>AIMHRS achieves this through a comprehensive approach:</p>
        <ul>
          <li>
            Skill Development: Offering training and upskilling programs to
            equip job seekers with the latest industry-relevant skills.
          </li>
          <li>
            Customized Job Matching: Leveraging their extensive network and
            industry insights, AIMHRS connects candidates with roles that align
            with their aspirations and capabilities.
          </li>
          <li>
            Career Guidance: Providing valuable insights and guidance to
            candidates at every stage of their job search journey.
          </li>
          <li>
            Industry Expertise: With a deep understanding of various industries,
            AIMHRS offers tailored solutions that cater to specific sector
            requirements.
          </li>
        </ul>
        <p>
          In 2023, AIMHRS continues to be a beacon of hope for job seekers,
          guiding them towards rewarding careers in a competitive job market.
        </p>
        <p>
          For more information and to embark on your journey to a fulfilling
          career, visit AIMHRS.
        </p>
        <p>
          In a rapidly evolving job market, it's crucial to have the right
          guidance and support. AIMHRS stands as a reliable partner, dedicated
          to realizing your career aspirations. Don't just job hunt; embark on a
          journey towards a fulfilling and prosperous future with AIMHRS.
        </p>
      </div>
    </>
  );
}

export default BlogContent;
