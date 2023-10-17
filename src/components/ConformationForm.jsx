import React from "react";
import { Link } from "react-router-dom";

const ConfirmationPage = () => {
  return (
    <div>
      <h2>Confirmation</h2>
      <p>Your application has been submitted successfully.</p>
      <Link to="/feedback">Go to Feedback Page</Link>
    </div>
  );
};

export default ConfirmationPage;
