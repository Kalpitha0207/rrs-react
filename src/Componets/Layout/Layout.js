import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import routes from '../../routes'
import Signin from '../../Views/Forms/Signin/Signin'
import Signup from '../../Views/Forms/Signup/Signup'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

export class Layout extends Component {

    getRoutes = (routes) => {
        return routes?.map((route, index) => {
            return route.component ? <Route path={route.path}
                key={index}
                name={route.name}
                exact={route.exact}
                strict={route.strict}
                render={props => <route.component {...props} />}
            /> : (null)
        })
    }

    render() {
        const token = localStorage.getItem("token");
        const name = localStorage.getItem("name");
        const loginType = localStorage.getItem("loginType");
        return (
            <div>
                <Header token={token} name={name} loginType={loginType} />
                {this.getRoutes(routes)}
                <Footer />
                {/* <Signin />
                <Signup /> */}
            </div>
        )
    }
}

export default Layout;
