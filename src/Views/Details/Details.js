import React, { Component } from 'react'

export class Details extends Component {
    render() {
        return (
            <div>
                {/* Banner home */}
                <section className="home">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="home-content">
                                    <h1 className="home-title">
                                        Booking Details
                        <hr className="home-hr" />
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* sessions */}
                <section className="choose">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-12">
                                <div className="choose-box choose-box-border about">
                                    <h4 className="choose-box-header mb-4">
                                        Booking Details
                      </h4>
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead className="thead-dark">
                                                <tr>
                                                    <th scope="col">SNO</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Date</th>
                                                    <th scope="col">Mobile</th>
                                                    <th scope="col">Amount</th>
                                                    <th scope="col">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>22-11-2020</td>
                                                    <td>989898989</td>
                                                    <td>$2000</td>
                                                    <td>Completed</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>22-11-2020</td>
                                                    <td>989898989</td>
                                                    <td>$2000</td>
                                                    <td>Completed</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>22-11-2020</td>
                                                    <td>989898989</td>
                                                    <td>$2000</td>
                                                    <td>Completed</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        )
    }
}

export default Details;
