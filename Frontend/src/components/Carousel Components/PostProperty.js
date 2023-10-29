import React from "react";
import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import BuildingType from "./PropertyListing/BuildingType";
import PlaceType from "./PropertyListing/PlaceType";
import AddressProperty from "./PropertyListing/AddressProperty";
import BasicsOfPlace from "./PropertyListing/BasicsOfPlace";
import UploadPictures from "./PropertyListing/UploadPictures";
import PropertyOfferings from "./PropertyListing/PropertyOfferings";

function PostProperty() {
  const [show, setShow] = useState(false);
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <BuildingType />;
      case 2:
        return <PlaceType />;
      case 3:
        return <AddressProperty />;
      case 4:
        return <PropertyOfferings />;
      case 5:
        return <BasicsOfPlace />;
      case 6:
        return <UploadPictures />;
      default:
        return <BuildingType />;
    }
  };

  return (
    <div className="container mt-3 mb-3">
      {/* <div className="d-flex justify-content-center mb-3"></div>
      {renderStep()} */}
      <Row className="mt-4">
        <Col className="d-flex justify-content-start">
          <Button disabled={step === 1} variant="danger" onClick={prevStep}>
            Back
          </Button>
        </Col>
        <Col className="d-flex justify-content-end">
          <Button
            variant="primary"
            type="submit"
            disabled={step === 6}
            onClick={nextStep}
          >
            Next
          </Button>
        </Col>
      </Row>
      <div className="d-flex justify-content-center mb-3"></div>
      {renderStep()}
    </div>
  );
}

export default PostProperty;
