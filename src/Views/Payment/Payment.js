import React, { Component } from 'react'

export class Payment extends Component {
    handleSubmit = () => {
        this.props.history.push('/paymentview');
    }
    render() {
        return (
            <div>
                <div className="gap" />
                <section className="hop-main">
                    <img src="images/resort.jpg" alt="hop" />
                </section>
                {/* sessions */}
                <section className="hop">
                    <div className="container">
                        <div className="hop-body">
                            <div className="row">
                                <div className="col-md-9">
                                    <h3 className="hop-name">
                                        Ac Room
                      </h3>
                                </div>
                                <div className="col-md-3 text-right">
                                    <button className="hop-btn">
                                        Register
                      </button>
                                </div>
                            </div>
                            <hr className="hop-hr" />
                            <div className="row">
                                <div className="col-md-8">
                                    <p className="hop-subname">
                                        Name: <span> Sujith</span>
                                    </p>
                                    <ul className="hop-list">
                                        <li className="hop-list-li">
                                            Monday 27th April, 2020, 07:00 PM
                        </li>
                                        <li className="hop-list-li">
                                            <img src="images/location.svg" className="location-icon" alt="location" />
                          location
                        </li>
                                        <li className="hop-list-li">
                                            <span className="amount">₹1000</span>
                                        </li>
                                        <li className="hop-list-li">
                                            <span className="tag">Tags: </span> Mandala, Art, Drawing.
                        </li>
                                    </ul>
                                    <hr className="hop-hr" />
                                    <h5 className="hop-title">
                                        About
                      </h5>
                                    <p className="hop-content">
                                        Hoppers, We are going to get you hypnotized right now. Are you ready? Yes, Our Hobber Sujith
                                        is all set to teach us the beautiful art of Mandala drawing.
                      </p>
                                    <hr className="hop-hr" />
                                    <h5 className="hop-title">
                                        Details
                      </h5>
                                    <ul className="requirements-list">
                                        <li className="requirements-list-li">
                                            Bed
                        </li>
                                        <li className="requirements-list-li">
                                            other stuff
                        </li>
                                        <li className="requirements-list-li">
                                            Food
                        </li>
                                        <li className="requirements-list-li">
                                            Stationary
                        </li>
                                        <li className="requirements-list-li">
                                            All
                        </li>
                                    </ul>
                                    <hr className="hop-hr" />
                                </div>
                                <div className="col-md-4">
                                    <h5 className="hop-title">
                                        Make Payment
                      </h5>
                                    <div className="login-modal-body">
                                        <form className="mt-3 pt-2">
                                            <div className="row">
                                                <div className="form-group col-md-12">
                                                    <label className="small mb-1">Card Number <span className="text-danger">*</span></label>
                                                    <input type="number" name className="form-control modal-inp" placeholder="Card number" required />
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label className="small mb-1">Name on Card <span className="text-danger">*</span></label>
                                                    <input type="text" name className="form-control modal-inp" placeholder="user name" required />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col">
                                                    <label className="small mb-1">Expiry Date <span className="text-danger">*</span></label>
                                                    <input type="tel" name className="form-control modal-inp" placeholder="Expiry Date" required />
                                                </div>
                                                <div className="form-group col">
                                                    <label className="small mb-1">CVV <span className="text-danger">*</span></label>
                                                    <input type="tel" name className="form-control modal-inp" placeholder="Pincode" required />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="small mb-1">Amount <span className="text-danger">*</span></label>
                                                <input type="number" name className="form-control modal-inp" placeholder="Amount" required />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <hr className="hop-hr" />
                        </div>
                        <div className="w-100 text-center mt-4">
                            <button onClick={this.handleSubmit} className="hop-btn">Book Now</button>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Payment;
