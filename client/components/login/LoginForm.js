import React from 'react';
import map from 'lodash/map';
import classnames from 'classnames';
import styles from '../../index';
import {Link} from 'react-router';
import { browserHistory } from 'react-router';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phonenumber: '',
      password: '',

      isPnoError: false,
      isPpassError: false,
      

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
    

    if (this.state.phonenumber == "") {

      this.setState({ isPnoError: true });
    }

    else if (this.state.password == "") {

      this.setState({ isPpassError: true });
    }

    else {
      browserHistory.push('/loggedin');

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

              <div className={`form-group`} style={this.state.isPnoError ? style : null}>
              <label className="control-label">
                  Phone Number
              </label>
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
<div className="form-group">
<button onClick={this.onSubmit} className="btn btn-primary btn-lg">
 <span>
 <Link to="/loggedin">
 </Link>
 Login
 </span>
</button>
</div>
</form>
);
}
}


LoginForm.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired
  }
  
  
  export default LoginForm;
  