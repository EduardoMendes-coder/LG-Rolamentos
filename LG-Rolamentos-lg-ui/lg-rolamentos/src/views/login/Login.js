import React, { useState } from "react";
import logo from "./img/logo-lg.png";
import "./Login.css";
import { Component } from "react";
import { Form, FormFeedback, FormGroup, Input, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      validate: {
        emailState: "",
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    const { target } = event;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  };

  validateEmail(e) {
    const emailRex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const { validate } = this.state;

    if (emailRex.test(e.target.value)) {
      validate.emailState = "has-success";
    } else {
      validate.emailState = "has-danger";
    }

    this.setState({ validate });
  }

  submitForm(e) {
    e.preventDefault();
    console.log(`Email: ${this.state.email}`);
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="App">
        <div className="md-5 d-flex flex-column align-items-center">
          <img src={logo} alt="Logo" style={{ width: "600px" }} />
          <Form
            className="form d-flex flex-column justify-content-center"
            onSubmit={(e) => this.submitForm(e)}
            style={{
              backgroundColor: "white",
              width: "40%",
              padding: "60px",
              borderRadius: "20px",
              boxShadow: "10px 25px 25px black",
            }}
          >
            <FormGroup>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Email"
                valid={this.state.validate.emailState === "has-success"}
                invalid={this.state.validate.emailState === "has-danger"}
                value={email}
                onChange={(e) => {
                  this.validateEmail(e);
                  this.handleChange(e);
                }}
              />
              <FormFeedback>
                Uh oh! Digite seu Email de forma correta!!
              </FormFeedback>
              <FormFeedback valid>
                Este endereço parece com um Email!!.
              </FormFeedback>
            </FormGroup>
            <FormGroup className="mt-2">
              <Input
                placeholder="Senha"
                type="password"
                name="password"
                id="examplePassword"
                value={password}
                onChange={(e) => this.handleChange(e)}
              />
            </FormGroup>
            <button className="button mt-3">Entrar</button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Login;
