import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class Home extends Component {
    render() {
        return (
            <>
                {/* Banner home */}
                <section className="home">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="home-content">
                                    <h1 className="home-title">
                                        Room Reservation, Restaurant and Rentals and Hiking
            </h1>
                                    <h6 className="home-subtitle">
                                        Resort Reservation System is for all the fanatics out there who are bored sitting at home,
                                        waiting in long
                                        lines outside supermarkets or attending work meetings.
            </h6>
                                    <h6 className="home-subtitle">
                                        Resort Reservation System enables fanatics to learn something quickly or even share their
                                        skills with others.
            </h6>
                                    {/* <div class="w-100 position-relative mt-4 d-flex">
                      <button class="home-btn mr-2">Hop on</button>
                      <button class="home-btn home-btn1">Book</button>
                  </div> */}
                                    <hr className="home-hr" />
                                    <p className="home-link m-0">
                                        RRS
            </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="home-img">
                                    <img src="images/1.jpg" alt="home-img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* sessions */}
                <section className="choose">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-4">
                                <div className="choose-box choose-box-border">
                                    <h4 className="choose-box-header">
                                        Room Reservation
            </h4>
                                    <p className="choose-box-content">
                                        Looking for a stay in Borrego Springs? <br />
              We have various options to plan your stay.
            </p>
                                    <NavLink to='/reservation' className="choose-box-link">
                                        Book now <i className="fas fa-long-arrow-alt-right pl-3" />
                                    </NavLink>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="choose-box">
                                    <h4 className="choose-box-header">
                                        Restaurant
            </h4>
                                    <p className="choose-box-content">
                                        Wondering what to eat? <br />
              We have lot of cuisines to meet your taste.
            </p>
                                    <NavLink to='/restaurant' className="choose-box-link">
                                        Order Now <i className="fas fa-long-arrow-alt-right pl-3" />
                                    </NavLink>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="choose-box choose-box-border">
                                    <h4 className="choose-box-header">
                                        Rentals and Hiking
            </h4>
                                    <p className="choose-box-content">
                                        Planning to explore the place? <br />
              We have equipment and packages that suit your need.
            </p>
                                    <NavLink to='/rentals' className="choose-box-link">
                                        Try Now <i className="fas fa-long-arrow-alt-right pl-3" />
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="choose p-0">
                    <div className="orders">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <div className="order-box">
                                        <p className="order-subtitle">
                                            RRS
              </p>
                                        <h3 className="order-title">
                                            Room Reservation
                <br />
                Looking for a stay in Borrego Springs?
              </h3>
                                        <p className="order-content">
                                            We have 45 rooms, some with the view of the dessert and some with the view of the Salton
                                            sea
                <br /><br />
                Rooms as comfortable as your Home!
              </p>
                                        <div className="w-100">
                                            <NavLink to="/reservation">
                                                <button className="order-btn mr-2">
                                                    Book Now
                    <i className="fas fa-long-arrow-alt-right pl-3" />
                                                </button>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 pl-0">
                                    <div className="order-box text-center">
                                        <img src="images/room.jpeg" alt="no img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="orders orders1">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-6 order-last order-md-first pr-0">
                                    <div className="order-box">
                                        <img src="images/ho3.jpg" alt="no img" />
                                    </div>
                                </div>
                                <div className="col-md-6 order-first order-md-last">
                                    <div className="order-box order-box1">
                                        <p className="order-subtitle">
                                            RRS
              </p>
                                        <h2 className="order-title">
                                            Restaurant
                <br />
                Wondering what to eat?
              </h2>
                                        <p className="order-content">
                                            To live a full life, you have to fill your stomach first.
                <br /> <br />
                We have lot of cuisines to meet your taste.
              </p>
                                        <div className="w-100">
                                            <NavLink to="/restaurant">
                                                <button className="order-btn order-btn1 mr-2">
                                                    Order Now
                    <i className="fas fa-long-arrow-alt-right pl-3" />
                                                </button>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="orders">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <div className="order-box">
                                        <p className="order-subtitle">
                                            RRS
              </p>
                                        <h3 className="order-title">
                                            Rentals and Hiking
                <br />
                Planning to explore the place?
              </h3>
                                        <p className="order-content">
                                            Along with the special shoes and bicycles for hiking, you will need a bit of special
                                            soul as well.
                <br /><br />
                Get the soul. and let us take care of the equipment for you.
              </p>
                                        <div className="w-100">
                                            <NavLink to="/rentals">
                                                <button className="order-btn mr-2">
                                                    Try Now
                    <i className="fas fa-long-arrow-alt-right pl-3" />
                                                </button>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 pl-0">
                                    <div className="order-box text-center">
                                        <img src="images/hi4.jpg" alt="no img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Home
