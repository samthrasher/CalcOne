import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/login_modal_actions';
import LoginModal from './login_modal';

const mapStateToProps = state => ({
  loginModalIsOpen: state.applicationState.loginModalIsOpen
});

const mapDispatchToProps = dispatch => ({
  openModal: () => dispatch(openModal()),
  closeModal: () => dispatch(closeModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginModal);
