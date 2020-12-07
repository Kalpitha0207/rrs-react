import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../Componets/Header/Header';
import Axios from '../../../hoc/axios';
import jwt from 'jwt-decode';
import { toast } from 'react-toastify';
const $ = window.$;

export class Signin extends Component {
    state = {
        email: '',
        password: '',
        loginType: ''
    }

    componentDidMount() {
        localStorage.clear();
    }

    handleChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name]: value
        })
        if (name === "loginType") {
            if (value === "admin") {
                localStorage.setItem("loginType", "admin")
            } else {
                localStorage.clear()
            }
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // $('#login').modal('hide');
        const body = {
            email: this.state.email,
            password: this.state.password
        }
        if (this.state.loginType === "admin") {
            Axios.post("admin/signin", body)
                .then(res => {
                    const token = res.data.token;
                    const user = jwt(token);
                    localStorage.setItem("token", res.data.token);
                    localStorage.setItem("name", user.name);
                    localStorage.setItem("id", user.id);
                    toast.success(res.data.message)
                    this.props.history.push('/reports');
                })
                .catch(err => {
                    if (err.response) {
                        toast.error(err.response.data.errors?.message)
                    } else {
                        toast.error(err.message)
                    }
                })
            return;
        } else {
            Axios.post("user/signin", body)
                .then(res => {
                    const token = res.data.token;
                    const user = jwt(token);
                    localStorage.setItem("token", res.data.token);
                    localStorage.setItem("name", user.name);
                    localStorage.setItem("id", user.id);
                    toast.success(res.data.message)
                    this.props.history.push('');
                })
                .catch(err => {
                    if (err.response) {
                        toast.error(err.response.data.errors?.message)
                    } else {
                        toast.error(err.message)
                    }
                })
        }
    }

    render() {
        var token = localStorage.getItem("token");
        return (
            <>
                <Header token={token} />
                <div className="home" style={{ height: "100vh" }}>
                    <div className="row justify-content-center">
                        <div className="col-md-5">
                            {/* LOGIN */}
                            {/* <div className="modal fade" id="login" tabIndex={-1} role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document"> */}
                            <div className="modal-content">
                                <div className="modal-header d-block position-relative border-0">
                                    {/* <Link to="/" className="text-primary p-2">
                                    <i className="fas fa-arrow-left mr-1"></i>
                                Go to home
                                </Link> */}
                                    <h5 className="modal-title text-center">
                                        Sign In
                                </h5>
                                    <p className="small text-muted text-center mb-0">
                                        Resort Reservation System
                                </p>
                                </div>
                                <div className="modal-body px-4 pt-0 login-modal-body">
                                    <form className="mt-3 pt-2" onSubmit={this.handleSubmit}>
                                        <div className="row justify-content-center mb-3">
                                            <div className="col-3">
                                                <div className="custom-control custom-radio">
                                                    <input type="radio" id="customRadio1" name="loginType"
                                                        onChange={this.handleChange}
                                                        value="user" className="custom-control-input" />
                                                    <label className="custom-control-label" htmlFor="customRadio1">User</label>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="custom-control custom-radio">
                                                    <input type="radio" id="customRadio2" name="loginType"
                                                        onChange={this.handleChange}
                                                        value="admin" className="custom-control-input" />
                                                    <label className="custom-control-label" htmlFor="customRadio2">Admin</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="small mb-1">Email <span className="text-danger">*</span></label>
                                            <input type={this.state.loginType === "admin" ? "text" : "email"} name="email" onChange={this.handleChange} className="form-control modal-inp" placeholder="Email id" />
                                        </div>
                                        <div className="form-group">
                                            <label className="small mb-1">Password <span className="text-danger">*</span></label>
                                            <input type="password" name="password" onChange={this.handleChange} className="form-control modal-inp" placeholder="password" />
                                        </div>
                                        <div className="w-100">
                                            <button type="submit" className="login-btn">Sign IN</button>
                                        </div>
                                        <p className="modal-footer-text text-center">
                                            New to Resort Reservation System..? <Link to="/signup">SIGN UP</Link>.
                                    </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </>
        )
    }
}

export default Signin
