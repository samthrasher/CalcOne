import { connect } from 'react-redux';
import LoginForm from './login_form';
import {signUp, login} from '../../actions/auth_actions';

const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors,
});

const mapDispatchToProps = dispatch => ({
  signUp: user => dispatch(signUp(user)),
  login: user => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
