import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
const $ = window.$;

export class Header extends Component {

    signin = () => {
        // $('#login').modal('show');
        $('#login').modal({
            keyboard: false
        })
        // $('#myModal').modal('hide');
    }
    signup = () => {
        // $('#register').modal('show');
        $('#register').modal({
            keyboard: false
        })
    }

    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg fixed-top">
                    <div className="container">
                        <a className="navbar-brand" href="/index.html">
                            <h4 className="logo">RRS</h4>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fas fa-bars" />
                        </button>
                        <div className="collapse navbar-collapse" id="menu">
                            <ul className="navbar-nav mx-auto custom-navbar-nav">
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
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <button className="nav-btn" type="button" onClick={this.signup}>Sign
            Up</button>
                                <button className="nav-btn nav-btn1" type="button" onClick={this.signin}>Sign
            In</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </header>

        )
    }
}

export default Header
