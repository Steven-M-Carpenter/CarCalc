import React from "react";
import './style.css';
import { Button, Row, Col } from 'reactstrap';


export function ResultsDisplay(props) {
  return (
    <Row className="pb-3 pt-3">
      <Col className="full_Box" sm={{ size: 8, offset: 2 }}>
        <h5 className="account_Labels text-left pt-2 pb-0 mb-1">Payment Details</h5>
        <Row className="loan_Section pb-2 ">
          <Col className="results pt-2" sm={{ size: 4 }}>
            <h6 className="text-center mb-1">Amount Financed</h6>
            <h6 className="result_value text-center mb-1">{props.financeAmount}</h6>
          </Col>
          <Col className="results pt-2" sm={{ size: 4 }}>
            <h6 className="text-center mb-1">Total Interest</h6>
            <h6 className="result_value text-center mb-1">{props.financeInterest}</h6>
          </Col>
          <Col className="results pt-2" sm={{ size: 4 }}>
            <h6 className="text-center mb-1">Total Cost</h6>
            <h6 className="result_value text-center mb-1">{props.financePrice}</h6>
          </Col>
        </Row>
        <Row className="">
          <Col className="results pt-2 pb-2 border-dark border-top" sm={{ size: 10, offset: 1 }}>
            <h6 className="text-center mb-1">Monthly Payment</h6>
            <h4 className="result_value text-center mb-1">{props.financePayment}</h4>
          </Col>
        </Row>
        <Row className="">
          <Col className="results pt-1 pb-1 border-dark border-top" sm={{ size: 10, offset: 1 }}>
            <div className="text-center">
              <Button className="access_Button mt-3 mb-3" onClick={props.onSave} >Save This Deal</Button>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
