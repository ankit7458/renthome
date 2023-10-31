import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function UploadPictures() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previewURLs, setPreviewURLs] = useState([]);

  const containerStyles = {
    width: "100%",
    height: "200px",
    border: "1px solid #e5e5e5",
    padding: "10px",
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);

    const urls = files.map((file) => {
      const reader = new FileReader();
      return new Promise((resolve) => {
        reader.onload = (e) => {
          resolve(e.target.result);
        };
        reader.readAsDataURL(file);
      });
    });

    Promise.all(urls).then((imageURLs) => {
      setPreviewURLs(imageURLs);
    });
  };

  return (
    <div>
      <h3 className="d-flex justify-content-center">Upload Photos</h3>
      <hr />
      <Form.Group className="shadow">
        <Container style={containerStyles}>
          {previewURLs.length > 0 ? (
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {previewURLs.map((url, index) => (
                <div key={index} style={{ margin: "10px" }}>
                  <img
                    src={url}
                    alt={`Preview ${index}`}
                    style={{ maxWidth: "200px", maxHeight: "200px" }}
                  />
                </div>
              ))}
            </div>
          ) : (
            "Select Multiple Images"
          )}
        </Container>
      </Form.Group>
      <hr />
      <Row>
        <Col >
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Control type="file" multiple onChange={handleFileChange} />
          </Form.Group>
        </Col>
        <Col className="d-flex justify-content-end" md={3}>
          <Button variant="danger">Upload</Button>{" "}
        </Col>
      </Row>
    </div>
  );
}

export default UploadPictures;
