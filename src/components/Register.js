import React  from 'react';
import {setUser} from '../actions/auth';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import { BACKEND_URL } from '../config';

class Register extends React.Component {
    state = {
        name: '',
        email: '',
        password: '',
        c_password: '',
        error: {
            name: null,
            email: null,
            password: null,
            c_password: null
        }
    }
    render() {
        let error = this.state.error;
        console.log(error);
        return (
            <Route                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
                {...this.props.rest}
                render={() =>
                !this.props.auth.authenticated ? (
                    <div className="container mt-5">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="card">
                                    <div className="card-header">Register</div>
                                    <div className="card-body"> 
                                        <div className="form-group row">
                                            <label htmlFor="name" className="col-md-4 col-form-label text-md-right">Enter Your Name</label>

                                            <div className="col-md-6">
                                                <input type="text" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})} 
                                                    className={`form-control ${error.name && "is-invalid"}`} />

                                                <span className="invalid-feedback" role="alert">
                                                    <strong>{error.name != null && <p>{error.name}</p>}</strong>
                                                </span> 
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label htmlFor="name" className="col-md-4 col-form-label text-md-right">Enter Your Email</label>

                                            <div className="col-md-6">
                                                <input type="email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}
                                                    className={`form-control ${error.email && "is-invalid"}`}/>

                                                <span className="invalid-feedback" role="alert">
                                                <strong>{error.email != null && <p>{error.email}</p>}</strong>
                                                </span> 
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label htmlFor="name" className="col-md-4 col-form-label text-md-right">Enter Your Password</label>

                                            <div className="col-md-6">
                                                <input type="password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})}
                                                    className={`form-control ${error.password && "is-invalid"}`}/>

                                                <span className="invalid-feedback" role="alert">
                                                <strong>{error.password != null && <p>{error.password}</p>}</strong>
                                                </span> 
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label htmlFor="name" className="col-md-4 col-form-label text-md-right">Confirm Password</label>

                                            <div className="col-md-6">
                                                <input type="password" value={this.state.c_password} onChange={(e) => this.setState({c_password: e.target.value})}
                                                    className={`form-control ${error.c_password && "is-invalid"}`}/>

                                                <span className="invalid-feedback" role="alert">
                                                <strong>{error.c_password != null && <p>{error.c_password}</p>}</strong>
                                                </span> 
                                            </div>
                                        </div>
                                        <div className="form-group row mb-0">
                                            <div className="col-md-6 offset-md-4">
                                                <button type="submit" className="btn btn-primary" onClick={() => {
                                                    axios.post(`${BACKEND_URL}/register`,{
                                                        name: this.state.name,
                                                        email: this.state.email,
                                                        password: this.state.password,
                                                        c_password: this.state.c_password
                                                    }).then(res => {
                                                        this.props.setUser(res.data.success);
                                                    }).catch(err => { 
                                                        this.setState({
                                                            error: err.response.data.error
                                                        })
                                                    })
                                                }}>
                                                    Register
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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

Register.propTypes = { 
    auth: PropTypes.object,
    setUser: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default  connect(mapStateToProps, {setUser})(Register);
