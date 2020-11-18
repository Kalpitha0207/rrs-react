import React, { Component } from 'react'

export class PaymentView extends Component {
    render() {
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
                                        Ac Room
            </h3>
                                    <p className="hop-subname">
                                        Name: <span> Sujith</span>
                                    </p>
                                </div>
                            </div>
                            <hr className="hop-hr" />
                            <div className="row">
                                <div className="col-md">
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
                                                <td className="w-75">Mandala Drawing</td>
                                                <td>₹1000</td>
                                            </tr>
                                            <tr>
                                                <td className="w-75">Additional Gst</td>
                                                <td>₹0</td>
                                            </tr>
                                            <tr className="payment-border">
                                                <td className="w-75">Total</td>
                                                <td>₹1000</td>
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
                            </div>
                        </div>
                        <hr className="hop-hr" />
                        <div className="row">
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
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default PaymentView;
