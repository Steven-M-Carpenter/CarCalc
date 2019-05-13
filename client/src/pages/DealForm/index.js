import ReactGA from 'react-ga';
import React, { Component } from 'react';
import API from "../../utils/API";
import './style.css';
import { Button, Container, Row, Col, Modal } from 'reactstrap';
import numeral from 'numeral';
import { LoanTerms, Costs, Offsets } from "../../components/FormSections";
import { ResultsDisplay } from '../../components/DealResults';
import { TopFill, Banner } from "../../components/ScreenItems";
import { SaveModal, LoadModal } from "../../components/Modals";

ReactGA.initialize('UA-139996715-1');
ReactGA.pageview('/');
ReactGA.pageview('/auth/deal');
class DealForm extends Component {
  state = {
    deals: [],
    allValues: true,
    loanRate: 5.9,
    loanTerm: 60,
    dealPrice: 25000,
    stateTaxRate: 4.15,
    localTaxRate: 0,
    additionalCharges: 0,
    dealerProcessing: 199,
    titleFee: 75.00,
    warrantyCost: 0,
    tagFee: 47.50,
    tradeIn: 0,
    downPayment: 0,
    rebates: 0,
    discounts: 0,
    incDealPrice: true,
    incStateTax: true,
    incAddOn: true,
    incLocalTax: true,
    incDealPro: true,
    incTitleFee: true,
    incWarranty: true,
    incTagFee: true,
  };

  componentDidMount = () => {
    let authEmail = window.sessionStorage.getItem("auth-email");
    let readToken = window.sessionStorage.getItem("CFC_authkey");
    let query = {
      token: readToken
    };
    API.checkAuth(query)
      .then(res => {
        if (res.data.success) {
          this.setState({ isLoggedIn: true, email: authEmail });
        } else {
          this.setState({ isLoggedIn: false });
          window.location.assign('/');
        };
      })
      .catch(err => console.log(err));
  };

  computePayment = () => {
    // Formula = A = P * (r(1+r)n)/((1+r)n-1)
    // A = the monthly payment.
    // P = the principal
    // r = the interest rate per month, which equals the annual interest rate divided by 12
    // n = the total number of months
    ReactGA.event({
      category: 'Deal',
      action: 'Calculated Payment'
    });

    let AmountFinanced = 0;
    let TotalCredits = 0;
//    console.log("State = " + JSON.stringify(this.state));

    AmountFinanced = (this.state.incDealPrice ? (AmountFinanced + parseFloat(this.state.dealPrice)) : (AmountFinanced + 0));
    AmountFinanced = (this.state.incStateTax ? (AmountFinanced + ((parseFloat(this.state.stateTaxRate) / 100) * parseFloat(this.state.dealPrice))) : (AmountFinanced + 0));
    AmountFinanced = (this.state.incAddOn ? (AmountFinanced + parseFloat(this.state.additionalCharges)) : (AmountFinanced + 0));
    AmountFinanced = (this.state.incLocalTax ? (AmountFinanced + ((parseFloat(this.state.localTaxRate) / 100) * parseFloat(this.state.dealPrice))) : (AmountFinanced + 0));
    AmountFinanced = (this.state.incDealPro ? (AmountFinanced + parseFloat(this.state.dealerProcessing)) : (AmountFinanced + 0));
    AmountFinanced = (this.state.incTitleFee ? (AmountFinanced + parseFloat(this.state.titleFee)) : (AmountFinanced + 0));
    AmountFinanced = (this.state.incWarranty ? (AmountFinanced + parseFloat(this.state.warrantyCost)) : (AmountFinanced + 0));
    AmountFinanced = (this.state.incTagFee ? (AmountFinanced + parseFloat(this.state.tagFee)) : (AmountFinanced + 0));
    TotalCredits = parseFloat(this.state.tradeIn) + parseFloat(this.state.downPayment) + parseFloat(this.state.rebates) + parseFloat(this.state.discounts)
    AmountFinanced = AmountFinanced - TotalCredits;

    let term = (parseFloat(this.state.loanTerm));
//    console.log("Term = " + term);
    let rate = (parseFloat(this.state.loanRate) / 100);
//    console.log("Rate = " + rate);
    let monthlyPayment = 0;
    if (rate !== 0) {
      let rateMonthly = (parseFloat((rate) / 12));
//      console.log("RateMonthly = " + rateMonthly);
//      console.log("AmtFin = " + AmountFinanced);
//      console.log("rateMonthly = " + rateMonthly);
//      console.log("term = " + term);
//      console.log("Formula = " + AmountFinanced + " * (" + rateMonthly + " (1 + " + rateMonthly + ") ** " + term + ") / ((1 + " + rateMonthly + ") ** " + term + " - 1)");
      monthlyPayment = AmountFinanced * (rateMonthly * (1 + rateMonthly) ** term) / ((1 + rateMonthly) ** term - 1);
      let totalPrice = (monthlyPayment * term);
      let totalInterest = (totalPrice - AmountFinanced);
//      console.log("totalInterest = " + totalInterest);
      this.setState({
        financeAmount: numeral(AmountFinanced).format("$0,0.00"),
        financePrice: numeral(totalPrice).format("$0,0.00"),
        financeInterest: numeral(totalInterest).format("$0,0.00"),
        financePayment: numeral(monthlyPayment).format("$0,0.00"),
        financeResult: true
      });
    }
    else {
//      console.log("AmtFin = " + AmountFinanced);
//      console.log("term = " + term);
//      console.log("Formula = " + AmountFinanced + " / " + term);
      monthlyPayment = AmountFinanced / term;
      let totalPrice = (monthlyPayment * term);
      let totalInterest = (totalPrice - AmountFinanced);
//      console.log("totalInterest = " + totalInterest);
      this.setState({
        financeAmount: numeral(AmountFinanced).format("$0,0.00"),
        financePrice: numeral(totalPrice).format("$0,0.00"),
        financeInterest: numeral(totalInterest).format("$0,0.00"),
        financePayment: numeral(monthlyPayment).format("$0,0.00"),
        financeResult: true
      });
    }
    return monthlyPayment.toFixed(2);
  };

