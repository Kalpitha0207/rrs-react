import React, { Component, PureComponent } from 'react';
import { Link, NavLink } from 'react-router-dom';
const $ = window.$;

export class Header extends PureComponent {

    // signin = () => {
    //     // $('#login').modal('show');
    //     // $('#login').modal({
    //     //     keyboard: false
    //     // })
    //     // $('#myModal').modal('hide');
    //     this.props.history.push('/signin');
    // }
    // signup = () => {
    //     // $('#register').modal('show');
    //     // $('#register').modal({
    //     //     keyboard: false
    //     // })
    //     this.props.history.push('/signin');
    // }

    logout = () => {
        localStorage.clear();
    }

    render() {
        var { token, name, loginType } = this.props;
        return (
            <header>
                <nav className="navbar navbar-expand-lg fixed-top">
                    <div className="container">
                        <Link className="navbar-brand" to="">
                            <h4 className="logo">RRS</h4>
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fas fa-bars" />
                        </button>
                        <div className="collapse navbar-collapse" id="menu">
                            {!loginType ? <ul className="navbar-nav mx-auto custom-navbar-nav">
                                <li className="nav-item" >
                                    <NavLink to='/' exact className="nav-link" activeClassName='active'>Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/reservation' className="nav-link" activeClassName='active'>Reservations</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/rentals' className="nav-link" activeClassName='active'>Rentals and Hikes</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/restaurant' className="nav-link" activeClassName='active'>Restaurant</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/contact' className="nav-link" activeClassName='active'>Contact Us</NavLink>
                                </li>
                            </ul> :
                                <ul className="navbar-nav mx-auto custom-navbar-nav">
                                    <li className="nav-item">
                                        <NavLink to='/reports' className="nav-link" activeClassName='active'>Reports</NavLink>
                                    </li>
                                </ul>}
                            <form className="form-inline my-2 my-lg-0">
                                {token ? <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="far fa-user-circle"></i> {name}
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        {!loginType ? <NavLink to="/details" className="dropdown-item">Booking Details</NavLink> : null}
                                        <NavLink to="/" className="dropdown-item" onClick={this.logout}>Logout</NavLink>
                                    </div>
                                </div>
                                    : <div>
                                        <NavLink to='/signup'>
                                            <button className="nav-btn" type="button" >
                                                Sign Up
                                    </button>
                                        </NavLink>
                                        <NavLink to='/signin'>
                                            <button className="nav-btn nav-btn1" type="button">
                                                Sign In
                                    </button>
                                        </NavLink>
                                    </div>
                                }

                                {/* {loginType && loginType ==="admin" ? <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="far fa-user-circle"></i> {name}
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <NavLink to="/details" className="dropdown-item">Booking Details</NavLink>
                                        <NavLink to="/" className="dropdown-item" onClick={this.logout}>Logout</NavLink>
                                    </div>
                                </div>
                                    :null} */}

                            </form>
                        </div>
                    </div>
                </nav>
            </header>

        )
    }
}

export default Header
