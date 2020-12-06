import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

export class PaymentViewCharge extends Component {
    state = {
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

    home = () => {
        this.props.history.replace('/details');
        localStorage.removeItem("charge")
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
                <section className="hop-main payment">
                    <div className="payment-success">
                        <span><i className="fas fa-check" /></span>
                    </div>
                    <h3 className="payment-title">
                        Payment successful
                    </h3>
                </section>
                {/* sessions */}
                <section className="hop">
                    <div className="container">
                        <hr className="hop-hr" />
                        <div className="hop-body mt-3">
                            <div className="row">
                                <div className="col-md-9">
                                    <h3 className="hop-name">
                                        Hikes
                                    </h3>
                                    <p className="hop-subname">
                                        Name: <span> {name}</span>
                                    </p>
                                </div>
                            </div>
                            <hr className="hop-hr" />
                            <div className="row">
                                <div className="col-md">
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
                                </div>
                            </div>
                            <hr className="hop-hr" />
                        </div>
                        {/* <hr class="hop-hr" /> */}
                        <div className="row">
                            <div className="col-md">
                                <h5 className="hop-title">
                                    payment details
                                </h5>
                                <div className="payment-details">
                                    <table className="table border-0">
                                        <tbody>
                                            <tr>
                                                <td className="w-75">Cost</td>
                                                <td>${charge.total}</td>
                                            </tr>
                                            <tr>
                                                <td className="w-75">Additional Tip</td>
                                                <td>${charge.tipToServer}</td>
                                            </tr>
                                            <tr className="payment-border">
                                                <td className="w-75">Total</td>
                                                <td>${this.state.amoumt}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="col-md">
                                <h5 className="hop-title">
                                    Details
                                </h5>
                                <ul className="requirements-list">
                                    <li className="requirements-list-li">
                                        No Of People: {charge.noOfPeople}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <hr className="hop-hr" />
                        {/* <div className="row">
                            <div className="col-md">
                                <h5 className="hop-title">
                                    Important information
                                </h5>
                                <p className="hop-content">
                                    The session details along with the <span>Instagram LIve LINK</span> will be sent to your
                                    mail.
                                    <span>Happy hopping.!!</span>
                                </p>
                            </div>
                        </div> */}
                        <div className="w-100 text-center mt-4">
                            <button onClick={this.home} className="hop-btn">Home</button>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default PaymentViewCharge;
