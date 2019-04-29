import React from "react";
import { Button, Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';


function NoMatch() {
  return (
    <div>
      <Container className="error_Page container-fluid">
        <Row className="error_Row">
          <Col className="error_Col pl-1">
            <h1 className="error">404 Page Not Found</h1>
            <hr></hr>
            <a className="linkback" href="/">Return to the home page.</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NoMatch;
