import React, { Component } from 'react';
import { toast } from 'react-toastify';
import Axios from '../../hoc/axios';

export class Restaurant extends Component {

    state = {
        select: "1",
        noOfMeal: 0,
        guestName: '',
        guestRoomNo: Number,
        date: Date,
        noOfPeople: 0,
        specialRequest: '',
        serverName: '',
        tip: Number,
        total: Number
    }

    handleCheck = (event) => {
        let value = event.target.value;
        this.setState({
            select: value
        });
    }

    increment = (val) => {
        const { noOfMeal, noOfPeople } = this.state;
        if (noOfMeal >= 0 || noOfPeople >= 0) {
            if (val === "meal") {
                this.setState(prevState => {
                    return { noOfMeal: prevState.noOfMeal + 1 }
                });
            } else {
                this.setState(prevState => {
                    return { noOfPeople: prevState.noOfPeople + 1 }
                });
            }
        }
    }

    decrement = (val) => {
        const { noOfMeal, noOfPeople } = this.state;
        if (noOfMeal > 0 || noOfPeople > 0) {
            if (val === "meal") {
                this.setState((prevState, props) => {
                    return { noOfMeal: prevState.noOfMeal - 1 }
                });
            } else {
                this.setState((prevState, props) => {
                    return { noOfPeople: prevState.noOfPeople - 1 }
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
        const { select, noOfMeal, guestName, guestRoomNo, date, specialRequest, noOfPeople, serverName, tip, total } = this.state;
        const type = select === "1" ? "Meal Reservation" : "Charge to Room";
        if (select === "1") {
            if (noOfPeople === 0) {
                toast.error("Please select no of Bikes");
                return;
            }
            const body = {
                userId: localStorage.getItem("id"),
                type: type,
                guestName: guestName,
                roomNo: parseInt(guestRoomNo),
                reservationDate: date,
                noOfPeople: noOfPeople,
                specialRequest: specialRequest
            }
            const URl = "reservation/mealReservation";
            Axios.post(URl, body)
                .then(res => {
                    const clear = document.getElementById("form");
                    clear.reset();  
                    toast.success("Meal Reservation not completed!");
                    this.setState({
                        noOfPeople: 0
                    })
                    // this.props.history.push('/payment');
                })
                .catch(err => {
                    const error = err.response?.data?.errors.message;
                    toast.error(error);
                })            
        } else {
            if (noOfMeal === 0) {
                toast.error("Please select no of People");
                return;
            }
            const body = {
                userId: localStorage.getItem("id"),
                type: type,
                guestName: guestName,
                roomNo: parseInt(guestRoomNo),
                serverName: serverName,
                tipToServer: parseInt(tip),
                noOfPeople: noOfMeal,
                total:parseInt(total)
            }
            const URl = "reservation/chargeToRoom";
            Axios.post(URl, body)
                .then(res => {
                    console.log(res);
                    toast.success("Charge to Room is successful");
                    localStorage.setItem("charge", JSON.stringify(res.data.success.data));
                    this.props.history.replace('/paymentRoomCharge');
                })
                .catch(err => {
                    const error = err.response?.data?.errors.message;
                    toast.error(error);
                })
            
        }
    }

    render() {
        const { isChecked, noOfMeal, noOfPeople, select } = this.state;
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
                                        Restaurant
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
                                        Restaurant
            </h4>
                                    {/* <hr/> */}
                                    <form onSubmit={this.handleSubmit} id="form">
                                        <div className="form-group row m-0 mb-4">
                                            <div className="custom-control custom-radio custom-control-inline col">
                                                <input type="radio" id="Reservation" name="Reservation"
                                                    checked={select === "1" ? true : false} value={"1"}
                                                    onChange={this.handleCheck} className="custom-control-input" />
                                                <label className="custom-control-label" htmlFor="Reservation">Meal Reservation</label>
                                            </div>
                                            <div className="custom-control custom-radio custom-control-inline col">
                                                <input type="radio" id="Reservation1" name="Reservation"
                                                    checked={select === "2" ? true : false}
                                                    value={"2"} onChange={this.handleCheck} className="custom-control-input" />
                                                <label className="custom-control-label" htmlFor="Reservation1">Charge to Room</label>
                                            </div>
                                        </div>
                                        {select === "1"
                                            ? <div>
                                                <h4 className="font-weight-bold">Meal Reservation</h4>
                                                <div className="form-grp">
                                                    <label>Guest name <span className="text-danger">*</span></label>
                                                    <input type="text" name="guestName" onChange={this.handleChange} className="form-inp" placeholder="Please enter Guest Name" required />
                                                </div>
                                                <div className="form-grp">
                                                    <label>Guest room number <span className="text-danger">*</span></label>
                                                    <input type="number" name="guestRoomNo" onChange={this.handleChange} className="form-inp" placeholder="Please enter Guest room number" required />
                                                </div>
                                                <div className="form-grp">
                                                    <label>Date and time of reservation <span className="text-danger">*</span></label>
                                                    <input type="date" name="date" onChange={this.handleChange} className="form-inp" required />
                                                </div>
                                                <div className="form-grp form-flex">
                                                    <label>Number of People</label>
                                                    <div className="add-count">
                                                        <div className="add-count">
                                                            <button type="button" onClick={() => this.decrement("room")} className="btn btn-danger">-</button>
                                                            <input type="number" name="noOfPeople" className="form-inp p-0" min={0} step={1} value={noOfPeople} readOnly required />
                                                            <button type="button" onClick={() => this.increment("room")} className="btn btn-danger">+</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-grp" style={{ height: 'auto' }}>
                                                    <label>Any special requests <span className="text-danger">*</span></label>
                                                    <textarea name="specialRequest" onChange={this.handleChange} className="form-inp" rows={3} style={{ height: 'auto !important', border: '1px solid grey' }} placeholder="Please enter Any special requests" defaultValue={""} />
                                                </div>
                                            </div>
                                            : <div>
                                                <h4 className="font-weight-bold">Charge To Room</h4>
                                                <div className="form-grp">
                                                    <label>Guest name <span className="text-danger">*</span></label>
                                                    <input type="text" name="guestName" onChange={this.handleChange} className="form-inp" placeholder="Please enter Guest Name" required />
                                                </div>
                                                <div className="form-grp">
                                                    <label>Guest room number <span className="text-danger">*</span></label>
                                                    <input type="number" name="guestRoomNo" onChange={this.handleChange} className="form-inp" placeholder="Please enter Guest room number" required />
                                                </div>
                                                <div className="form-grp">
                                                    <label>Server name <span className="text-danger">*</span></label>
                                                    <input type="text" name="serverName" onChange={this.handleChange} className="form-inp" placeholder="Please enter Guest Name" required />
                                                </div>
                                                <div className="form-grp form-flex">
                                                    <label>Number of people at the meal</label>
                                                    <div className="add-count">
                                                        <button type="button" onClick={() => this.decrement("meal")} className="btn btn-danger">-</button>
                                                        <input type="number" name="noOfMeal" className="form-inp p-0" min={0} step={1} value={noOfMeal} readOnly required />
                                                        <button type="button" onClick={() => this.increment("meal")} className="btn btn-danger">+</button>
                                                    </div>
                                                </div>
                                                <div className="form-grp">
                                                    <label>Tip provided to the server</label>
                                                    <input type="number" name="tip" onChange={this.handleChange} className="form-inp" placeholder="Please enter Tip provided to the server" required />
                                                </div>
                                                <div className="form-grp">
                                                    <label>Bill total <span className="text-danger">*</span></label>
                                                    <input type="number" name="total" onChange={this.handleChange} className="form-inp" placeholder="Please enter Tip provided to the server" required />
                                                </div>
                                            </div>}
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
                                    <img src="images/ho1.jpg" alt="no image" className="img-thumbnail mb-3" />
                                    <img src="images/ho2.jpg" alt="no image" className="img-thumbnail mb-3" />
                                    <img src="images/ho3.jpg" alt="no image" className="img-thumbnail mb-3" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>

        )
    }
}

export default Restaurant;
