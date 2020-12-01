import React, { Component } from 'react';
import { toast } from 'react-toastify';
import Axios from '../../hoc/axios';

export class Details extends Component {
    state = {
        data: undefined,
    }

    componentDidMount() {
        this.details();
    }

    details = () => {
        var token = localStorage.getItem("token");
        if (!token) {
            toast.error("Please Login");
            return;
        }
        const body = {
            userId: localStorage.getItem("id")
        }
        const URl = "reservation/getAllReservation";
        Axios.post(URl, body)
            .then(res => {
                this.setState({
                    data: res.data?.Reservations
                })
            })
            .catch(err => {
                if (err.response) {
                    toast.error(err.response.data.errors?.message)
                } else {
                    toast.error(err.message)
                }
            })
    }

    date = (val) =>{
        return new Date(val)
    } 
    
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
                                                    <th scope="col">From Date</th>
                                                    <th scope="col">To Date</th>
                                                    <th scope="col">No Of Rooms</th>
                                                    <th scope="col">No Of Adults</th>
                                                    <th scope="col">No Of Children</th>
                                                    <th scope="col">Type</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.state.data?.length >= 0 ?
                                                    this.state.data?.map((item, index) => <tr key={item._id}>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>{item.fromDate}</td>
                                                        <td>{item.toDate}</td>
                                                        <td>{item.noOfRooms}</td>
                                                        <td>{item.noOfAdults}</td>
                                                        <td>{item.noOfChildren}</td>
                                                        <td>
                                                            {item.reservationType === "1" ? " Prepaid reservations" : (null)}
                                                            {item.reservationType === "2" ? " 60-days in advance reservations" : (null)}
                                                            {item.reservationType === "3" ? " Conventional reservations" : (null)}
                                                            {item.reservationType === "4" ? " Incentive reservations" : (null)}
                                                        </td>
                                                    </tr>) : <tr>
                                                        <td colSpan="6" className="text-center">No data</td>
                                                    </tr>}
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
