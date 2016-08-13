import React from 'react'
import { ButtonToolbar, Button, Modal } from 'react-bootstrap'
import LoginForm from './LoginForm'

export default React.createClass({
  getInitialState() {
    return { show: false };
  },

  showModal() {
    this.setState({show: true, form: LoginForm});
  },

  hideModal() {
    this.setState({show: false, form: '' });
  },

  render() {
    return (
      <ButtonToolbar>
        <Button bsStyle="primary" onClick={this.showModal}>
          Login Here
        </Button>

        <Modal
          {...this.props}
          show={this.state.show}
          onHide={this.hideModal}
          dialogClassName="custom-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg"> WIP - Sign In</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>If your a user sign in here...</h4>
            <LoginForm />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.hideModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </ButtonToolbar>
    );
  }
});
