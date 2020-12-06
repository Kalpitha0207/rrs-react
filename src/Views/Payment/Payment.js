import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import Axios from '../../hoc/axios';

export class Payment extends Component {
    state = {
        cardNumber: Number,
        cardName: '',
        expDate: Date,
        cvv: Number,
        amount: Number,
        reservation: undefined,
        amount: Number,
    }

    componentDidMount() {
        const reservation = JSON.parse(localStorage.getItem("reservation"));
        this.setState({
            reservation: reservation
        })

        if (reservation === null || reservation === undefined) {
            return;
        }
        // this.setState({
        //     amount: reservation.totalFare
        // })
        const select1 = "Prepaid reservations";
        const select2 = "60-days in advance reservations";
        const select3 = "Conventional reservations";
        const select4 = "Incentive reservations";
        if (reservation.reservationType === select1) {
            this.setState({
                amount: 150 * reservation.noOfRooms
            })
        } else if (reservation.reservationType === select2) {
            this.setState({
                amount: 170 * reservation.noOfRooms
            })
        } else if (reservation.reservationType === select3) {
            this.setState({
                amount: 100 * reservation.noOfRooms
            })
        } else if (reservation.reservationType === select4) {
            this.setState({
                amount: 160 * reservation.noOfRooms
            })
        }
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
        const { cardNumber, cardName, expDate, cvv, amount } = this.state;

        if (!cardNumber || !cardName || !expDate || !cvv || !amount) {
            toast.error("Please fill all input fields");
            return;
        }

        const body = {
            userId: localStorage.getItem("id"),
            paymentType: "Reservation payment",
            cardNumber: parseInt(cardNumber),
            cardName: cardName,
            expDate: expDate,
            cvv: parseInt(cvv),
            amount: parseInt(amount)
        }
        const URl = "reservation/payment";
        Axios.post(URl, body)
            .then(res => {
                toast.success("Payment is successful");
                this.props.history.push('/paymentview');
            })
            .catch(err => {
                const error = err.response?.errors?.message;
                toast.error(error);
            })
    }
    render() {
        const name = localStorage.getItem("name");
        const reservation = JSON.parse(localStorage.getItem("reservation"));
        if (reservation === null || reservation === undefined) {
            return <Redirect to="/reservation" />
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
                                        Room
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
                                            <span className="tag">From Date: </span> {new Date(reservation.fromDate).toLocaleDateString()}
                                        </li>
                                        <li className="hop-list-li">
                                            <span className="tag">To Date: </span> {new Date(reservation.toDate).toLocaleDateString()}
                                        </li>
                                        <li className="hop-list-li">
                                            <img src="images/location.svg" className="location-icon" alt="location" />
                                            The Borrego Springs resort
                                        </li>
                                        <li className="hop-list-li">
                                            <span className="tag">Amount: </span>
                                            <span className="amount">$
                                            {/* {reservation.totalFare} */}
                                            {this.state.amount}
                                            </span>
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
                                            No Of Rooms: {reservation.noOfRooms}
                                        </li>
                                        <li className="requirements-list-li">
                                            No Of Adults: {reservation.noOfAdults}
                                        </li>
                                        <li className="requirements-list-li">
                                            No Of Children: {reservation.noOfChildren}
                                        </li>
                                        <li className="requirements-list-li">
                                            Reservation Type: {reservation.reservationType}
                                            {/* {reservation.reservationType === "1" ? " Prepaid reservations" : (null)}
                                            {reservation.reservationType === "2" ? " 60-days in advance reservations" : (null)}
                                            {reservation.reservationType === "3" ? " Conventional reservations" : (null)}
                                            {reservation.reservationType === "4" ? " Incentive reservations" : (null)} */}
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
                                                    <input type="text" name="cardName" onChange={this.handleChange} className="form-control modal-inp" placeholder="Name on Card" required />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col">
                                                    <label className="small mb-1">Expiry Date <span className="text-danger">*</span></label>
                                                    <input type="tel" name="expDate" onChange={this.handleChange} className="form-control modal-inp" placeholder="Expiry Date" required />
                                                </div>
                                                <div className="form-group col">
                                                    <label className="small mb-1">CVV <span className="text-danger">*</span></label>
                                                    <input type="tel" name="cvv" onChange={this.handleChange} minLength="3" maxLength="3" className="form-control modal-inp" placeholder="CVV" required />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="small mb-1">Amount <span className="text-danger">*</span></label>
                                                <input type="number" name="amount" defaultValue={this.state.amount} className="form-control modal-inp" placeholder="Amount" disabled readOnly required />
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
