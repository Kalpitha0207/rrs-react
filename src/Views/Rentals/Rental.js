import React, { Component } from 'react'

export class Rental extends Component {
    state = {
        isChecked: false,
        type: '',
        type2: '',
        fromDate: '',
        toDate: '',
        noOfBikes: 0,
    }

    increment = (val) => {
        const { noOfBikes } = this.state;
        if (noOfBikes >= 0) {
            if (val === "room") {
                this.setState(prevState => {
                    return { noOfBikes: prevState.noOfBikes + 1 }
                });
            }
        }
    }

    decrement = (val) => {
        const { noOfBikes } = this.state;
        if (noOfBikes > 0) {
            if (val === "room") {
                this.setState((prevState, props) => {
                    return { noOfBikes: prevState.noOfBikes - 1 }
                });
            }
        }
    }

    handleCheck = (event) => {
        // let checked = event.target.checked;
        this.setState({
            isChecked: !this.state.isChecked
        })
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
        // this.props.history.push('/payment');
    }

    render() {
        const { isChecked, noOfBikes } = this.state;

        return (
            <>
                {/* Banner home */}
                <section className="home">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="home-content">
                                    <h1 className="home-title">
                                        Rentals and Hikes
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
                                    <h4 className="choose-box-header mb-2">
                                        Rentals and Hikes
                      </h4>
                                    {/* <hr/> */}
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-grp">
                                            <label>The equipment available for rent <span className="text-danger">*</span></label>
                                            <select name="type" defaultValue={'DEFAULT'} onChange={this.handleChange} className="form-inp">
                                                <option value={'DEFAULT'}>Select Option</option>
                                                <option value="1">All-terrain bicycles</option>
                                                <option value="2">Off-road motorcycles</option>
                                                <option value="3">Dune buggies</option>
                                            </select>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" name="lunch" onChange={this.handleCheck} className="custom-control-input" id="picnic" />
                                            <label className="custom-control-label mb-2" htmlFor="picnic">Include a picnic lunch</label>
                                        </div>
                                        {isChecked
                                            ? <div className="form-grp">
                                                <label>Day tours that include a picnic lunch can be scheduled <span className="text-danger">*</span></label>
                                                <select name="type2" defaultValue={'DEFAULT'} onChange={this.handleChange} className="form-inp">
                                                    <option value="DEFAULT">Select Option</option>
                                                    <option value="1">Viewing wildflowers</option>
                                                    <option value="1">Hiking in Palm Canyon</option>
                                                    <option value="1">Off-road guided tours on bicycles, motorcycles, or dune buggies</option>
                                                </select>
                                            </div>
                                            : (null)}
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
                                            <label>No of Bikes</label>
                                            <div className="add-count">
                                                <div className="add-count">
                                                    <button type="button" onClick={() => this.decrement("room")} className="btn btn-danger">-</button>
                                                    <input type="number" name="noOfBikes" className="form-inp p-0" min={0} step={1} value={noOfBikes} readOnly required />
                                                    <button type="button" onClick={() => this.increment("room")} className="btn btn-danger">+</button>
                                                </div>
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
                                    <img src="images/hi4.jpg" alt="no image" className="img-thumbnail mb-3" />
                                    <img src="images/hi5.jpg" alt="no image" className="img-thumbnail mb-3" />
                                    <img src="images/hi1.jfif" alt="no image" className="img-thumbnail mb-3" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>

        )
    }
}

export default Rental;
