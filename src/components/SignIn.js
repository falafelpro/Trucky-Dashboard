import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";

import {
  Col,
  Row,
  Form,
  Card,
  Button,
  FormCheck,
  Container,
  InputGroup,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import BgImage from "../signin.svg";
import authStore from "../stores/authStore";

export default () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
    console.log(user);
  };

  const handleSubmit = (event) => {
    //event.preventDefault();
    console.log(user);
    const res = authStore.signin(user);
    console.log(res);
    res ? navigate("/home") : navigate("/");
  };
  return (
    <main className="col-10">
      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          <p className="text-center">
            <Card.Link as={Link} to="/" className="text-gray-700">
              <FaIcons.FaAngleLeft className="me-2" /> Back to homepage
            </Card.Link>
          </p>
          <Row
            className="justify-content-center form-bg-image"
            style={{ backgroundImage: `url(${BgImage})` }}
          >
            <Col
              xs={12}
              className="d-flex align-items-center justify-content-center"
            >
              <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">Sign in to Trucky platform</h3>
                </div>
                <Form className="mt-4" onSubmit={handleSubmit}>
                  <Form.Group className="mb-4">
                    <Form.Label>Companys's Username</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FaIcons.FaEnvelope />
                      </InputGroup.Text>
                      <Form.Control
                        name="username"
                        autoFocus
                        required
                        type="text"
                        placeholder="KushTruck.420"
                        onChange={handleChange}
                      />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group>
                    <Form.Group className="mb-4">
                      <Form.Label>Your Password</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <FaIcons.FaUnlockAlt />
                        </InputGroup.Text>
                        <Form.Control
                          name="password"
                          required
                          type="password"
                          placeholder="Password"
                          onChange={handleChange}
                        />
                      </InputGroup>
                    </Form.Group>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <Form.Check type="checkbox">
                        <FormCheck.Input id="defaultCheck5" className="me-2" />
                        <FormCheck.Label
                          htmlFor="defaultCheck5"
                          className="mb-0"
                        >
                          Remember me
                        </FormCheck.Label>
                      </Form.Check>
                    </div>
                  </Form.Group>
                  <div className="row d-flex justify-content-center">
                    <Button type="submit" className="w-25 p-2">
                      Sign in
                    </Button>
                  </div>
                </Form>
                <div className="d-flex justify-content-center align-items-center mt-4">
                  <span className="fw-normal">
                    Not registered?
                    <Card.Link as={Link} to="/contact" className="fw-bold">
                      {` Contact Us `}
                    </Card.Link>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};
