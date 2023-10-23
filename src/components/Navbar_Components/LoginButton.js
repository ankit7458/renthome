import React from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap-icons/font/bootstrap-icons.css";

function LoginButton() {
    
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const[userData, setUserData] = useState({
    name: "",
    email: "",
    password: ""
  })

    const handleSignUp=()=>{
        const {name, email, password} = userData;

        console.log({name, email, password});
        handleClose();
    }
  return (
    <div>
        <Button className="navbar_login_button" variant="secondary" onClick={handleShow}>
          <i class="bi bi-person"> Login</i>
        </Button>
        <Modal show={show} onHide={handleClose}>

          {/* Modal Form: */}
          <div className="container_login_form ">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={(e)=>setUserData({...userData, email: e.target.value})} type="email" placeholder="" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={(e)=>setUserData({...userData, password: e.target.value})} type="password" placeholder="" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Stay Signed-in" />
              </Form.Group>
            </Form>
          </div>

          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
            <Button variant="success" type="submit" onClick={handleClose}>
              Login
            </Button>
          </Modal.Footer>
        </Modal>
    </div>
  )
}

export default LoginButton