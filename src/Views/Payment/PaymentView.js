import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

export class PaymentView extends Component {
    state = {
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

    home = () => {
        this.props.history.replace('/details');
        localStorage.removeItem("reservation")
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
                                        Room
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
                                                <td>$
                                                    {/* {reservation.totalFare} */}
                                                    {this.state.amount}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="w-75">Additional Gst</td>
                                                <td>$0</td>
                                            </tr>
                                            <tr className="payment-border">
                                                <td className="w-75">Total</td>
                                                <td>$
                                                    {/* {reservation.totalFare} */}
                                                    {this.state.amount}
                                                </td>
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

export default PaymentView;
