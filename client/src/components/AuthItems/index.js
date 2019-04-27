import React from "react";
import './style.css';
import { Button, Container, Row, Col, Form, FormGroup, Label, Input, InputGroup, InputGroupAddon, CustomInput } from 'reactstrap';
// import { Button, Container, Row, Col, Form, FormGroup, Label, Input, InputGroup, InputGroupAddon, CustomInput } from 'reactstrap';

// This file exports the Input, TextArea, and FormBtn components

export function LoginBox(props) {
  return (
    <div className="">
      <Row className="pb-5">
        <Col className="full_Box" sm={{ size: 4, offset: 4 }}>
          <h5 className="account_Labels text-center pt-4 pb-1">Access Your Account</h5>
          <Form className="access_Form">
            <FormGroup className="mt-1">
              <Label className="label_Text mb-0" for="login_email">Email</Label>
              <Input type="email" bsSize="sm" name="email" id="login_email" placeholder="Enter your email address" onChange={props.change} />
            </FormGroup>
            <FormGroup className="mt-1">
              <Label className="label_Text mb-0" for="login_Password">Password</Label>
              <Input type="password" bsSize="sm" name="password" id="login_Password" placeholder="Enter your password" onChange={props.change} />
            </FormGroup>
            <div className="text-center">
              <Button className="access_Button mt-3 mb-4" onClick={props.login} >Login</Button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
}


export function SignupBox(props) {
  return (
    <div className="auth_div pb-3">
    <Row>
    <Col className="full_Box" sm={{ size: 4, offset: 4 }}>
      <h5 className="account_Labels pt-4 pb-1 text-center">Create An Account</h5>
        <Form>
          <FormGroup className="mt-1">
            <Label className="label_Text mb-0" for="login_fName">First name</Label>
            <Input type="text" bsSize="sm" name="fName" id="login_fName" placeholder="Enter your first name" onChange={props.change} />
          </FormGroup>
          <FormGroup className="mt-4">
            <Label className="label_Text mb-0" for="login_lName">Last name</Label>
            <Input type="text" bsSize="sm" name="lName" id="login_lName" placeholder="Enter your last name" onChange={props.change} />
          </FormGroup>
          <FormGroup className="mt-4">
            <Label className="label_Text mb-0" for="login_email">Email</Label>
            <Input type="email" bsSize="sm" name="email" id="login_email" placeholder="Enter your email address" onChange={props.change} />
          </FormGroup>
          <FormGroup className="mt-4">
            <Label className="label_Text mb-0" for="login_Password">Password</Label>
            <Input type="password" bsSize="sm" name="password" id="login_Password" placeholder="Enter a password" onChange={props.change} />
          </FormGroup>
          <div className="text-center">
          <Button className="submit_Button mt-3 mb-4" onClick={props.signup} >Signup</Button>
          </div>
        </Form>
      </Col>
    </Row>
    </div>
  );
}
