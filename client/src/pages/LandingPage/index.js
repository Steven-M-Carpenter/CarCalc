import React, { Component } from 'react';
import API from "../../utils/API";
import './style.css';
import { Button, Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



//    {/* <Grid columns={2} stackable textAlign='center'> */ }


class LandingPage extends Component {
  state = {
    isLoggedIn: false,
  };


  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
    console.log("name = " + name);
    console.log("value = " + value);
  };


  handleLogin = event => {
    event.preventDefault();
    this.validateUser({
      email: this.state.email,
      password: this.state.password
    });
    console.log("state = " + JSON.stringify(this.state));
  };


  handleSignup = event => {
    event.preventDefault();
    this.createUser({
      firstName: this.state.fName,
      lastName: this.state.lName,
      email: this.state.email,
      password: this.state.password
    });
    console.log("state = " + JSON.stringify(this.state));
    this.validateUser({
      email: this.state.email,
      password: this.state.password
    });
    // Navigate somewhere
  };


  validateUser = query => {
    API.getUser(query)
      .then(res => {
        console.log("LOGIN: res = " + JSON.stringify(res));
        if (res.data.success) {
          console.log("in success handle");
          this.setState({ isLoggedIn: true, });
          this.setState({ loginMsg: res.data.message });
          window.sessionStorage.setItem("CFC_authkey", res.data.token);
          // window.location.assign('/auth/taskboard');
        } else {
          console.log("in failure handle");
          this.setState({ isLoggedIn: false });
          this.setState({ loginMsg: res.data.message });
          window.sessionStorage.setItem("CFC_authkey", "");
          // window.location.assign('/login');
        }
        console.log("LOGIN: state = " + JSON.stringify(this.state));
      })
      .catch(err => console.log(err));
  };


  createUser = query => {
    console.log("query = " + JSON.stringify(query));
    API.createUser(query)
      .then(res => {
        console.log("LOGIN: res = " + JSON.stringify(res));
        if (res.data.success) {
          //This is where you might send an email confirmation or auto-login the user
          console.log("in success handle");
          // window.location.assign('/login');
        } else {
          console.log("in failure handle");
          // window.location.assign('/signup');
        }
      })
      .catch(err => console.log(err));
  };


  render() {
    return (

      <div>
        <Container>
          <Row className="top_Filler">
          </Row>
        </Container>

        <Container className="welcome_Box">
          <Row className="">
            <Col className="text-center py-0 mt-3" sm="12">
              <FontAwesomeIcon className="icon_Traits" icon="shield-alt" size="6x" />
              <h3 className="product_Title mb-0">Car Financing Calculator LP</h3>
              <h5 className="product_Slogan pb-4">Track your deals and what fits your budget</h5>
            </Col>
          </Row>


          <div className="">
          <Row className="pb-5">
          <Col className="page_Box" sm={{ size: 4, offset: 4 }}>
            <h5 className="account_Labels text-center pt-4 pb-1">Access Your Account</h5>
          {/* </Col> */}
          {/* </Row> */}
          {/* <Row className="login_Section pb-4 "> */}
            {/* <Col className="test_Box" sm={{ size: 4, offset: 4 }}> */}
              <Form className="access_Form">
                <FormGroup className="mt-1">
                  <Label className="label_Text mb-0" for="login_email">Email</Label>
                  <Input type="email" bsSize="sm" name="email" id="login_email" placeholder="Enter your email address" onChange={this.handleInputChange} />
                </FormGroup>
                <FormGroup className="mt-1">
                  <Label className="label_Text mb-0" for="login_Password">Password</Label>
                  <Input type="password" bsSize="sm" name="password" id="login_Password" placeholder="Enter your password" onChange={this.handleInputChange} />
                </FormGroup>
                <div className="text-center">
                  <Button className="access_Button mt-3 mb-4" onClick={this.handleLogin} >Login</Button>
                </div>
              </Form>
            </Col>
          </Row>
          </div>


          <Row>
          <Col className="page_Box" sm={{ size: 4, offset: 4 }}>
            <h5 className="account_Labels pt-4 pb-1 text-center">Create An Account</h5>
          {/* </Col> */}
          {/* </Row> */}
          {/* <Row className="pb-4"> */}
            {/* <Col className="access_LoginCol" sm={{ size: 4, offset: 4 }}> */}
              <Form>
                <FormGroup className="mt-1">
                  <Label className="label_Text mb-0" for="login_fName">First name</Label>
                  <Input type="text" bsSize="sm" name="fName" id="login_fName" placeholder="Enter your first name" onChange={this.handleInputChange} />
                </FormGroup>
                <FormGroup className="mt-4">
                  <Label className="label_Text mb-0" for="login_lName">Last name</Label>
                  <Input type="text" bsSize="sm" name="lName" id="login_lName" placeholder="Enter your last name" onChange={this.handleInputChange} />
                </FormGroup>
                <FormGroup className="mt-4">
                  <Label className="label_Text mb-0" for="login_email">Email</Label>
                  <Input type="email" bsSize="sm" name="email" id="login_email" placeholder="Enter your email address" onChange={this.handleInputChange} />
                </FormGroup>
                <FormGroup className="mt-4">
                  <Label className="label_Text mb-0" for="login_Password">Password</Label>
                  <Input type="password" bsSize="sm" name="password" id="login_Password" placeholder="Enter a password" onChange={this.handleInputChange} />
                </FormGroup>
                <div className="text-center">
                <Button className="submit_Button mt-3 mb-4" onClick={this.handleSignup} >Signup</Button>
                </div>
              </Form>
            </Col>
          </Row>


          <p className="copyright text-center mt-2 mb-3">Copyright © 2019 - Steven M. Carpenter</p>
        </Container>
      </div >
    );
  };
};

export default LandingPage;