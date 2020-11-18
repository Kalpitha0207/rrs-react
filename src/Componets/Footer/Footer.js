import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <>
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="footer-info text-left">
                                    <h4 className="logo mb-0">Resort Reservation System</h4>
                                    <p className="footer-info-text">Book Resort</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <ul className="nav social-media">
                                    <li className="social-list">
                                        <a className="social-links" href="/">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li className="social-list">
                                        <a className="social-links" href="/">
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </li>
                                    <li className="social-list">
                                        <a className="social-links" href="/">
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </li>
                                    <li className="social-list">
                                        <a className="social-links" href="/">
                                            <i className="fab fa-youtube" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* <div className="col-md-6">
                                <div className="row m-0 justify-content-center">
                                    <div className="col-md p-0">
                                        <h6 className="footer-heading">Register</h6>
                                    </div>
                                    <div className="col-md p-0">
                                        <h6 className="footer-heading">Book now</h6>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </footer>
                <div className="copyrights">
                    <p className="copyrights-data">
                        Copyright © 2020 RRS
    </p>
                </div>
            </>

        )
    }
}

export default Footer
