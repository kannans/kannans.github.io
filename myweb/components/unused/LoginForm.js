import React from 'react'
import { Form, FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap'

export default React.createClass({
  getInitialState() {
    return {
      value: ''
    };
  },

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  },

  handleChange(e) {
    this.setState({ value: e.target.value });
  },

  render() {
    return (
      <Form>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Please enter your token for authentication.</ControlLabel>
          <FormControl
            type="password"
            value={this.state.value}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>Please enter valid token.</HelpBlock>
          <Button type="submit">
           Login
         </Button>
        </FormGroup>
      </Form>
    );
  }
});
