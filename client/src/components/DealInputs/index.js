import React from "react";
import './style.css';
import { Button, Container, Row, Col, Form, FormGroup, Label, Input, InputGroup, InputGroupAddon, CustomInput } from 'reactstrap';
// import { Button, Container, Row, Col, Form, FormGroup, Label, Input, InputGroup, InputGroupAddon, CustomInput } from 'reactstrap';

// This file exports the Input, TextArea, and FormBtn components

export function InputRate(props) {
  return (
    <FormGroup className="mt-1 mb-3">
      <Label className="label_Text mb-0" for={props.for}>{props.label}</Label>
      <InputGroup size="sm">
        <Input type="text" min="0" bsSize="sm" name={props.name} id={props.id} step={props.step} className="form-control text-right" value={props.value} onChange={props.onChange} />
        <InputGroupAddon addonType="append">%</InputGroupAddon>
      </InputGroup>
    </FormGroup>
  );
}


export function InputDollars(props) {
  return (
    <FormGroup className="mt-1 mb-3">
      <Label className="label_Text mb-0" for={props.for}>{props.label}</Label>
      <InputGroup size="sm">
        <InputGroupAddon addonType="prepend">$</InputGroupAddon>
        <Input type="text" min="0" bsSize="sm" name={props.name} id={props.id} step={props.step} className="form-control text-right" value={props.value} onChange={props.onChange} />
        {/* <InputGroupAddon addonType="append">.00</InputGroupAddon> */}
      </InputGroup>
    </FormGroup>
  );
}


export function SwitchLeft(props) {
  return (
    <FormGroup className="mt-2 mb-2 pt-4 pb-2">
      <CustomInput className="ml-2 pr-3" type="switch" name={props.name} id={props.id} checked={props.checked} onChange={props.onChange} />
    </FormGroup>
  );
}


export function SwitchRight(props) {
  return (
    <FormGroup className="mt-2 mb-2 pt-4 pb-2">
      <CustomInput className="mr-2 pl-3" type="switch" name={props.name} id={props.id} checked={props.checked} onChange={props.onChange} />
    </FormGroup>
  );
}


// export function LoanTerms(props) {
//   return (
//     <Row className="pb-0">
//       <Col className="top_Box" sm={{ size: 6, offset: 3 }}>
//         <h5 className="account_Labels text-left pt-2 pb-0 mb-1">Loan Details</h5>
//         <p className="instructions">Enter the financing rate and term of the loan in months.</p>

//         <Row className="loan_Section pb-3 ">
//           <Col className="left_Inputs" sm={{ size: 6 }}>
//             <InputRate
//               for="loan_rate"
//               label="Rate"
//               name="loanRate"
//               id="loan_rate"
//               step="1.00"
//               value={props.loanRate}
//               onChange={props.handleInputChange} />
//           </Col>
//           <Col className="right_Inputs" sm={{ size: 6 }}>
//             <FormGroup className="mt-1 mb-3">
//               <Label className="label_Text mb-0" for="loan_term">Term</Label>
//               <InputGroup size="sm">
//                 <Input type="text" min="0" bsSize="sm" name="loanTerm" id="loan_term" step="1.00" className="form-control text-right" value={props.loanTerm} onChange={props.handleInputChange} />
//                 <InputGroupAddon addonType="append">months</InputGroupAddon>
//               </InputGroup>
//             </FormGroup>
//           </Col>
//         </Row>
//       </Col>
//     </Row>
//   );
// }

// export function Costs(props) {
//   return (
//     <Row className="pb-0">
//       <Col className="page_Box" sm={{ size: 6, offset: 3 }}>
//         <h5 className="account_Labels text-left pt-2 pb-0 mb-1">Costs</h5>
//         <p className="instructions">Enter the costs for the items.  Set the switch to on for items to be included in financing.</p>

