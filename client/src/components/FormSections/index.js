import React from "react";
import './style.css';
import { Button, Row, Col, FormGroup, Label, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import { InputRate, InputDollars, SwitchLeft, SwitchRight } from "../../components/DealInputs";


export function LoanTerms(props) {
  return (
    <div className="test_color">
      <Row className="pb-0">
        <Col className="top_Box" xs={{ size: 10, offset: 1 }} sm={{ size: 10, offset: 1 }} md={{ size: 8, offset: 2 }} lg={{ size: 6, offset: 3 }}>
          <Row>
            <Col className="secTitle" xs="12" sm="12" md="12" lg="12">
              <h5 className="account_Labels text-left pt-2 pb-0 mb-1">Loan Details</h5>
            </Col>

          </Row>
          <Row>
            <Col className="secTitle" xs="12" sm="12" md="12" lg="12">
              <p className="instructions">Enter the financing rate and term of the loan in months.</p>
            </Col>
          </Row>
          <Row>
            <Col className="secButton pl-2 pr-1" xs="12" sm="12" md={{ size: 6, offset: 0 }} lg={{ size: 6, offset: 0 }}>
              <div className="text-center">
                <Button size="sm" className="access_Button mt-1 mb-1" onClick={props.getDeals} >Load Saved Deal</Button>
              </div>
            </Col>
            <Col className="secButton pr-1" xs="12" sm="12" md={{ size: 6, offset: 0 }} lg={{ size: 6, offset: 0 }}>
              <div className="text-center">
                <Button size="sm" className="access_Button mt-1 mb-1" onClick={props.clearFields} >New Deal</Button>
              </div>
            </Col>
          </Row>

          <Row className="loan_Section pb-1 ">
            <Col className="left_Inputs" xs="12" sm="5" md="6" lg="6">
              <InputRate
                for="loan_rate"
                label="Rate"
                name="loanRate"
                id="loan_rate"
                step="1.00"
                value={props.valRate}
                onChange={props.change} />
            </Col>
            <Col className="right_Inputs" xs="12" sm="7" md="6" lg="6">
              <FormGroup className="mt-1 mb-3">
                <Label className="label_Text mb-0" for="loan_term">Term</Label>
                <InputGroup size="sm">
                  <Input type="text" min="0" bsSize="sm" name="loanTerm" id="loan_term" step="1.00" className="form-control text-right" value={props.valTerm} onChange={props.change} />
                  <InputGroupAddon addonType="append">months</InputGroupAddon>
                </InputGroup>
              </FormGroup>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};


export function Costs(props) {
  return (
    <Row className="pb-0">
      <Col className="page_Box" xs={{ size: 10, offset: 1 }} sm={{ size: 10, offset: 1 }} md={{ size: 8, offset: 2 }} lg={{ size: 6, offset: 3 }}>
        <h5 className="account_Labels text-left pt-2 pb-0 mb-1">Costs</h5>
        <p className="instructions mb-2">Enter the costs for the items.  Set the switch to on for items to be included in financing.</p>

        <Row className="cost_Section pb-0 ">
          <Col className="left_Switch text-center" xs="4" sm="4" md="2" lg="1">
            <SwitchLeft
              name="incDealPrice"
              id="include_DealPrice"
              checked={props.incDealPrice}
              onChange={props.toggleChk} />
          </Col>
          <Col className="left_Inputs" xs="8" sm="8" md="4" lg="5">
            <InputDollars
              for="deal_price"
              label="Vehicle Price"
              name="dealPrice"
              id="deal_price"
              step="1.00"
              value={props.valDealPrice}
              onChange={props.change} />
          </Col>
          <Col className="right_Inputs" xs="8" sm="8" md="4" lg="5">
            <InputRate
              for="state_TaxRate"
              label="State Tax Rate"
              name="stateTaxRate"
              id="state_TaxRate"
              step="1.00"
              value={props.valStateTax}
              onChange={props.change} />
          </Col>
          <Col className="right_Switch text-center" xs="4" sm="4" md="2" lg="1">
            <SwitchRight
              name="incStateTax"
              id="include_StateTax"
              checked={props.incStateTax}
              onChange={props.toggleChk} />
          </Col>
        </Row>

        <Row className="cost_Section pb-0 ">
          <Col className="left_Switch text-center" xs="4" sm="4" md="2" lg="1">
            <SwitchLeft
              name="incAddOn"
              id="include_AddOn"
              checked={props.incAddOn}
              onChange={props.toggleChk} />
          </Col>
          <Col className="left_Inputs" xs="8" sm="8" md="4" lg="5">
            <InputDollars
              for="additional_charges"
              label="Add-on Charges"
              name="additionalCharges"
              id="additional_charges"
              step="1.00"
              value={props.valAddCharges}
              onChange={props.change} />
          </Col>
          <Col className="right_Inputs" xs="8" sm="8" md="4" lg="5">
            <InputRate
              for="local_TaxRate"
              label="Local Tax Rate"
              name="localTaxRate"
              id="local_TaxRate"
              step="1.00"
              value={props.valLocalTax}
              onChange={props.change} />
          </Col>
          <Col className="right_Switch text-center" xs="4" sm="4" md="2" lg="1">
            <SwitchRight
              name="incLocalTax"
              id="include_LocalTax"
              checked={props.incLocalTax}
              onChange={props.toggleChk} />
          </Col>
        </Row>

        <Row className="cost_Section pb-0 ">
          <Col className="left_Switch text-center" xs="4" sm="4" md="2" lg="1">
            <SwitchLeft
              name="incDealPro"
              id="include_DealPro"
              checked={props.incDealPro}
              onChange={props.toggleChk} />
          </Col>
          <Col className="left_Inputs" xs="8" sm="8" md="4" lg="5">
            <InputDollars
              for="dealer_processing"
              label="Dealer Processing"
              name="dealerProcessing"
              id="dealer_processing"
              step="1.00"
              value={props.valDealerPro}
              onChange={props.change} />
          </Col>
          <Col className="right_Inputs" xs="8" sm="8" md="4" lg="5">
            <InputDollars
              for="title_fee"
              label="Title"
              name="titleFee"
              id="title_fee"
              step="1.00"
              value={props.valTitleFee}
              onChange={props.change} />
          </Col>
          <Col className="right_Switch text-center" xs="4" sm="4" md="2" lg="1">
            <SwitchRight
              name="incTitleFee"
              id="include_TitleFee"
              checked={props.incTitleFee}
              onChange={props.toggleChk} />
          </Col>
        </Row>

        <Row className="cost_Section pb-3 ">
          <Col className="left_Switch text-center" xs="4" sm="4" md="2" lg="1">
            <SwitchLeft
              name="incWarranty"
              id="include_Warranty"
              checked={props.incWarranty}
              onChange={props.toggleChk} />
          </Col>
          <Col className="left_Inputs" xs="8" sm="8" md="4" lg="5">
            <InputDollars
              for="warranty_cost"
              label="Warranty"
              name="warrantyCost"
              id="warranty_cost"
              step="1.00"
              value={props.valWarranty}
              onChange={props.change} />
          </Col>
          <Col className="right_Inputs" xs="8" sm="8" md="4" lg="5">
            <InputDollars
              for="tag_fee"
              label="Tags"
              name="tagFee"
              id="tag_fee"
              step="1.00"
              value={props.valTagFee}
              onChange={props.change} />
          </Col>
          <Col className="right_Switch text-center" xs="4" sm="4" md="2" lg="1">
            <SwitchRight
              name="incTagFee"
              id="include_TagFee"
              checked={props.incTagFee}
              onChange={props.toggleChk} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};


export function Offsets(props) {
  return (
    <Row className="pb-0">
      <Col className="page_Box" xs={{ size: 10, offset: 1 }} sm={{ size: 10, offset: 1 }} md={{ size: 8, offset: 2 }} lg={{ size: 6, offset: 3 }}>
        <h5 className="account_Labels text-left pt-2 pb-0 mb-1">Offsets</h5>
        <p className="instructions mb-2">Enter the dollar amount for each credit.  Enable the switch for items to be included in financing.</p>

        <Row className="offset_Section pb-1 ">
          <Col className="left_Inputs" xs="6" sm="6" md="6" lg="6">
            <InputDollars
              for="trade_in"
              label="Trade-In"
              name="tradeIn"
              id="trade_in"
              step="1.00"
              value={props.valTradeIn}
              onChange={props.change} />
          </Col>
          <Col className="right_Inputs" xs="6" sm="6" md="6" lg="6">
            <InputDollars
              for="down_payment"
              label="Down Payment"
              name="downPayment"
              id="down_payment"
              step="1.00"
              value={props.valDownPymt}
              onChange={props.change} />
          </Col>
        </Row>

        <Row className="offset_Section pb-3 ">
          <Col className="left_Inputs" xs="6" sm="6" md="6" lg="6">
            <InputDollars
              for="rebates"
              label="Rebates"
              name="rebates"
              id="rebates"
              step="1.00"
              value={props.valRebates}
              onChange={props.change} />
          </Col>
          <Col className="right_Inputs" xs="6" sm="6" md="6" lg="6">
            <InputDollars
              for="discounts"
              label="Discounts"
              name="discounts"
              id="discounts"
              step="1.00"
              value={props.valDiscounts}
              onChange={props.change} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

