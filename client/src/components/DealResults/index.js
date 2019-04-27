import React from "react";
import './style.css';
import { Button, Row, Col } from 'reactstrap';


export function ResultsDisplay(props) {
  return (
    <Row className="pb-0 pt-5">
      <Col className="full_Box" sm={{ size: 8, offset: 2 }}>
        <h5 className="account_Labels text-left pt-2 pb-0 mb-1">Payment Details</h5>
        <Row className="loan_Section pb-3 ">
          <Col className="results pt-4" sm={{ size: 4 }}>
            <h6 className="text-center">Amount Financed</h6>
            <h6 className="result_value text-center">{props.financeAmount}</h6>
          </Col>
          <Col className="results pt-4" sm={{ size: 4 }}>
            <h6 className="text-center">Total Interest</h6>
            <h6 className="result_value text-center">{props.financeInterest}</h6>
          </Col>
          <Col className="results pt-4" sm={{ size: 4 }}>
            <h6 className="text-center">Total Cost</h6>
            <h6 className="result_value text-center">{props.financePrice}</h6>
          </Col>
        </Row>
        <Row className="border border-dark border-top-2">
          <Col className="results pt-3 pb-3 border-top" sm={{ size: 10, offset: 1 }}>
            <h6 className="text-center">Monthly Payment</h6>
            <h4 className="result_value text-center">{props.financePayment}</h4>
          </Col>
        </Row>
        <Row className="border border-dark border-top-2">
          <Col className="results pt-2 pb-3 border-top" sm={{ size: 10, offset: 1 }}>
            <div className="text-center">
              <Button className="access_Button mt-3 mb-4" onClick={props.onSave} >Save This Deal</Button>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
