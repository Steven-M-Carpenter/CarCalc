import React from "react";
import './style.css';
import { FormGroup, Label, Input, InputGroup, InputGroupAddon, CustomInput } from 'reactstrap';


export function InputRate(props) {
  return (
    <FormGroup className="mt-0 mb-0">
      <Label className="label_Text mb-0" for={props.for}>{props.label}</Label>
      <InputGroup size="sm">
        <Input type="number" min="0" bsSize="sm" name={props.name} id={props.id} step={props.step} className="form-control text-right" value={props.value} onChange={props.onChange} onBlur={props.onBlur}/>
        <InputGroupAddon addonType="append">%</InputGroupAddon>
      </InputGroup>
    </FormGroup>
  );
}


export function InputDollars(props) {
  return (
    <FormGroup className="mt-0 mb-0">
      <Label className="label_Text mb-0" for={props.for}>{props.label}</Label>
      <InputGroup size="sm">
        <InputGroupAddon addonType="prepend">$</InputGroupAddon>
        <Input type="number" min="0" bsSize="sm" name={props.name} id={props.id} step={props.step} className="form-control text-right" value={props.value} onChange={props.onChange} onBlur={props.onBlur}/>
        {/* <InputGroupAddon addonType="append">.00</InputGroupAddon> */}
      </InputGroup>
    </FormGroup>
  );
}


export function SwitchLeft(props) {
  return (
    <FormGroup className="mt-1 mb-2 pt-4 pb-2">
      <CustomInput className="swLeft ml-2 pr-3" type="switch" name={props.name} id={props.id} checked={props.checked} onChange={props.onChange} />
    </FormGroup>
  );
}


export function SwitchRight(props) {
  return (
    <FormGroup className="mt-1 mb-2 pt-4 pb-2">
      <CustomInput className="swRight mr-2 pl-3" type="switch" name={props.name} id={props.id} checked={props.checked} onChange={props.onChange} />
    </FormGroup>
  );
}
