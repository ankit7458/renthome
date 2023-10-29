import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

function UploadPictures() {
  const containerStyles = {
    width: "100%", // Replace with your desired width
    height: "200px", // Replace with your desired height
    border: "1px solid #e5e5e5", // Add a border for visualization (optional)
  };
  return (
    <div>
      <h3 class="d-flex justify-content-center">Upload Photos</h3>
      <hr />
      <Form.Group>
      <Container
        // class="mt-4 mb-4 rounded border-secondary "
        style={containerStyles}
      >
      </Container>
      </Form.Group>
      <hr />
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Control type="file" />
      </Form.Group>
    </div>
  );
}

export default UploadPictures;
