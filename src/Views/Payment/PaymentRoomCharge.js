import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import Axios from '../../hoc/axios';

export class PaymentRoomCharge extends Component {
    state = {
        cardNumber: Number,
        cardName: '',
        expDate: Date,
        cvv: Number,
        amoumt: Number,
        charge: undefined,
        amount: Number,
    }

    componentDidMount() {
        const charge = JSON.parse(localStorage.getItem("charge"));
        this.setState({
            charge: charge
        })

        if (charge === null || charge === undefined) {
            return;
        }
        this.setState({
            amoumt: charge.total + (charge.tipToServer || 0)
        })
    }



    handleChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = () => {
        var token = localStorage.getItem("token");
        if (!token) {
            toast.error("Please Login");
            return;
        }
        const { cardNumber, cardName, expDate, cvv, amoumt } = this.state;

        if (!cardNumber || !cardName || !expDate || !cvv || !amoumt) {
            toast.error("Please fill all input fields");
            return;
        }

        const body = {
            userId: localStorage.getItem("id"),
            paymentType: "Charge To Room payment",
            cardNumber: parseInt(cardNumber),
            cardName: cardName,
            expDate: expDate,
            cvv: parseInt(cvv),
            amount: parseInt(amoumt)
        }
        const URl = "reservation/payment";
        Axios.post(URl, body)
            .then(res => {
                toast.success("Payment is successful");
                this.props.history.replace('/paymentViewCharge');
            })
            .catch(err => {
                const error = err.response?.data?.errors.message;
                toast.error(error);
            })
    }
    render() {
        const name = localStorage.getItem("name");
        const charge = JSON.parse(localStorage.getItem("charge"));
        if (charge === null || charge === undefined) {
            return <Redirect to="/restaurant" />
        }
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
                                        Charge To Room
                                    </h3>
                                </div>
                            </div>
                            <hr className="hop-hr" />
                            <div className="row">
                                <div className="col-md-8">
                                    <p className="hop-subname">
                                        Name: <span> {name}</span>
                                    </p>
                                    <ul className="hop-list">
                                        <li className="hop-list-li">
                                            <span className="tag">Room No: </span> {charge.roomNo}
                                        </li>
                                        <li className="hop-list-li">
                                            <span className="tag">Guest Name: </span> {charge.guestName}
                                        </li>
                                        <li className="hop-list-li">
                                            <span className="tag">Tip : </span> {charge.tipToServer}
                                        </li>
                                        <li className="hop-list-li">
                                            <img src="images/location.svg" className="location-icon" alt="location" />
                                            The Borrego Springs resort
                                        </li>
                                        <li className="hop-list-li">
                                            <span className="tag">Amount: </span><span className="amount">${this.state.amoumt}</span>
                                        </li>
                                    </ul>
                                    <hr className="hop-hr" />
                                    <h5 className="hop-title">
                                        About
                                    </h5>
                                    <p className="hop-content">
                                        Resort Reservation System is for all the fanatics out there who are bored sitting at home, waiting in long lines outside supermarkets or attending work meetings.

                                    </p>
                                    <hr className="hop-hr" />
                                    <h5 className="hop-title">
                                        Details
                                    </h5>
                                    <ul className="requirements-list">
                                        <li className="requirements-list-li">
                                            No Of People: {charge.noOfPeople}
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
                                                    <input type="tel" name="cardNumber" minLength="12" maxLength="12" onChange={this.handleChange} className="form-control modal-inp" placeholder="Card number" required />
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label className="small mb-1">Name on Card <span className="text-danger">*</span></label>
                                                    <input type="text" name="cardName" onChange={this.handleChange} className="form-control modal-inp" placeholder="user name" required />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col">
                                                    <label className="small mb-1">Expiry Date <span className="text-danger">*</span></label>
                                                    <input type="tel" name="expDate" onChange={this.handleChange} className="form-control modal-inp" placeholder="Expiry Date" required />
                                                </div>
                                                <div className="form-group col">
                                                    <label className="small mb-1">CVV <span className="text-danger">*</span></label>
                                                    <input type="tel" name="cvv" onChange={this.handleChange} minLength="3" maxLength="3" className="form-control modal-inp" placeholder="Pincode" required />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="small mb-1">Amount <span className="text-danger">*</span></label>
                                                <input type="number" name="amoumt" defaultValue={this.state.amoumt} className="form-control modal-inp" placeholder="Pincode" disabled readOnly required />
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

export default PaymentRoomCharge;
