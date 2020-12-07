import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { renderToString } from "react-dom/server";
import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable'
import Axios from '../../hoc/axios';
import { Redirect } from 'react-router-dom';

export class AdminDetails extends Component {
    state = {
        reservation: [],
        chargeRooms: [],
        rentals: [],
        payments: [],
        meal: [],
        amount: undefined,
        type: '',
        fromDate: '',
        toDate: '',
        noOfRooms: 0,
        noOfAdults: 0,
        noofChildren: 0,
        defaultDate: undefined,
        minDate: undefined,
        maxDate: undefined,
        isSelected: false,

    }

    componentDidMount() {
        var token = localStorage.getItem("token");
        var loginType = localStorage.getItem("loginType");
        if (!token && !loginType) {
            toast.error("Please Login");
            this.props.history.replace('/signin')
            return;
        }
        this.details();
        // const select1 = "Prepaid reservations";
        // const select2 = "60-days in advance reservations";
        // const select3 = "Conventional reservations";
        // const select4 = "Incentive reservations";
        // if (reservation.reservationType === select1) {
        //     this.setState({
        //         amount: 150 * reservation.noOfRooms
        //     })
        // } else if (reservation.reservationType === select2) {
        //     this.setState({
        //         amount: 170 * reservation.noOfRooms
        //     })
        // } else if (reservation.reservationType === select3) {
        //     this.setState({
        //         amount: 200 * reservation.noOfRooms
        //     })
        // } else if (reservation.reservationType === select4) {
        //     this.setState({
        //         amount: 160 * reservation.noOfRooms
        //     })
        // }
    }

    details = () => {
        const getUserRoomReservations = "reservation/getAllReservations";
        Axios.get(getUserRoomReservations)
            .then(res => {
                const data = res.data?.Reservations;
                this.setState({
                    reservation: data
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

    date = (val) => {
        return new Date(val)
    }

    print = (props) => {
        const array = props?.map((item, index) => {
            const obj = {
                sno: index + 1,
                userId: item.userId,
                fromDate: new Date(item.fromDate).toLocaleDateString(),
                toDate: new Date(item.toDate).toLocaleDateString(),
                noOfRooms: item.noOfRooms,
                noOfAdults: item.noOfAdults,
                noOfChildren: item.noOfChildren,
                reservationType: item.reservationType
            }
            return Object.values(obj)
        })
        const doc = new jsPDF();
        doc.autoTable({
            head: [['SNO', 'User ID', 'From Date', 'To Date', 'No Of Rooms', 'No Of Adults', 'No Of Children', "Type"]],
            body: array,
        })
        doc.save("report.pdf");
    };

    handleChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;

        this.setState({
            [name]: value
        });
    }


    handleSubmit = (event) => {
        event.preventDefault();
        const { fromDate, toDate, reservation } = this.state;
        if (fromDate && toDate) {
            const cp1 = new Date(fromDate);
            const cp2 = new Date(toDate);

            const filterData = reservation.filter(r => {
                let d = new Date(r.fromDate);
                if (d > cp1 && d < cp2) {
                    return r
                }
            })
            this.setState({
                reservation: filterData
            })
        } else {
            toast.error("Please select From and To Date")
        }

    }

    reset = () => {
        this.details();
    }


    render() {
        const { reservation, isSelected } = this.state;

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
                                    {/* <button onClick={this.print}>Download Report</button> */}
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
                                        All Booking Details
                                        <button onClick={() => this.print(reservation)} className="btn btn-small btn-primary float-right">Download</button>
                                    </h4>

                                    <form onSubmit={this.handleSubmit} id="form">
                                        <div className="row">
                                            <div className="form-grp col-md-3">
                                                <label>From Date <span className="text-danger">*</span></label>
                                                <input type="date"
                                                    name="fromDate"
                                                    onChange={this.handleChange}
                                                    className="form-inp" required />
                                            </div>
                                            <div className="form-grp col-md-3">
                                                <label>To Date <span className="text-danger">*</span></label>
                                                <input type="date"
                                                    name="toDate"
                                                    onChange={this.handleChange}
                                                    className="form-inp" required />
                                            </div>
                                            <div className="form-grp col">
                                                <label style={{ visibility: 'hidden' }}>submit</label>
                                                <div className="d-inline ">
                                                    <button type="reset" onClick={this.reset} className="contact-btn bg-danger mr-2">Clear</button>
                                                    <button type="submit" className="contact-btn">Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>


                                    <div className="table-responsive" id="reserv">
                                        <table className="table">
                                            <thead className="thead-dark">
                                                <tr>
                                                    <th scope="col">SNO</th>
                                                    <th scope="col">User ID</th>
                                                    <th scope="col">From Date</th>
                                                    <th scope="col">To Date</th>
                                                    <th scope="col">No Of Rooms</th>
                                                    <th scope="col">No Of Adults</th>
                                                    <th scope="col">No Of Children</th>
                                                    <th scope="col">Type</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {reservation?.length >= 0 ?
                                                    reservation?.map((item, index) => <tr key={item._id}>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>{item.userId}</td>
                                                        <td>{new Date(item.fromDate).toLocaleDateString()}</td>
                                                        <td>{new Date(item.toDate).toLocaleDateString()}</td>
                                                        <td>{item.noOfRooms}</td>
                                                        <td>{item.noOfAdults}</td>
                                                        <td>{item.noOfChildren}</td>
                                                        <td>
                                                            {item.reservationType}
                                                            {/* {item.reservationType === "1" ? " Prepaid reservations" : (null)}
                                                            {item.reservationType === "2" ? " 60-days in advance reservations" : (null)}
                                                            {item.reservationType === "3" ? " Conventional reservations" : (null)}
                                                            {item.reservationType === "4" ? " Incentive reservations" : (null)} */}
                                                        </td>
                                                    </tr>) : <tr>
                                                        <td colSpan="6" className="text-center">No data</td>
                                                    </tr>}
                                            </tbody>
                                        </table>
                                    </div>

                                    <hr />

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        )
    }
}

export default AdminDetails;
