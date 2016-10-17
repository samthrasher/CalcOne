import React, { PropTypes } from 'react';
import {withRouter} from 'react-router';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    const customMethodNames = ["update", "login", "signUp"];
    customMethodNames.forEach(f => {this[f] = this[f].bind(this);});
  }

  update(e) {
    e.preventDefault();
    this.setState({[e.currentTarget.dataset.field]: e.currentTarget.value});
  }

  login(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  signUp(e) {
    e.preventDefault();
    this.props.signUp(this.state);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.router.push("/");
    }
  }

  render () {
    const errors = this.props.errors.map((err, i) => <li key={i}>{err}</li>);

    return (
      <section className="login-form-container">
        <form className="login-form" onSubmit={this.login}>

          <label htmlFor="login-form-username"> Email </label>
          <input
            data-field="email"
            value={this.state.email}
            id="login-form-email"
            onChange={this.update}
            placeholder="Email"
          />

        <label htmlFor="login-form-password"> Password </label>
          <input
            type="password"
            data-field="password"
            value={this.state.password}
            id="login-form-password"
            onChange={this.update}
            placeholder="Password"
          />

          <div className="button-container">
            <button className='login-button' onClick={this.login}>
              Log in
            </button>
            <button className='sign-up-button' onClick={this.signUp}>
              Sign up
            </button>
          </div>

          <ul className="login-form-errors">
            {errors}
          </ul>
        </form>
      </section>
    );
  }
}

export default withRouter(LoginForm);
