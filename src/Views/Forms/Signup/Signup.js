import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../Componets/Header/Header';
const $ = window.$;

export class Signup extends Component {
    state = {
        email: '',
        password: '',
        phone: Number,
        city: '',
        address: '',
        pincode: Number,
        country: '',
    }

    componentDidMount(){
        localStorage.clear();
    }

    handleChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // this.props.history.push('/payment');
        $('#register').modal('hide');
    }

    render() {
        var token = localStorage.getItem("token");
        return (
            <> 
            <Header token={token} />
                <div className="home" style={{ minHeight: "100vh" }}>
                    <div className="row justify-content-center">
                        <div className="col-md-5">
                            {/* REGISTER */}
                            {/* <div className="modal fade" id="register" tabIndex={-1} role="dialog" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered" role="document"> */}
                                    <div className="modal-content">
                                        <div className="modal-header d-block position-relative border-0">
                                            <h5 className="modal-title text-center">
                                                Sign up
        </h5>
                                            <p className="small text-muted text-center mb-0">
                                                Resort Reservation System
        </p>
                                        </div>
                                        <div className="modal-body px-4 pt-0 login-modal-body">
                                            <form className="mt-3 pt-2" onSubmit={this.handleSubmit}>
                                                <div className="form-group">
                                                    <label className="small mb-1">Username <span className="text-danger">*</span></label>
                                                    <input type="text" name="username" onChange={this.handleChange} className="form-control modal-inp" placeholder="user name" required />
                                                </div>
                                                <div className="form-group">
                                                    <label className="small mb-1">Email ID <span className="text-danger">*</span></label>
                                                    <input type="email" name="email" onChange={this.handleChange} className="form-control modal-inp" placeholder="Email id" required />
                                                </div>
                                                <div className="form-group">
                                                    <label className="small mb-1">Password <span className="text-danger">*</span></label>
                                                    <input type="password" name="password" onChange={this.handleChange} className="form-control modal-inp" placeholder="password" required />
                                                </div>
                                                <div className="form-group">
                                                    <label className="small mb-1">Phone Number <span className="text-danger">*</span></label>
                                                    <input type="number" name="phone" onChange={this.handleChange} className="form-control modal-inp" placeholder="Phone number" required />
                                                </div>
                                                <div className="form-group">
                                                    <label className="small mb-1">Address <span className="text-danger">*</span></label>
                                                    <textarea name="address" onChange={this.handleChange} rows={4} className="form-control modal-inp" placeholder="Address" style={{ height: 'auto' }} required defaultValue={""} />
                                                </div>
                                                <div className="form-group">
                                                    <label className="small mb-1">City <span className="text-danger">*</span></label>
                                                    <select name="city" onChange={this.handleChange} className="form-control modal-inp">
                                                        <option value={1}>Please Select</option>
                                                        <option value={2}>A</option>
                                                        <option value={3}>B</option>
                                                        <option value={3}>C</option>
                                                    </select>
                                                </div>
                                                <div className="row">
                                                    <div className="form-group col-8 pr-1">
                                                        <label className="small mb-1">Country <span className="text-danger">*</span></label>
                                                        <select name="Country" onChange={this.handleChange} className="form-control modal-inp">
                                                            <option value={2}>Please Select</option>
                                                            <option value={3}>A</option>
                                                            <option value={4}>B</option>
                                                            <option value={4}>C</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-group col-4 pl-1">
                                                        <label className="small mb-1">Pincode <span className="text-danger">*</span></label>
                                                        <input type="tel" name="pincode" onChange={this.handleChange} className="form-control modal-inp" placeholder="Pincode" required />
                                                    </div>
                                                </div>
                                                {/* <p className="modal-footer-text text-center">
                                                    <span className="text-danger">* </span> By continuing you agree to the
            <a href>terms of services</a>
            And <a href>privacy policy</a>.
          </p> */}
                                                <div className="w-100">
                                                    <button type="submit" className="login-btn">Sign Up</button>
                                                </div>
                                                <p className="modal-footer-text text-center">
                                                    have an Already account..? <Link to="/signin">SIGN IN</Link>
          </p>
                                            </form>
                                        </div>
                                    </div>
                                {/* </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Signup
