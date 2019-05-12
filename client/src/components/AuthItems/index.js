import React from "react";
import './style.css';
import { Button, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';


export function LoginBox(props) {
  return (
    <div className="login_div">
      <Row className="pb-2">
        <Col className="full_Box"  xs={{ size: 10, offset: 1 }} sm={{ size: 10, offset: 1 }} md={{ size: 8, offset: 2 }} lg={{ size: 6, offset: 3 }}>
          <h5 className="account_Labels text-center pt-2 pb-1">Access Your Account</h5>
          <Form className="access_Form">
            <FormGroup size="sm" className="mt-1 mb-2">
              <Label className="label_Text mb-0" for="login_email">Email</Label>
              <Input type="email" bsSize="sm" name="email" id="login_email" placeholder="Enter your email address" autoComplete="email" onChange={props.change} />
            </FormGroup>
            <FormGroup className="mt-1 mb-2">
              <Label className="label_Text mb-0" for="login_Password">Password</Label>
              <Input type="password" bsSize="sm" name="password" id="login_Password" placeholder="Enter your password" autoComplete="current-password" onChange={props.change} />
            </FormGroup>
            <div className="text-center">
              <Button className="access_Button mt-3 mb-3" onClick={props.login} >Login</Button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
};


export function SignupBox(props) {
  return (
    <div className="signup_div pb-3 pt-2">
    <Row>
    <Col className="full_Box" xs={{ size: 10, offset: 1 }} sm={{ size: 10, offset: 1 }} md={{ size: 8, offset: 2 }} lg={{ size: 6, offset: 3 }}>
      <h5 className="account_Labels pt-2 pb-1 text-center">Create An Account</h5>
        <Form>
          <FormGroup className="mt-1 mb-2">
            <Label className="label_Text mb-0" for="login_fName">First name</Label>
            <Input className="input_div" type="text" bsSize="sm" name="fName" id="signup_fName" placeholder="Enter your first name" autoComplete="given-name" onChange={props.change} />
          </FormGroup>
          <FormGroup className="mt-1 mb-2">
            <Label className="label_Text mb-0" for="login_lName">Last name</Label>
            <Input className="input_div" type="text" bsSize="sm" name="lName" id="signup_lName" placeholder="Enter your last name" autoComplete="family-name" onChange={props.change} />
          </FormGroup>
          <FormGroup className="mt-1 mb-2">
            <Label className="label_Text mb-0" for="login_email">Email</Label>
            <Input className="input_div" type="email" bsSize="sm" name="email" id="signup_email" placeholder="Enter your email address" autoComplete="email" onChange={props.change} />
          </FormGroup>
          <FormGroup className="mt-1 mb-2">
            <Label className="label_Text mb-0" for="login_Password">Password</Label>
            <Input className="input_div" type="password" bsSize="sm" name="password" id="signup_Password" placeholder="Enter a password" autoComplete="new-password" onChange={props.change} />
          </FormGroup>
          <div className="text-center">
          <Button className="access_Button mt-3 mb-3" onClick={props.signup} >Signup</Button>
          </div>
        </Form>
      </Col>
    </Row>
    </div>
  );
};
