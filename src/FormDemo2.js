import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import alertify from "alertifyjs";

class FormDemo2 extends Component {
  state = { email: "", password: "", city: "", description: "" };
  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    alertify.success( " added to db!");


  };
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="email"> Email </Label>

            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password"> Password </Label>

            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              onChange={this.handleChange}
            />
            <FormGroup>
              <Label for="description"> Description</Label>

              <Input
                type="textarea"
                name="description"
                id="description"
                placeholder="Enter description"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="city"> City</Label>
              <Input
                type="select"
                name="city"
                id="city"
                onChange={this.handleChange}
              >
                  <option>Şehir Seçin..</option>
              <option>İstanbul</option>
              <option>Ankara</option>
              <option>İzmir</option>
              <option>Antalya</option>
              <option>Isparta</option>
              </Input>
              </FormGroup>
              </FormGroup>
              <Button type ="submit">Save</Button>
        </Form>
      </div>
    );
  }
}

export default FormDemo2;
