import React, { useState } from "react";

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., sending feedback to the server
    // After successful submission, you can update the state to show a confirmation message
    setSubmitted(true);
  };

  return (
    <div>
      <h2>Feedback Form</h2>
      {submitted ? (
        <p>Thank you for your feedback!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="rating">Rating:</label>
            <select
              id="rating"
              name="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              required
            >
              <option value="">Select a rating</option>
              <option value="5">Excellent</option>
              <option value="4">Good</option>
              <option value="3">Average</option>
              <option value="2">Below Average</option>
              <option value="1">Poor</option>
            </select>
          </div>
          <div>
            <label htmlFor="feedback">Feedback:</label>
            <textarea
              id="feedback"
              name="feedback"
              rows="4"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
            />
          </div>
          <div>
            <button type="submit">Submit Feedback</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default FeedbackForm;
