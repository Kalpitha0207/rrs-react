import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

export class PaymentView2 extends Component {
    state = {
        rentals: undefined,
        amount: Number,
    }

    componentDidMount() {
        const rentals = JSON.parse(localStorage.getItem("rentals"));
        this.setState({
            rentals: rentals
        })
        if (rentals === null || rentals === undefined) {
            return;
        }

        if (rentals.equipmentType === "1") {
            this.setState({
                amoumt: 150 * rentals.noOfBikes
            })
        } else if (rentals.equipmentType === "2") {
            this.setState({
                amoumt: 170 * rentals.noOfBikes
            })
        } else if (rentals.equipmentType === "3") {
            this.setState({
                amoumt: 100 * rentals.noOfBikes
            })
        } else if (rentals.equipmentType === "4") {
            this.setState({
                amoumt: 160 * rentals.noOfBikes
            })
        }
    }

    home = () => {
        this.props.history.replace('/details');
        localStorage.removeItem("rentals")
    }

    render() {
        const name = localStorage.getItem("name");
        const rentals = JSON.parse(localStorage.getItem("rentals"));
        if (rentals === null || rentals === undefined) {
            return <Redirect to="/rentals" />
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
                                    Rentals and Hikes
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
                                            <span className="tag">From Date: </span> {new Date(rentals.fromDate).toLocaleDateString()}
                                        </li>
                                        <li className="hop-list-li">
                                            <span className="tag">To Date: </span> {new Date(rentals.toDate).toLocaleDateString()}
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
                                                <td>${this.state.amoumt}</td>
                                            </tr>
                                            <tr>
                                                <td className="w-75">Additional Gst</td>
                                                <td>$0</td>
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
                                        No Of Bikes: {rentals.noOfBikes}
                                    </li>
                                    {/* <li className="requirements-list-li">
                                            No Of Adults: {rentals.noOfAdults}
                                        </li>
                                        <li className="requirements-list-li">
                                            No Of Children: {rentals.noOfChildren}
                                        </li> */}
                                    <li className="requirements-list-li">
                                        rentals Type:
                                            {rentals.equipmentType === "1" ? " All-terrain bicycles" : (null)}
                                        {rentals.equipmentType === "2" ? " Off-road motorcycles" : (null)}
                                        {rentals.equipmentType === "3" ? " Dune buggies" : (null)}
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

export default PaymentView2;