//         <Row className="cost_Section pb-1 ">
//           <Col className="left_Switch" sm={{ size: 1 }}>
//             <SwitchLeft
//               name="incDealPrice"
//               id="include_DealPrice"
//               checked="true"
//               onChange={props.handleInputChange} />
//           </Col>
//           <Col className="left_Inputs" sm={{ size: 5 }}>
//             <InputDollars
//               for="deal_price"
//               label="Vehicle Price"
//               name="dealPrice"
//               id="deal_price"
//               step="1.00"
//               value={props.valDealPrice}
//               onChange={props.handleInputChange} />
//           </Col>
//           <Col className="right_Inputs" sm={{ size: 5 }}>
//             <InputRate
//               for="state_TaxRate"
//               label="State Tax Rate"
//               name="stateTaxRate"
//               id="state_TaxRate"
//               step="1.00"
//               value={props.valStateTax}
//               onChange={props.handleInputChange} />
//           </Col>
//           <Col className="right_Switch" sm={{ size: 1 }}>
//             <SwitchRight
//               name="incStateTax"
//               id="include_StateTax"
//               checked="true"
//               onChange={props.handleInputChange} />
//           </Col>
//         </Row>

//         <Row className="cost_Section pb-1 ">
//           <Col className="left_Switch" sm={{ size: 1 }}>
//             <SwitchLeft
//               name="incAddOn"
//               id="include_AddOn"
//               checked="false"
//               onChange={props.handleInputChange} />
//           </Col>
//           <Col className="left_Inputs" sm={{ size: 5 }}>
//             <InputDollars
//               for="additional_charges"
//               label="Add-on Charges"
//               name="additionalCharges"
//               id="additional_charges"
//               step="1.00"
//               value={props.valAddCharges}
//               onChange={props.handleInputChange} />
//           </Col>
//           <Col className="right_Inputs" sm={{ size: 5 }}>
//             <InputRate
//               for="local_TaxRate"
//               label="Local Tax Rate"
//               name="localTaxRate"
//               id="local_TaxRate"
//               step="1.00"
//               value={props.valLocalTax}
//               onChange={props.handleInputChange} />
//           </Col>
//           <Col className="right_Switch" sm={{ size: 1 }}>
//             <SwitchRight
//               name="incLocalTax"
//               id="include_LocalTax"
//               checked="true"
//               onChange={props.handleInputChange} />
//           </Col>
//         </Row>

//         <Row className="cost_Section pb-1 ">
//           <Col className="left_Switch" sm={{ size: 1 }}>
//             <SwitchLeft
//               name="incDealPro"
//               id="include_DealPro"
//               checked="false"
//               onChange={props.handleInputChange} />
//           </Col>
//           <Col className="left_Inputs" sm={{ size: 5 }}>
//             <InputDollars
//               for="dealer_processing"
//               label="Dealer Processing"
//               name="dealerProcessing"
//               id="dealer_processing"
//               step="1.00"
//               value={props.valDealerPro}
//               onChange={props.handleInputChange} />
//           </Col>
//           <Col className="right_Inputs" sm={{ size: 5 }}>
//             <InputDollars
//               for="title_fee"
//               label="Title"
//               name="titleFee"
//               id="title_fee"
//               step="1.00"
//               value={props.valTitleFee}
//               onChange={props.handleInputChange} />
//           </Col>
//           <Col className="right_Switch" sm={{ size: 1 }}>
//             <SwitchRight
//               name="incTitleFee"
//               id="include_TitleFee"
//               checked="false"
//               onChange={props.handleInputChange} />
//           </Col>
//         </Row>

//         <Row className="cost_Section pb-3 ">
//           <Col className="left_Switch" sm={{ size: 1 }}>
//             <SwitchLeft
//               name="incWarranty"
//               id="include_Warranty"
//               checked="false"
//               onChange={props.handleInputChange} />
//           </Col>
//           <Col className="left_Inputs" sm={{ size: 5 }}>
//             <InputDollars
//               for="warranty_cost"
//               label="Warranty"
//               name="warrantyCost"
//               id="warranty_cost"
//               step="1.00"
//               value={props.valWarranty}
//               onChange={props.handleInputChange} />
//           </Col>
//           <Col className="right_Inputs" sm={{ size: 5 }}>
//             <InputDollars
//               for="tag_fee"
//               label="Tags"
//               name="tagFee"
//               id="tag_fee"
//               step="1.00"
//               value={props.valTagFee}
//               onChange={props.handleInputChange} />
//           </Col>
//           <Col className="right_Switch" sm={{ size: 1 }}>
//             <SwitchRight
//               name="incTagFee"
//               id="include_TagFee"
//               checked="false"
//               onChange={props.handleInputChange} />
//           </Col>
//         </Row>
//       </Col>
//     </Row>
//   );
// }



