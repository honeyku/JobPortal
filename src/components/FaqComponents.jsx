import React, { useState } from "react";
import "./css/Faq.css";

function FAQItem({ question, answer }) {
  const [expanded, setExpanded] = useState(false);

  const toggleAnswer = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`faq-item ${expanded ? "expanded" : ""}`}>
      <div className="faq-question" onClick={toggleAnswer}>
        <div>{question}</div>
        <div className="question-toggle">{expanded ? "-" : "+"}</div>
      </div>
      <div
        className="faq-answer"
        style={{ display: expanded ? "block" : "none" }}
      >
        {answer}
      </div>
    </div>
  );
}

function FAQContainer() {
  // Define your FAQ items here
  const faqItems = [
    {
      question: "How can I hire the best candidates for my job?",
      answer:
        "AIMHS app has over 5 Crore active job seekers across 70+ job categories. Our AI algorithm selects the best-fit candidates for your job role, helping employers like you connect directly with candidates who have relevant experience and the desired skills.",
    },
    {
      question:
        "Bulk hiring costs a lot of money, how do I save my business expenses?",
      answer:
        "On AIMHS, you can either post a job & get unlimited applications or search AIMHSDatabase using smart filters to find top-notch candidates.",
    },
    {
      question: "How is AIMHS different from other traditional portals?",
      answer:
        "Traditional hiring is long, expensive, and inefficient. AIMHS simplifies the process by connecting employers directly with job seekers with relevant skills and experience.",
    },
    {
      question:
        "I have special hiring requirements. Whom should I reach out to?",
      answer:
        "Please fill up the booking form above, and our team will get in touch with you.",
    },
  ];

  return (
    <>
      <div
        className="faq-wrapper"
        style={{ backgroundColor: " rgb(246, 244, 255)" }}
      >
        <div className="faq-header">
          <p
            className="faq-heading"
            style={{
              textAlign: "center",
              fontSize: "18px",
              color: "green",
              fontWeight: "bolder",
              padding: "30px",
            }}
          >
            FAQ
          </p>
          <h1
            className="faq-main-heading"
            style={{
              textAlign: "center",
              alignItems: "center",
              fontSize: "30px",
            }}
          >
            Frequently asked
            <br />
            questions.
          </h1>
        </div>

        <div className="faq-container" style={{ paddingBottom: "20px" }}>
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default FAQContainer;
