import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Footer from "./Footer";

function Feedback() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component is mounted
  }, []);

  const [feedback, setFeedback] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleFeedbackSubmit = () => {
    // Handle the feedback submission here
    console.log("Feedback: ", feedback);

    // Reset the feedback text area
    setFeedback("");

    // Show the "Thank you" popup
    setShowThankYou(true);

    // Automatically hide the "Thank you" popup after 5 seconds
    setTimeout(() => {
      setShowThankYou(false);
    }, 5000);
  };

  const handleClose = () => {
    // Reset the feedback text area
    setFeedback("");

    // Close the "Thank you" popup
    setShowThankYou(false);
  };

  return (
    <div>

        <div className="about">
            <div className="heading">
                <h1>Feedback</h1>
            </div>
        <Form>
            <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" value={feedback} placeholder="Enter your feedback" rows={3} onChange={handleFeedbackChange} />
            </Form.Group>
            <dev className ="feedback_button">
            <Button variant="danger" onClick={handleClose}>
            Close
            </Button>
            <Button variant="primary" onClick={handleFeedbackSubmit}>
            Submit
            </Button>
            </dev>
        </Form>

        <Modal show={showThankYou} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Thank You</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <p>Thank you for your feedback!</p>
            </Modal.Body>
        </Modal>
        </div>
    <Footer />
    </div>
  );
}

export default Feedback;
