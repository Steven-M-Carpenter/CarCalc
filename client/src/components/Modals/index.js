import React from "react";
import './style.css';
import { Button, Form, FormGroup, Label, ModalBody, ModalFooter, ModalHeader, Input } from 'reactstrap';


export function SaveModal(props) {
  return (
    <div>
      <ModalHeader className="saveDeal_MHeader pt-1 pb-2">Save This Deal</ModalHeader>
      <ModalBody className="saveDeal_MBody pt-1 pb-1">
        <Form className="saveDeal_MForm">
          <FormGroup className="mt-2">
            <Label className="label_Text mb-0" for="deal_Name">Name this deal</Label>
            <Input className="input_block" type="text" name="dealName" id="deal_Name" bsSize="sm" placeholder="Name" onChange={props.change} />
            <Label className="label_Text mb-0 mt-3" for="dealer">Which dealer</Label>
            <Input className="input_block" type="text" name="dealer" id="dealer" bsSize="sm" placeholder="Dealership Name" onChange={props.change} />
            <Label className="label_Text mb-0 mt-3" for="vehicle">Vehicle Make/Model/Trim</Label>
            <Input className="input_block" type="text" name="vehicle" id="vehicle" bsSize="sm" placeholder="Vehicle Make, Model, and Trim" onChange={props.change} />
            <Label className="label_Text mb-0 mt-3" for="stkOrVIN">Vehicle VIN or Stock Number</Label>
            <Input className="input_block" type="text" name="stkOrVIN" id="stkOrVIN" bsSize="sm" placeholder="Add a name" onChange={props.change} />
            <Label className="label_Text mb-0 mt-3" mt-3 for="description">Description</Label>
            <Input className="input_block" type="textarea" name="description" id="description" bsSize="sm" placeholder="Add a name" onChange={props.change} />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter className="saveDeal_MFooter text-center">
        <Button className="process_Button mt-0 mb-0" onClick={props.save} >Save</Button>
        <Button className="process_Button mt-0 mb-0" onClick={props.toggle} >Cancel</Button>
      </ModalFooter>
    </div>
  );
};


export function LoadModal(props) {
  return (
    <div>
      <ModalHeader className="loadDeal_MHeader  pt-1 pb-2">Load A Deal</ModalHeader>
      <ModalBody className="loadDeal_MBody pt-1 pb-1">
        {props.deals.length ? (
          <List>
            {props.deals.map(deal => (
              <ListItem key={deal._id}>
                <td><Button size="sm" className="load_Button mt-1 mb-1 mr-2" id={deal._id} onClick={props.loadDeal} >Load</Button></td>
                <td className="load_Deal no-border">{deal.dealName} </td>
              </ListItem>
            ))}
          </List>
        ) : (
            <h5>No Results to Display</h5>
          )}
      </ModalBody>
      <ModalFooter className="loadDeal_MFooter text-center">
        <Button className="process_Button mt-0 mb-0" onClick={props.toggle} >Cancel</Button>
      </ModalFooter>
    </div>
  );
};

export function List({ children }) {
  return (
    <table className="list-overflow-container">
      <tbody className="list-group">{children}</tbody>
    </table>
  );
};

export function ListItem({ children }) {
  return <tr className="list-group-item">{children}</tr>;
};