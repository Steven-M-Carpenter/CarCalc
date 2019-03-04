import React, { Component } from 'react';
// import API from "../../utils/API";
// import './style.css';
import { Button, Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Logout extends Component {
  state = { isLoggedIn: false };

  handleExit = event => {
    event.preventDefault();
    console.log("Back to Root");
    window.location.assign('/');
  };


  render() {
    return (
      <div className="login_Main">
        <Container>
          <Row className="top_Filler">
          </Row>
        </Container>

        <Container className="welcome_Box">
          <Row>
            <Col className="text-center py-3" sm="12">
              <FontAwesomeIcon className="icon_Traits mt-4" icon="shield-alt" size="6x" />
              <p className="product_Title mb-0">Car Financing Calculator LO</p>
              <p className="product_Slogan pb-3">Track your deals and what fits your budget</p>
            </Col>
          </Row>

          <Row className="pb-5">
            <Col className="access_LoginCol" sm={{ size: 4, offset: 4 }}>
              <p className="logout_Message text-center">Logout Complete</p>
                <div className="text-center">
                  <Button className="access_Button mt-3 mb-4" onClick={this.handleExit} >Exit</Button>
                </div>
            </Col>
          </Row>
          <p className="copyright mb-1">Copyright © 2019 - Steven M. Carpenter</p>
        </Container>
      </div >
    );
  }
}

export default Logout;
