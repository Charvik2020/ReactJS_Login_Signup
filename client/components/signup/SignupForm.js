import React from 'react';
import map from 'lodash/map';
import classnames from 'classnames';
import styles from '../../index';
import {Link} from 'react-router';
import { browserHistory } from 'react-router';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
	    phonenumber: '',
      password: '',

      isFnameError: false,
      isLnameError: false,
      isEmailError: false,
      isPnoError: false,
      isPpassError: false,
      isCpassError: false,

      passwordConfirmation: '',
      errors: {},
      isLoading: false,
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
	  
    e.preventDefault();
    console.log("here");
    console.log(this.state);
    
    if(this.state.firstname == "")
    {
      
      this.setState({isFnameError: true});
    }

    else if (this.state.lastname == "") {
      
      this.setState({ isLnameError: true });
    }

    else if (this.state.email == "") {

      this.setState({ isEmailError: true });
    }

    else if (this.state.phonenumber == "") {

      this.setState({ isPnoError: true });
    }

    else if (this.state.password == "") {

      this.setState({ isPpassError: true });
    }

    else if (this.state.passwordConfirmation == "") {

      this.setState({ isCpassError: true });
    }
    else {
      browserHistory.push('/login');

    }



	this.setState({ errors: {},isLoading: true });
	// , isLoading: true
    this.props.userSignupRequest(this.state).then(
      () => {},
      ({ data }) => this.setState({ errors: data , isLoading: false})
	//, isLoading: false
  
	 );
  }



  render() {

    var style = {
      color: 'red',
    };

	const { errors } = this.state;
  return (
      <form onSubmit={this.onSubmit}>
        <h1>Join our community!</h1>

          <div className={`form-group`} style={this.state.isFnameError ? style : null}>
          <label className="control-label">
              First Name
          </label>
          <input
            value={this.state.firstname}
            onChange={this.onChange}
            type="text"
            name="firstname"
            className="form-control"
            placeholder={this.state.isFnameError ? "Required" : null}
          />
		  {errors.firstname && <span className="help-block">{errors.firstname}</span>}
        </div>

          <div className={`form-group`} style={this.state.isLnameError ? style : null}>    
          <label className="control-label">Last Name</label>
          <input
            value={this.state.lastname}
            onChange={this.onChange}
            type="text"
            name="lastname"
            className="form-control"
            placeholder={this.state.isLnameError ? "Required" : null}
          />
		  {errors.lastname && <span className="help-block">{errors.lastname}</span>}
        </div>

      <div className={`form-group`} style={this.state.email ? style : null}>
          <label className="control-label">Email</label>
          <input
            onChange={this.onChange}
            value={this.state.email}
            type="text"
            name="email"
            className="form-control"
            placeholder={this.state.isEmailError ? "Required" : null}
          />
       
{errors.email && <span className="help-block">{errors.email}</span>}
	   </div>

      <div className={`form-group`} style={this.state.isPnoError ? style : null}>
          <label className="control-label">Phone Number</label>
          <input
            value={this.state.phonenumber}
            onChange={this.onChange}
            type="number"
            name="phonenumber"
            className="form-control"
            placeholder={this.state.isPnoError ? "Required" : null}
          />
		  {errors.phonenumber && <span className="help-block">{errors.phonenumber}</span>}
        </div>
		
        
      <div className={`form-group`} style={this.state.isPpassError ? style : null}>
        		<label className="control-label">Password</label>
          <input
            onChange={this.onChange}
            value={this.state.password}
            type="password"
            name="password"
            className="form-control"
            placeholder={this.state.isPpassError ? "Required" : null}
          />
		  {errors.password && <span className="help-block">{errors.password}</span>}
        </div>

      <div className={`form-group`} style={this.state.isCpassError ? style : null}>     
     <label className="control-label">Password Confirmation</label>
          <input
            onChange={this.onChange}
            value={this.state.passwordConfirmation}
            type="password"
            name="passwordConfirmation"
            className="form-control"
            placeholder={this.state.isCpassError ? "Required" : null}
          />
		   {errors.passwordConfirmation && <span className="help-block">{errors.passwordConfirmation}</span>}
        </div>


        <div className="form-group">
           <button onClick={this.onSubmit} className="btn btn-primary btn-lg">
            <span>
            <Link to="/login">
            </Link>
            Sign up
            </span>
          </button>
        </div>
      </form>
    );
  }
}

SignupForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired
}


export default SignupForm;
