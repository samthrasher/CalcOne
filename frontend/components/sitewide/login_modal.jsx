import React from 'react';
import Modal from 'react-modal';
import LoginFormContainer from './login_form_container';

class LoginModal extends React.Component {
  constructor (props) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount () {
    Modal.setAppElement('body');
  }

  openModal () { this.props.openModal(); }
  closeModal () { this.props.closeModal(); }

  render() {
    return <div>
      <button onClick={this.openModal}>Open</button>
      <Modal isOpen={this.props.loginModalIsOpen}
        className="login-form"
        overlayClassName="modal-overlay"
        >
        <button onClick={this.closeModal} className="close-button">
          <span className="icon-box">
            <i className="material-icons">close</i>
          </span>
        </button>

        <LoginFormContainer/>
      </Modal>
    </div>;
  }
}

export default LoginModal;
