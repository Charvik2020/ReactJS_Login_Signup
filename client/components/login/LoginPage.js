import React from 'react';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { userLoginRequest } from '../../actions/LoginActions';

class SignupPage extends React.Component {
  render() {
	  const { userSignupRequest } = this.props;
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <LoginForm userLoginRequest={userLoginRequest} />
        </div>
      </div>
    );
  }
}


SignupPage.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired
}


export default connect(null, { userLoginRequest })(LoginPage);