import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { renderToString } from "react-dom/server";
import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable'
import Axios from '../../hoc/axios';

export class Details extends Component {
    state = {
        reservation: [],
        chargeRooms: [],
        rentals: [],
        payments: [],
        meal: [],

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
        const getUserRoomReservations = "reservation/getUserRoomReservations";
        const getUserchargeToRoom = "reservation/getUserchargeToRoom";
        const getrentalsHikes = "reservation/getrentalsHikes";
        const getUserPayment = "reservation/getUserPayment";
        const getUserMealReservation = "reservation/getUserMealReservation";
        Axios.post(getUserRoomReservations, body)
            .then(res => {
                this.setState({
                    reservation: res.data?.Reservations
                })
            })
            .catch(err => {
                if (err.response) {
                    toast.error(err.response.data.errors?.message)
                } else {
                    toast.error(err.message)
                }
            })
        Axios.post(getUserchargeToRoom, body)
            .then(res => {
                this.setState({
                    chargeRooms: res.data?.Reservations
                })
            })
            .catch(err => {
                if (err.response) {
                    toast.error(err.response.data.errors?.message)
                } else {
                    toast.error(err.message)
                }
            })
        Axios.post(getUserMealReservation, body)
            .then(res => {
                this.setState({
                    meal: res.data?.Reservations
                })
            })
            .catch(err => {
                if (err.response) {
                    toast.error(err.response.data.errors?.message)
                } else {
                    toast.error(err.message)
                }
            })
        Axios.post(getrentalsHikes, body)
            .then(res => {
                this.setState({
                    rentals: res.data?.Reservations
                })
            })
            .catch(err => {
                if (err.response) {
                    toast.error(err.response.data.errors?.message)
                } else {
                    toast.error(err.message)
                }
            })
        Axios.post(getUserPayment, body)
            .then(res => {
                this.setState({
                    payments: res.data?.Reservations
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
            head: [['SNO', 'From Date', 'To Date', 'No Of Rooms', 'No Of Adults', 'No Of Children', "Type"]],
            body: array,
        })
        doc.save("report.pdf");
    };


    print1 = (props) => {
        const array = props?.map((item, index) => {
            const obj = {
                sno: index + 1,
                fromDate: new Date(item.fromDate).toLocaleDateString(),
                toDate: new Date(item.toDate).toLocaleDateString(),
                noOfBikes: item.noOfBikes,
                picnicLunch: item.picnicLunch,
                equipmentType: item.equipmentType
            }
            return Object.values(obj)
        })
        const doc = new jsPDF();
        doc.autoTable({
            head: [['SNO', 'From Date', 'To Date', 'No Of Bikes', 'Picnic Lunch', "Type"]],
            body: array,
        })
        doc.save("report.pdf");
    };


    print2 = (props) => {
        const array = props?.map((item, index) => {
            const obj = {
                sno: index + 1,
                guestName: item.guestName,
                roomNo: item.roomNo,
                noOfPeople: item.noOfPeople,
                serverName: item.serverName,
                tipToServer: item.tipToServer,
                total: item.total
            }
            return Object.values(obj)
        })
        const doc = new jsPDF();
        doc.autoTable({
            head: [['SNO', 'Guest Name', 'Room Number', 'No Of People', 'Server Name', "Tip", "Total"]],
            body: array,
        })
        doc.save("report.pdf");
    };

    print3 = (props) => {
        const array = props?.map((item, index) => {
            const obj = {
                sno: index + 1,
                guestName: item.guestName,
                roomNo: item.roomNo,
                noOfPeople: item.noOfPeople,
                date: new Date(item.reservationDate).toLocaleDateString(),
                specialRequest: item.specialRequest
            }
            return Object.values(obj)
        })
        const doc = new jsPDF();
        doc.autoTable({
            head: [['SNO', 'Guest Name', 'Room Number', 'No Of People', 'Date', "Special Request"]],
            body: array,
        })
        doc.save("report.pdf");
    };


    print4 = (props) => {
        const array = props?.map((item, index) => {
            const obj = {
                sno: index + 1,
                cardName: item.cardName,
                cardNumber: item.cardNumber,
                amount: item.amount,
                paymentType: item.paymentType
            }
            return Object.values(obj)
        })
        const doc = new jsPDF();
        doc.autoTable({
            head: [['SNO', 'Card Name', 'Card Number', 'Amount', 'Payment Type']],
            body: array,
        })
        doc.save("report.pdf");
    };

    render() {
        const { reservation, chargeRooms, rentals, payments, meal } = this.state;

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
                                        Booking Details
                                        <button onClick={() => this.print(reservation)} className="btn btn-small btn-primary float-right">Download</button>
                                    </h4>
                                    <div className="table-responsive" id="reserv">
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
                                                {reservation?.length >= 0 ?
                                                    reservation?.map((item, index) => <tr key={item._id}>
                                                        <th scope="row">{index + 1}</th>
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

                                    <h4 className="choose-box-header mb-4">
                                        Rentals and Hikes
                                        <button onClick={() => this.print1(rentals)} className="btn btn-small btn-primary float-right">Download</button>
                                    </h4>
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead className="thead-dark">
                                                <tr>
                                                    <th scope="col">SNO</th>
                                                    <th scope="col">From Date</th>
                                                    <th scope="col">To Date</th>
                                                    <th scope="col">No Of Bikes</th>
                                                    <th scope="col">Picnic Lunch</th>
                                                    <th scope="col">Type</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {rentals?.length >= 0 ?
                                                    rentals?.map((item, index) => <tr key={item._id}>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>{new Date(item.fromDate).toLocaleDateString()}</td>
                                                        <td>{new Date(item.toDate).toLocaleDateString()}</td>
                                                        <td>{item.noOfBikes}</td>
                                                        <td>{item.picnicLunch}</td>
                                                        <td>
                                                            {item.equipmentType === "1" ? " All-terrain bicycles" : (null)}
                                                            {item.equipmentType === "2" ? " Off-road motorcycles" : (null)}
                                                            {item.equipmentType === "3" ? " Dune buggies" : (null)}
                                                        </td>
                                                    </tr>) : <tr>
                                                        <td colSpan="5" className="text-center">No data</td>
                                                    </tr>}
                                            </tbody>
                                        </table>
                                    </div>

                                    <hr />

                                    <h4 className="choose-box-header mb-4">
                                        Charge To Room
                                        <button onClick={() => this.print2(chargeRooms)} className="btn btn-small btn-primary float-right">Download</button>
                                    </h4>
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead className="thead-dark">
                                                <tr>
                                                    <th scope="col">SNO</th>
                                                    <th scope="col">Guest Name</th>
                                                    <th scope="col">Room Number</th>
                                                    <th scope="col">No Of People</th>
                                                    <th scope="col">Server Name</th>
                                                    <th scope="col">Tip</th>
                                                    <th scope="col">Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {chargeRooms?.length >= 0 ?
                                                    chargeRooms?.map((item, index) => <tr key={item._id}>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>{item.guestName}</td>
                                                        <td>{item.roomNo}</td>
                                                        <td>{item.noOfPeople}</td>
                                                        <td>{item.serverName}</td>
                                                        <td>{item.tipToServer}</td>
                                                        <td>{item.total}</td>
                                                    </tr>) : <tr>
                                                        <td colSpan="6" className="text-center">No data</td>
                                                    </tr>}
                                            </tbody>
                                        </table>
                                    </div>

                                    <hr />

                                    <h4 className="choose-box-header mb-4">
                                        Meal Reservations
                                        <button onClick={() => this.print3(meal)} className="btn btn-small btn-primary float-right">Download</button>
                                    </h4>
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead className="thead-dark">
                                                <tr>
                                                    <th scope="col">SNO</th>
                                                    <th scope="col">Guest Name</th>
                                                    <th scope="col">Room Number</th>
                                                    <th scope="col">No Of People</th>
                                                    <th scope="col">Date</th>
                                                    <th scope="col">Special Request</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {meal?.length >= 0 ?
                                                    meal?.map((item, index) => <tr key={item._id}>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>{item.guestName}</td>
                                                        <td>{item.roomNo}</td>
                                                        <td>{item.noOfPeople}</td>
                                                        <td>{new Date(item.reservationDate).toLocaleDateString()}</td>
                                                        <td>{item.specialRequest}</td>
                                                    </tr>) : <tr>
                                                        <td colSpan="4" className="text-center">No data</td>
                                                    </tr>}
                                            </tbody>
                                        </table>
                                    </div>

                                    <hr />

                                    <h4 className="choose-box-header mb-4">
                                        Payment
                                        <button onClick={() => this.print4(payments)} className="btn btn-small btn-primary float-right">Download</button>
                                    </h4>
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead className="thead-dark">
                                                <tr>
                                                    <th scope="col">SNO</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Card Number</th>
                                                    <th scope="col">Amount</th>
                                                    {/* <th scope="col">No Of Adults</th>
                                                    <th scope="col">No Of Children</th> */}
                                                    <th scope="col">Type</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {payments?.length >= 0 ?
                                                    payments.map((item1, index) => <tr key={item1._id}>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>{item1.cardName}</td>
                                                        <td>{item1.cardNumber}</td>
                                                        <td>{item1.amount}</td>
                                                        <td>{item1.paymentType}</td>
                                                    </tr>) : <tr>
                                                        <td colSpan="4" className="text-center">No data</td>
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
