import React, { Component } from 'react';
import API from "../../utils/API";
import './style.css';
import { Button, Container, Row, Col, Form, FormGroup, Label, Input, InputGroup, InputGroupAddon, CustomInput } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



//    {/* <Grid columns={2} stackable textAlign='center'> */ }



class DealForm extends Component {
  state = {
    isLoggedIn: false,
    allValues: true,
    amtPayment: "",
    amtInterest: "",
    loanRate: 10,
    loanTerm: 60,
    dealPrice: 10000,
    stateTaxRate: 10,
    localTaxRate: 10,
    incDealPrice: true,
    incStateTax: true,
    incLocalTax: true,
  };

  computePayment = () => {
    // Formula = A = P * (r(1+r)n)/((1+r)n-1)
    // A = the monthly payment.
    // P = the principal
    // r = the interest rate per month, which equals the annual interest rate divided by 12
    // n = the total number of months

    let ammountFinanced = 0;

    //******************************/
    //Calculate the taxes to include
    //******************************/
    console.log("State = " + JSON.stringify(this.state));
    // let calcStateTax = ((parseFloat(this.state.stateTaxRate) / 100) * parseFloat(this.state.dealPrice));
    // console.log("ST = " + calcStateTax);
    // let calcLocalTax = ((parseFloat(this.state.localTaxRate) / 100) * parseFloat(this.state.dealPrice));
    // console.log("LT = " + calcLocalTax);
    // this.setState({stateTax: calcStateTax,});
    // this.setState({localTax: calcLocalTax,});


    //*********************************************/
    //Calculate the charges to include in financing
    //*********************************************/
    console.log("State = " + JSON.stringify(this.state));
    console.log("StartAmtFin = " + ammountFinanced);
    ammountFinanced = (this.state.incDealPrice ? (ammountFinanced + parseFloat(this.state.dealPrice)) : (ammountFinanced + 0));
    console.log("Deal_AmtFin = " + ammountFinanced);
    // ammountFinanced = (this.state.incStateTax ? (ammountFinanced + parseFloat(this.state.stateTax)) : (ammountFinanced + 0));
    // console.log("ST_AmtFin = " + ammountFinanced + "  ST = " + this.state.stateTax + "  LT = " + this.state.localTax );
    ammountFinanced = (this.state.incStateTax ? (ammountFinanced + ((parseFloat(this.state.stateTaxRate) /100) * parseFloat(this.state.dealPrice))) : (ammountFinanced + 0));
    console.log("ST_AmtFin = " + ammountFinanced);
    ammountFinanced = (this.state.incAddOn ? (ammountFinanced + parseFloat(this.state.additionalCharges)) : (ammountFinanced + 0));
    console.log("AmtFin = " + ammountFinanced);
    ammountFinanced = (this.state.incLocalTax ? (ammountFinanced + ((parseFloat(this.state.localTaxRate) /100) * parseFloat(this.state.dealPrice))) : (ammountFinanced + 0));
    console.log("LT_AmtFin = " + ammountFinanced);
    ammountFinanced = (this.state.incDealPro ? (ammountFinanced + parseFloat(this.state.dealerProcessing)) : (ammountFinanced + 0));
    console.log("AmtFin = " + ammountFinanced);
    ammountFinanced = (this.state.incTitleFee ? (ammountFinanced + parseFloat(this.state.titleFee)) : (ammountFinanced + 0));
    console.log("AmtFin = " + ammountFinanced);
    ammountFinanced = (this.state.incWarranty ? (ammountFinanced + parseFloat(this.state.warrantyCost)) : (ammountFinanced + 0));
    console.log("AmtFin = " + ammountFinanced);
    ammountFinanced = (this.state.incTagFee ? (ammountFinanced + parseFloat(this.state.tagFee)) : (ammountFinanced + 0));
    console.log("AmtFin = " + ammountFinanced);
    
    let term = parseFloat(this.state.loanTerm);
    console.log("Term = " + term);
    let rate = parseFloat(this.state.loanRate) / 100;
    console.log("Rate = " + rate);
    let rateMonthly = parseFloat(rate) / 12;
    console.log("RateMonthly = " + rateMonthly);
    console.log("AmtFin = " + ammountFinanced);
    console.log("rateMonthly = " + rateMonthly);
    console.log("term = " + term);
    console.log("Formula = " + ammountFinanced + " * " + " (1 + " + rateMonthly + ") ** " + term + ") / ((1 + " + rateMonthly + ") ** " + term  + " - 1)");
    let monthlyPayment = ammountFinanced * (rateMonthly * (1 + rateMonthly) ** term) / ((1 + rateMonthly) ** term - 1);
    return monthlyPayment;
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



  handleCalculate = event => {
    event.preventDefault();
    let payment = 0;
    this.state.allValues ? (
      // this.setState({amtPayment: "$20.00", amtInterest: "$1600" }, () => {
      //   console.log("State = " + JSON.stringify(this.state));
      payment = this.computePayment()
    ) : (
        console.log("Error Stupid")
      );
    console.log("Payment = " + payment)

    //   this.validateUser({
    //     email: this.state.email,
    //     password: this.state.password
    //   });
    //   console.log("state = " + JSON.stringify(this.state));
  };


  // handleSignup = event => {
  //   event.preventDefault();
  //   this.createUser({
  //     firstName: this.state.fName,
  //     lastName: this.state.lName,
  //     email: this.state.email,
  //     password: this.state.password
  //   });
  //   console.log("state = " + JSON.stringify(this.state));
  //   this.validateUser({
  //     email: this.state.email,
  //     password: this.state.password
  //   });
  //   // Navigate somewhere
  // };


  // validateUser = query => {
  //   API.getUser(query)
  //     .then(res => {
  //       console.log("LOGIN: res = " + JSON.stringify(res));
  //       if (res.data.success) {
  //         console.log("in success handle");
  //         this.setState({ isLoggedIn: true, });
  //         this.setState({ loginMsg: res.data.message });
  //         window.sessionStorage.setItem("CFC_authkey", res.data.token);
  //         // window.location.assign('/auth/taskboard');
  //       } else {
  //         console.log("in failure handle");
  //         this.setState({ isLoggedIn: false });
  //         this.setState({ loginMsg: res.data.message });
  //         window.sessionStorage.setItem("CFC_authkey", "");
  //         // window.location.assign('/login');
  //       }
  //       console.log("LOGIN: state = " + JSON.stringify(this.state));
  //     })
  //     .catch(err => console.log(err));
  // };


  // createUser = query => {
  //   console.log("query = " + JSON.stringify(query));
  //   API.createUser(query)
  //     .then(res => {
  //       console.log("LOGIN: res = " + JSON.stringify(res));
  //       if (res.data.success) {
  //         //This is where you might send an email confirmation or auto-login the user
  //         console.log("in success handle");
  //         // window.location.assign('/login');
  //       } else {
  //         console.log("in failure handle");
  //         // window.location.assign('/signup');
  //       }
  //     })
  //     .catch(err => console.log(err));
  // };


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
              {/* <FontAwesomeIcon className="icon_Traits" icon="shield-alt" size="6x" /> */}
              <h3 className="product_Title mb-0">Car Financing Calculator DP</h3>
              <h5 className="product_Slogan pb-4">Track your deals and what fits your budget</h5>
            </Col>
          </Row>
          <div className="">


            {/***********************************************************************************************************/}
            <Row className="pb-0">
              <Col className="top_Box" sm={{ size: 6, offset: 3 }}>
                <h5 className="account_Labels text-left pt-2 pb-0 mb-1">Loan Details</h5>
                <p className="instructions">Enter the financing rate and term of the loan in months.</p>

                <Row className="loan_Section pb-3 ">
                  <Col className="left_Inputs" sm={{ size: 6 }}>
                    <FormGroup className="mt-1 mb-3">
                      <Label className="label_Text mb-0" for="loan_rate">Rate</Label>
                      <InputGroup size="sm">
                        <Input type="text" min="0" bsSize="sm" name="loanRate" id="loan_rate" step="1.00" className="form-control text-right" value="10" onChange={this.handleInputChange} />
                        <InputGroupAddon addonType="append">%</InputGroupAddon>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                  <Col className="right_Inputs" sm={{ size: 6 }}>
                    <FormGroup className="mt-1 mb-3">
                      <Label className="label_Text mb-0" for="loan_term">Term</Label>
                      <InputGroup size="sm">
                        <Input type="text" min="0" bsSize="sm" name="loanTerm" id="loan_term" step="1.00" className="form-control text-right" value="60" onChange={this.handleInputChange} />
                        <InputGroupAddon addonType="append">months</InputGroupAddon>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>
              </Col>
            </Row>


            {/***********************************************************************************************************/}
            <Row className="pb-0">
              <Col className="page_Box" sm={{ size: 6, offset: 3 }}>
                <h5 className="account_Labels text-left pt-2 pb-0 mb-1">Costs</h5>
                <p className="instructions">Enter the costs for the items.  Enable the switch for items to be included in financing.</p>

                <Row className="cost_Section pb-1 ">
                  <Col className="left_Switch" sm={{ size: 1 }}>
                    <FormGroup className="mt-2 mb-2 pt-4 pb-2">
                      <CustomInput className="ml-2 pr-3" type="switch" name="incDealPrice" id="include_DealPrice" checked="true" onChange={this.handleInputChange} />
                    </FormGroup>
                  </Col>
                  <Col className="left_Inputs" sm={{ size: 5 }}>
                    <FormGroup className="mt-1 mb-3">
                      <Label className="label_Text mb-0" for="deal_price">Vehicle Price</Label>
                      <InputGroup size="sm">
                        <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                        <Input type="text" min="0" bsSize="sm" name="dealPrice" id="deal_price" step="1.00" className="form-control text-right" value="10000" onChange={this.handleInputChange} />
                        <InputGroupAddon addonType="append">.00</InputGroupAddon>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                  <Col className="right_Inputs" sm={{ size: 5 }}>
                    <FormGroup className="mt-1 mb-3">
                      <Label className="label_Text mb-0" for="state_TaxRate">State Tax Rate</Label>
                      <InputGroup size="sm">
                        <Input type="text" min="0" bsSize="sm" name="stateTaxRate" id="state_TaxRate" step="1.00" className="form-control text-right" value="10" onChange={this.handleInputChange} />
                        <InputGroupAddon addonType="append">%</InputGroupAddon>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                  <Col className="right_Switch" sm={{ size: 1 }}>
                    <FormGroup className="mt-2 mb-2 pt-4 pb-2">
                      <CustomInput className="mr-2 pl-3" type="switch" name="incStateTax" id="include_StateTax" checked="true" onChange={this.handleInputChange} />
                    </FormGroup>
                  </Col>
                </Row>

                <Row className="cost_Section pb-1 ">
                  <Col className="left_Switch" sm={{ size: 1 }}>
                    <FormGroup className="mt-2 mb-2 pt-4 pb-2">
                      <CustomInput className="ml-2 pr-3" type="switch" name="incAddOn" id="include_AddOn" onChange={this.handleInputChange} />
                    </FormGroup>
                  </Col>
                  <Col className="left_Inputs" sm={{ size: 5 }}>
                    <FormGroup className="mt-1 mb-3">
                      <Label className="label_Text mb-0" for="additional_charges">Add-on Charges</Label>
                      <InputGroup size="sm">
                        <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                        <Input type="text" min="0" bsSize="sm" name="additionalCharges" id="additional_charges" step="1.00" className="form-control text-right" onChange={this.handleInputChange} />
                        <InputGroupAddon addonType="append">.00</InputGroupAddon>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                  <Col className="right_Inputs" sm={{ size: 5 }}>
                    <FormGroup className="mt-1 mb-3">
                      <Label className="label_Text mb-0" for="local_TaxRate">Local Tax Rate</Label>
                      <InputGroup size="sm">
                        <Input type="text" min="0" bsSize="sm" name="localTaxRate" id="local_TaxRate" step="1.00" className="form-control text-right" value="10" onChange={this.handleInputChange} />
                        <InputGroupAddon addonType="append">%</InputGroupAddon>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                  <Col className="right_Switch" sm={{ size: 1 }}>
                    <FormGroup className="mt-2 mb-2 pt-4 pb-2">
                      <CustomInput className="mr-2 pl-3" type="switch" name="incLocalTax" id="include_LocalTax" checked="true" onChange={this.handleInputChange} />
                    </FormGroup>
                  </Col>
                </Row>

                <Row className="cost_Section pb-1 ">
                  <Col className="left_Switch" sm={{ size: 1 }}>
                    <FormGroup className="mt-2 mb-2 pt-4 pb-2">
                      <CustomInput className="ml-2 pr-3" type="switch" name="incDealPro" id="include_DealPro" onChange={this.handleInputChange} />
                    </FormGroup>
                  </Col>
                  <Col className="left_Inputs" sm={{ size: 5 }}>
                    <FormGroup className="mt-1 mb-3">
                      <Label className="label_Text mb-0" for="dealer_processing">Dealer Processing</Label>
                      <InputGroup size="sm">
                        <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                        <Input type="text" min="0" bsSize="sm" name="dealerProcessing" id="dealer_processing" step="1.00" className="form-control text-right" onChange={this.handleInputChange} />
                        <InputGroupAddon addonType="append">.00</InputGroupAddon>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                  <Col className="right_Inputs" sm={{ size: 5 }}>
                    <FormGroup className="mt-1 mb-3">
                      <Label className="label_Text mb-0" for="title_fee">Title</Label>
                      <InputGroup size="sm">
                        <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                        <Input type="text" min="0" bsSize="sm" name="titleFee" id="title_fee" step="1.00" className="form-control text-right" onChange={this.handleInputChange} />
                        <InputGroupAddon addonType="append">.00</InputGroupAddon>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                  <Col className="right_Switch" sm={{ size: 1 }}>
                    <FormGroup className="mt-2 mb-2 pt-4 pb-2">
                      <CustomInput className="mr-2 pl-3" type="switch" name="incTitleFee" id="include_TitleFee" onChange={this.handleInputChange} />
                    </FormGroup>
                  </Col>
                </Row>

                <Row className="cost_Section pb-3 ">
                  <Col className="left_Switch" sm={{ size: 1 }}>
                    <FormGroup className="mt-2 mb-2 pt-4 pb-2">
                      <CustomInput className="ml-2 pr-3" type="switch" name="incWarranty" id="include_Warranty" onChange={this.handleInputChange} />
                    </FormGroup>
                  </Col>
                  <Col className="left_Inputs" sm={{ size: 5 }}>
                    <FormGroup className="mt-1 mb-3">
                      <Label className="label_Text mb-0" for="warranty_cost">Warranty</Label>
                      <InputGroup size="sm">
                        <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                        <Input type="text" min="0" bsSize="sm" name="warrantyCost" id="warranty_cost" step="1.00" className="form-control text-right" onChange={this.handleInputChange} />
                        <InputGroupAddon addonType="append">.00</InputGroupAddon>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                  <Col className="right_Inputs" sm={{ size: 5 }}>
                    <FormGroup className="mt-1 mb-3">
                      <Label className="label_Text mb-0" for="tag_fee">Tags</Label>
                      <InputGroup size="sm">
                        <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                        <Input type="text" min="0" bsSize="sm" name="tagFee" id="tag_fee" step="1.00" className="form-control text-right" onChange={this.handleInputChange} />
                        <InputGroupAddon addonType="append">.00</InputGroupAddon>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                  <Col className="right_Switch" sm={{ size: 1 }}>
                    <FormGroup className="mt-2 mb-2 pt-4 pb-2">
                      <CustomInput className="mr-2 pl-3" type="switch" name="incTagFee" id="include_TagFee" onChange={this.handleInputChange} />
                    </FormGroup>
                  </Col>
                </Row>
              </Col>
            </Row>


            {/***********************************************************************************************************/}
            <Row className="pb-0">
              <Col className="page_Box" sm={{ size: 6, offset: 3 }}>
                <h5 className="account_Labels text-left pt-2 pb-0 mb-1">Offsets</h5>
                <p className="instructions">Enter the dollar amount for each credit.  Enable the switch for items to be included in financing.</p>

                <Row className="offset_Section pb-1 ">
                  <Col className="left_Inputs" sm={{ size: 6 }}>
                    <FormGroup className="mt-1 mb-3">
                      <Label className="label_Text mb-0" for="trade_in">Trade-In</Label>
                      <InputGroup size="sm">
                        <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                        <Input type="text" min="0" bsSize="sm" name="tradeIn" id="trade_in" step="1.00" className="form-control text-right" onChange={this.handleInputChange} />
                        <InputGroupAddon addonType="append">.00</InputGroupAddon>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                  <Col className="right_Inputs" sm={{ size: 6 }}>
                    <FormGroup className="mt-1 mb-3">
                      <Label className="label_Text mb-0" for="down_payment">Down Payment</Label>
                      <InputGroup size="sm">
                        <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                        <Input type="text" min="0" bsSize="sm" name="downPayment" id="down_payment" step="1.00" className="form-control text-right" onChange={this.handleInputChange} />
                        <InputGroupAddon addonType="append">.00</InputGroupAddon>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>

                <Row className="offset_Section pb-3 ">
                  <Col className="left_Inputs" sm={{ size: 6 }}>
                    <FormGroup className="mt-1 mb-3">
                      <Label className="label_Text mb-0" for="rebates">Rebates</Label>
                      <InputGroup size="sm">
                        <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                        <Input type="text" min="0" bsSize="sm" name="rebates" id="rebates" step="1.00" className="form-control text-right" onChange={this.handleInputChange} />
                        <InputGroupAddon addonType="append">.00</InputGroupAddon>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                  <Col className="right_Inputs" sm={{ size: 6 }}>
                    <FormGroup className="mt-1 mb-3">
                      <Label className="label_Text mb-0" for="discounts">Discounts</Label>
                      <InputGroup size="sm">
                        <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                        <Input type="text" min="0" bsSize="sm" name="discounts" id="discounts" step="1.00" className="form-control text-right" onChange={this.handleInputChange} />
                        <InputGroupAddon addonType="append">.00</InputGroupAddon>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row className="pb-0">
              <Col className="bottom_Box" sm={{ size: 6, offset: 3 }}>
                <div className="text-center">
                  <Button className="access_Button mt-3 mb-4" onClick={this.handleCalculate} >Calculate</Button>
                </div>
              </Col>
            </Row>

          </div>



          <p className="copyright text-center mt-1 mb-3">Copyright © 2019 - Steven M. Carpenter</p>
        </Container>
      </div >
    );
  };
};

export default DealForm;