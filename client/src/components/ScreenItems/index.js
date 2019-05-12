import React from "react";
import './style.css';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export function TopFill() {
  return (
    <Container>
      <Row className="top_Filler"></Row>
    </Container>
  );
};


export function Banner() {
  return (
    <Row className="">
      <Col className="text-center py-0 mt-3" xs="12">
        <FontAwesomeIcon className="icon_Traits" icon="car" size="7x" />
        <h3 className="product_Title mb-0">Auto Deal Pro</h3>
        <h5 className="product_Slogan mb-0">Track your deals and what fits your budget</h5>
        <p className="copyright text-center mt-1 mb-2">Copyright © 2019 - Steven M. Carpenter</p>
      </Col>
    </Row>
  );
};