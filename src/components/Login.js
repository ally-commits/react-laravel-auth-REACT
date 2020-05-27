import React from 'react';
import {setUser, setLoading} from '../actions/auth';
import PropTypes from 'prop-types';
import axios from 'axios';
import {BACKEND_URL} from '../config';
import { connect } from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

class Login extends React.Component{
  state = {
    email: '',
    password: '',
    error: {
      email: null,
      password: null
    },
    errorMsg: null
  }
  render() {
    let error = this.state.error;
    return (
      <Route
        {...this.props.rest}
        render={() =>
          !this.props.auth.authenticated ? (
            <div class="row w-100">
                <div className="card mx-auto mt-5 shadow col-sm-12 col-md-8 col-lg-4">
                    <div className="card-header">
                        <h4>Login</h4>
                    </div>
                    <div className="card-body">
                        {this.state.errorMsg && <div className="alert alert-danger">
                          {this.state.errorMsg}
                        </div>}
                        <div className="form-group">
                            <label htmlFor="email">Enter Email</label>
                            <input type="email" value={this.state.emial} onChange={(e) => this.setState({email: e.target.value})} 
                                className={`form-control ${error.email && "is-invalid"}`} />

                            <span className="invalid-feedback" role="alert">
                                <strong>{error.email != null && <p>{error.email}</p>}</strong>
                            </span> 
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Enter password</label>
                            <input type="password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} 
                                className={`form-control ${error.password && "is-invalid"}`} />

                            <span className="invalid-feedback" role="alert">
                                <strong>{error.password != null && <p>{error.password}</p>}</strong>
                            </span> 
                        </div>
                        <input type="submit" class="btn btn-primary" onClick={() => {
                          let error = {email: null,password: null}
                          this.setState({errorMsg: null,error});
                          this.props.setLoading(true);
                          axios.post(`${BACKEND_URL}/login`,{ 
                              email: this.state.email,
                              password: this.state.password, 
                          }).then(res => {
                              this.props.setUser(res.data.success);
                          }).catch(err => { 
                              this.props.setLoading(false);
                              if(err.response.status == 400) {
                                this.setState({
                                  error: err.response.data.error, 
                                });
                              } else {
                                this.setState({
                                  errorMsg: err.response.data.error, 
                                });
                              }
                          })
                        }}/>
                    </div>
                </div> 
            </div>
          ) : (
            <Redirect
              to={{
                pathname: "/dashboard", 
              }}
            />
          )
        }
      />
    );
  }
}

Login.propTypes = { 
  auth: PropTypes.object,
  setUser: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default  connect(mapStateToProps, {setUser, setLoading})(Login);
