import React, { Component } from 'react';
import { toast } from 'react-toastify';
import Axios from '../../hoc/axios';

export class Rooms extends Component {
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
        const URl = "admin/getAvaibleRooms";
        Axios.get(URl)
            .then(res => {
                this.setState({
                    data: res.data?.success.data
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
    render() {
        return (
            <>
                <section className="home">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="home-content">
                                    <h1 className="home-title">
                                        Search Room
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
                        <div className="row">
                            {this.state.data?.length > 0 ? this.state.data?.map(item =>
                                <div className="col-md-3">
                                    <div className="design-box">
                                        <img src="images/resort.jpg" alt="no img" className="design-img" />
                                        <div className="design-body">
                                            <p className="design-name">
                                                Room - {item.roomNo}
                                                <span className="float-right">
                                                    ${item.roomFare}
                                                </span>
                                            </p>
                                            <div className="row m-0 align-items-center">
                                                <div className="col p-0">
                                                    <p className="design-date">
                                                        {item.roomType}
                                                    </p>
                                                    <p className="design-date">
                                                        {item.description}
                                                    </p>
                                                    <p className="design-date">
                                                        Beds: {item.noOfBeds}
                                                    </p>
                                                    <p className="design-date">
                                                        Max Adults: {item.noOfAdults}
                                                    </p>
                                                    <p className="design-date">
                                                        Max Children: {item.noOfChildren}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="row m-0 align-items-center">
                                                <div className="col p-0">
                                                    <p className="design-date">
                                                        {item.roomNo}
                                                    </p>
                                                </div>
                                                <div className="col-4 p-0 text-right">
                                                    <button className="btn free">
                                                        Book Now
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                                : "No Rooms available"}
                        </div>
                    </div>
                </section>

            </>
        )
    }
}

export default Rooms;
