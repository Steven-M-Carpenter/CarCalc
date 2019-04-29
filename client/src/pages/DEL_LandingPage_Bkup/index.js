import React, { Component } from 'react';
// import API from "../../utils/API";
// import './style.css';
import { Button, Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



//    {/* <Grid columns={2} stackable textAlign='center'> */ }


class LandingPage extends Component {

  handleLogin = event => {
    event.preventDefault();
    console.log("Handle Login");
    window.location.assign('/');
  };

  handleSignup = event => {
    event.preventDefault();
    console.log("Handle Signup");
    window.location.assign('/signup');
  };


  render() {
    return (

      <div>
        <Container>
          <Row className="top_Filler">
          </Row>
        </Container>

        <Container className="welcome_Box">
          <Row>
            <Col className="text-center py-3" sm="12">
              <FontAwesomeIcon className="icon_Traits" icon="shield-alt" size="6x" />
              <p className="product_Title mb-0">Car Financing Calculator LP</p>
              <p className="product_Slogan pb-3">Track your deals and what fits your budget</p>
            </Col>
          </Row>

          <Row className="pb-5">
            <Col className="access_LoginCol text-center" sm={{ size: 4, offset: 2 }}>
              <FontAwesomeIcon className="icon_Traits mt-5" icon="user" size="5x" />
              <p className="account_Labels pt-4 pb-3">Access Your Account</p>
              <Button className="access_Button mb-4" onClick={this.handleLogin}>Login</Button>
            </Col>
            <Col className="access_LoginCol text-center" sm="4">
              <FontAwesomeIcon className="icon_Traits mt-5" icon="plus-circle" size="5x" />
              <p className="account_Labels pt-4 pb-3">Create An Account</p>
              <Button className="access_Button mb-4" onClick={this.handleSignup} >Sign-up</Button>
            </Col>
          </Row>
          <p className="copyright mb-1">Copyright © 2019 - Steven M. Carpenter</p>
        </Container>
      </div >
    );
  };
};

export default LandingPage;