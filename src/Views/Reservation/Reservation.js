import React, { Component } from 'react';
import { toast } from 'react-toastify';
import Axios from '../../hoc/axios';

export class Reservation extends Component {
    state = {
        type: '',
        fromDate: '',
        toDate: '',
        noOfRooms: 0,
        noOfAdults: 0,
        noofChildren: 0,
    }

    increment = (val) => {
        const { noOfRooms, noOfAdults, noofChildren } = this.state;
        if (noOfRooms >= 0 || noOfAdults >= 0 || noofChildren >= 0) {
            if (val === "room") {
                this.setState(prevState => {
                    return { noOfRooms: prevState.noOfRooms + 1 }
                });
            } else if (val === "adult") {
                this.setState(prevState => {
                    return { noOfAdults: prevState.noOfAdults + 1 }
                });
            } else if (val === "child") {
                this.setState(prevState => {
                    return { noofChildren: prevState.noofChildren + 1 }
                });
            }
        }
    }

    decrement = (val) => {
        const { noOfRooms, noOfAdults, noofChildren } = this.state;
        if (noOfRooms > 0 || noOfAdults > 0 || noofChildren > 0) {
            if (val === "room") {
                this.setState((prevState, props) => {
                    return { noOfRooms: prevState.noOfRooms - 1 }
                });
            } else if (val === "adult") {
                this.setState((prevState, props) => {
                    return { noOfAdults: prevState.noOfAdults - 1 }
                });
            } else if (val === "child") {
                this.setState((prevState, props) => {
                    return { noofChildren: prevState.noofChildren - 1 }
                });
            }
        }
    }

    handleChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        var token = localStorage.getItem("token");
        if (!token) {
            toast.error("Please Login");
            return;
        }
        const { type, fromDate, toDate, noOfRooms, noofChildren, noOfAdults } = this.state;
        if (noOfRooms === 0 || noOfAdults === 0 || noofChildren === 0) {
            toast.error("Please select no of Rooms/Adults/Children");
            return;
        }
        const body = {
            reservationType: type,
            fromDate: fromDate,
            toDate: toDate,
            noOfRooms: noOfRooms,
            noOfAdults: noOfAdults,
            noOfChildren: noofChildren
        }
        const URl = "reservation";
        Axios.post(URl, body)
            .then(res => {
                console.log(res);
                toast.success("Reservation is successfully created");
                // this.props.history.push('/payment');
            })
            .catch(err => {
                const error = err.response?.data?.errors.message;
                toast.error(error);
            })
    }

    render() {
        const { noOfRooms, noOfAdults, noofChildren } = this.state;
        var token = localStorage.getItem("token");

        return (
            <>
                {/* Banner home */}
                <section className="home">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="home-content">
                                    <h1 className="home-title">
                                        Reservation
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
                            <div className="col-md-6">
                                <div className="choose-box about1">
                                    {token ? null : <p className="text-danger">Please login</p>}
                                    <h4 className="choose-box-header mb-2">
                                        Reservation
                                    </h4>
                                    {/* <hr/> */}
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-grp">
                                            <label>Type Of Reservation <span className="text-danger">*</span></label>
                                            <select name="type" defaultValue={'DEFAULT'} onChange={this.handleChange} className="form-inp">
                                                <option value={"DEFAULT"}>Select Option</option>
                                                <option value="1">Prepaid reservations</option>
                                                <option value="1">60-days in advance reservations</option>
                                                <option value="1">Conventional reservations</option>
                                                <option value="1">Incentive reservations</option>
                                            </select>
                                        </div>
                                        <div className="row">
                                            <div className="form-grp col">
                                                <label>From Date <span className="text-danger">*</span></label>
                                                <input type="date" name="fromDate" onChange={this.handleChange} className="form-inp" required />
                                            </div>
                                            <div className="form-grp col">
                                                <label>To Date <span className="text-danger">*</span></label>
                                                <input type="date" name="toDate" onChange={this.handleChange} className="form-inp" required />
                                            </div>
                                        </div>
                                        <div className="form-grp form-flex">
                                            <label>No of Rooms</label>
                                            <div className="add-count">
                                                <button type="button" onClick={() => this.decrement("room")} className="btn btn-danger">-</button>
                                                <input type="number" name="noOfRooms" className="form-inp p-0" min={0} step={1} value={noOfRooms} readOnly required />
                                                <button type="button" onClick={() => this.increment("room")} className="btn btn-danger">+</button>
                                            </div>
                                        </div>
                                        <div className="form-grp form-flex">
                                            <label>No of Adults</label>
                                            <div className="add-count">
                                                <button type="button" onClick={() => this.decrement("adult")} className="btn btn-danger">-</button>
                                                <input type="number" name="noOfAdults" className="form-inp p-0" min={0} step={1} value={noOfAdults} readOnly required />
                                                <button type="button" onClick={() => this.increment("adult")} className="btn btn-danger">+</button>
                                            </div>
                                        </div>
                                        <div className="form-grp form-flex">
                                            <label>No of Children</label>
                                            <div className="add-count">
                                                <button type="button" onClick={() => this.decrement("child")} className="btn btn-danger">-</button>
                                                <input type="number" name="noofChildren" className="form-inp p-0" min={0} step={1} value={noofChildren} readOnly required />
                                                <button type="button" onClick={() => this.increment("child")} className="btn btn-danger">+</button>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <button type="reset" className="contact-btn bg-danger mr-2">Clear</button>
                                            <button type="submit" className="contact-btn">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="choose-box choose-box-border">
                                    <h4 className="choose-box-header">
                                        Ads
                      </h4>
                                    <img src="images/room.jpeg" alt="no image" className="img-thumbnail mb-3" />
                                    <img src="images/resort.jpg" alt="no image" className="img-thumbnail mb-3" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>

        )
    }
}

export default Reservation;