  handleBlur = event => {
    const value = event.target.value;
    const name = event.target.name;
    ReactGA.event({
      category: 'Deal Input',
      action: 'Set ' + [name] + ' to ' + value
    });
  };  

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    // ReactGA.event({
    //   category: 'Deal Input',
    //   action: 'Set ' + [name] + ' to ' + value
    // });
    this.setState({
      [name]: value
    });
//    console.log("name = " + name);
//    console.log("value = " + value);
  };


//**********************************************************************/
//Process checkboxes to include various cost inputs
//**********************************************************************/
  handleCheckBoxChange = (event) => {
    const { name, checked } = event.target;
    ReactGA.event({
      category: 'Deal Input',
      action: 'Changed ' + [name] + ' to ' + checked
    });
    this.setState({
      [name]: checked
    });
  };

  handleSaveModalToggle = event => {
    ReactGA.event({
      category: 'Deal',
      action: 'Save Modal Launched'
    });
    ReactGA.modalview('/auth/deal/save-modal');
    this.setState({
      saveDealModal: !this.state.saveDealModal
    });
  };

  handleLoadModalToggle = event => {
    ReactGA.event({
      category: 'Deal',
      action: 'Load Modal Launched'
    });
    ReactGA.modalview('/auth/deal/load-modal');
    this.setState({
      loadDealModal: !this.state.loadDealModal
    });
  };

  handleClearFields = event => {
    event.preventDefault();
    ReactGA.event({
      category: 'Deal',
      action: 'Cleared Fields'
    });

//    console.log("Clearing Fields");
    this.setState({
      loanRate: 5.9,
      loanTerm: 60,
      dealPrice: 10000,
      stateTaxRate: 4.15,
      localTaxRate: 0,
      additionalCharges: 0,
      dealerProcessing: 0,
      titleFee: 75.00,
      warrantyCost: 0,
      tagFee: 47.50,
      tradeIn: 0,
      downPayment: 0,
      rebates: 0,
      discounts: 0,
      incDealPrice: true,
      incStateTax: true,
      incAddOn: true,
      incLocalTax: true,
      incDealPro: true,
      incTitleFee: true,
      incWarranty: true,
      incTagFee: true,
      financeAmount: 0,
      financePrice: 0,
      financeInterest: 0,
      financePayment: 0,
      financeResult: 0,
      email: this.state.email,
      isDeleted: false,
      dealName: "",
      dealer: "",
      vehicle: "",
      stkOrVIN: "",
      description: ""
    })
  }

  handleGetMyDeals = event => {
    event.preventDefault();
//    console.log("Get clicked");
    this.getMyDeals({
      email: this.state.email
    })
  };

  handleLoadDeal = event => {
    event.preventDefault();
//    console.log("Load clicked");
    ReactGA.event({
      category: 'Deal',
      action: 'Selected Deal to Load'
    });
    this.loadDeal(event.target.id);
  };

  handleLogoff = event => {
    event.preventDefault();
//    console.log("Logoff clicked");
    window.location.assign('/logout');
  };

  handleNewDeal = event => {
    event.preventDefault();
//    console.log("Save clicked");
    ReactGA.event({
      category: 'Deal',
      action: 'Record Saved'
    });
    this.saveDeal({
      loanRate: this.state.loanRate,
      loanTerm: this.state.loanTerm,
      dealPrice: this.state.dealPrice,
      stateTaxRate: this.state.stateTaxRate,
      localTaxRate: this.state.localTaxRate,
      additionalCharges: this.state.additionalCharges,
      dealerProcessing: this.state.dealerProcessing,
      titleFee: this.state.titleFee,
      warrantyCost: this.state.warrantyCost,
      tagFee: this.state.tagFee,
      tradeIn: this.state.tradeIn,
      downPayment: this.state.downPayment,
      rebates: this.state.rebates,
      discounts: this.state.discounts,
      incDealPrice: this.state.incDealPrice,
      incStateTax: this.state.incStateTax,
      incAddOn: this.state.incAddOn,
      incLocalTax: this.state.incLocalTax,
      incDealPro: this.state.incDealPro,
      incTitleFee: this.state.incTitleFee,
      incWarranty: this.state.incWarranty,
      incTagFee: this.state.incTagFee,
      financeAmount: this.state.financeAmount,
      financePrice: this.state.financePrice,
      financeInterest: this.state.financeInterest,
      financePayment: this.state.financePayment,
      financeResult: this.state.financeResult,
      email: this.state.email,
      isDeleted: false,
      dealName: this.state.dealName,
      dealer: this.state.dealer,
      vehicle: this.state.vehicle,
      stkOrVIN: this.state.stkOrVIN,
      description: this.state.description
    });
  };

  saveDeal = query => {
//    console.log("query = " + JSON.stringify(query));
    API.saveDeal(query)
      .then(res => {
//        console.log("Save: res = " + JSON.stringify(res));
        if (res.data.success) {
//          console.log("in success handle");
          this.handleSaveModalToggle();
        } else {
          console.log("An error occurred on the save attempt.  Try again.");
        }
      })
      .catch(err => console.log(err));
  };

  getMyDeals = query => {
//    console.log("query = " + JSON.stringify(query));
    API.getMyDeals(this.state.email)
      .then(res => this.setState({ deals: res.data }))
      .catch(err => console.log(err));
    this.handleLoadModalToggle();
  };


  loadDeal = query => {
//    console.log("in loadDeal.............")
//    console.log("query = " + JSON.stringify(query));
    API.loadDeal(query)
      .then(res => {
//        console.log("res.data = " + JSON.stringify(res.data));
        this.setState({ ...res.data })
      })
      .catch(err => console.log(err));
    this.handleLoadModalToggle();
  };


  /*************************************************************************************************************************/
  /*************************************************************************************************************************/
  /*************************************************************************************************************************/
  render() {
    return (

      <div className="whole_Form">
        <TopFill />

        <Modal className="saveDeal_Modal" isOpen={this.state.saveDealModal} toggle={this.saveDealModalToggle}>
          <SaveModal
            change={this.handleInputChange}
            save={this.handleNewDeal}
            toggle={this.handleSaveModalToggle} />
        </Modal>

        <Modal className="loadDeal_Modal" isOpen={this.state.loadDealModal} toggle={this.loadDealModalToggle}>
          <LoadModal
            deals={this.state.deals}
            loadDeal={this.handleLoadDeal}
            toggle={this.handleLoadModalToggle} />
        </Modal>

{/************************************************************************************************************************/}
        <Container className="welcome_Box">
          <Banner />

          <div className="mainForm pb-4">

            {/***********************************************************************************************************/}
            <LoanTerms
              valRate={this.state.loanRate}
              valTerm={this.state.loanTerm}
              change={this.handleInputChange}
              getDeals={this.handleGetMyDeals}
              clearFields={this.handleClearFields}
              logoffCommand={this.handleLogoff}
              blur={this.handleBlur}
            />

            {/***********************************************************************************************************/}
            <Costs
              valDealPrice={this.state.dealPrice}
              valStateTax={this.state.stateTaxRate}
              valAddCharges={this.state.additionalCharges}
              valLocalTax={this.state.localTaxRate}
              valDealerPro={this.state.dealerProcessing}
              valTitleFee={this.state.titleFee}
              valWarranty={this.state.warrantyCost}
              valTagFee={this.state.tagFee}
              incAddOn={this.state.incAddOn}
              incDealPrice={this.state.incDealPrice}
              incDealPro={this.state.incDealPro}
              incLocalTax={this.state.incLocalTax}
              incStateTax={this.state.incStateTax}
              incTagFee={this.state.incTagFee}
              incTitleFee={this.state.incTitleFee}
              incWarranty={this.state.incWarranty}
              toggleChk={this.handleCheckBoxChange}
              change={this.handleInputChange}
              blur={this.handleBlur}
            />

            {/***********************************************************************************************************/}
            <Offsets
              valTradeIn={this.state.tradeIn}
              valDownPymt={this.state.downPayment}
              valRebates={this.state.rebates}
              valDiscounts={this.state.discounts}
              change={this.handleInputChange}
              blur={this.handleBlur}
            />

            {/***********************************************************************************************************/}
            <Row className="pb-0">
              <Col className="bottom_Box text-center" xs={{ size: 10, offset: 1 }} sm={{ size: 10, offset: 1 }} md={{ size: 8, offset: 2 }} lg={{ size: 6, offset: 3 }}>
                <div className="text-center">
                  <Button className="access_Button mt-2 mb-3" onClick={this.computePayment} >Calculate</Button>
                </div>
              </Col>
            </Row>

          </div>

          {this.state.financeResult ? (
            <ResultsDisplay
              financeAmount={this.state.financeAmount}
              financeInterest={this.state.financeInterest}
              financePrice={this.state.financePrice}
              financePayment={this.state.financePayment}
              onSave={this.handleSaveModalToggle} />
          ) : (
              <div></div>
            )}
        </Container>
      </div >
    );
  };
};

export default DealForm;