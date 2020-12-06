import React, { Component } from 'react'
import { toast } from 'react-toastify';

export class Contact extends Component {
    state = {
        name: '',
        email: '',
        phone: Number,
        subject: '',
        message: '',
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
        const id = document.getElementById("contact");
        id.reset();
        toast.success("We will get back to you soon!...")
    }

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
                                        Contact Us
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
                            <div className="col-md-7">
                                <div className="choose-box about1">
                                    <h4 className="choose-box-header mb-2">
                                        Contact Us Form
                      </h4>
                                    {/* <hr/> */}
                                    <form onSubmit={this.handleSubmit} id="contact">
                                        <div className="form-grp">
                                            <label>Name</label>
                                            <input type="text" name="name" onChange={this.handleChange} className="form-inp" placeholder="Enter your Name" required />
                                        </div>
                                        <div className="form-grp">
                                            <label>Email ID</label>
                                            <input type="email" name="email" onChange={this.handleChange} className="form-inp" placeholder="Enter Email ID" required />
                                        </div>
                                        <div className="form-grp">
                                            <label>Phone</label>
                                            <input type="number" name="phone" onChange={this.handleChange} className="form-inp" placeholder="Enter your phone number" required />
                                        </div>
                                        <div className="form-grp">
                                            <label>Subject</label>
                                            <input type="text" name="subject" onChange={this.handleChange} className="form-inp" placeholder="Enter Subject" required />
                                        </div>
                                        <div className="form-grp" style={{ height: 'auto' }}>
                                            <label>Message</label>
                                            <textarea className="form-inp" name="message" onChange={this.handleChange} rows={3} placeholder="Enter message" style={{ height: 'auto !important' }} defaultValue={""} />
                                        </div>
                                        <div className="text-center">
                                            <button type="submit" className="contact-btn">Submit</button>
                                            {/* <button type="reset" class="contact-btn ml-2">Submit</button> */}
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="choose-box choose-box-border">
                                    {/* <h4 className="choose-box-header">
                                        Ads
                      </h4> */}
                                    <img src="images/resort.jpg" alt="no image" className="img-thumbnail" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>

        )
    }
}

export default Contact;
