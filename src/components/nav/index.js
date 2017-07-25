import React, { Component } from 'react';

import { NavLink , Router } from 'react-router-dom';
import './nav.css';

class Nav extends Component {
    render(){
        return (
            <div className="nav">
                <div className="col-xs-2">
                    <NavLink to="/search" className="" activeClassName="active">
                        <i className="fa fa-search"></i>
                    </NavLink >
                </div>
                <div className="col-xs-2">
                     <NavLink  to="/home"  className="" activeClassName="active">
                        <i className="fa fa-home"></i>
                    </NavLink >
                </div>
                <div className="col-xs-2">
                     <NavLink  to="/contact"  className="" activeClassName="active">
                        <i className="fa fa-envelope"></i>
                    </NavLink >
                </div>
                <div className="col-xs-2">
                     <NavLink  to="/blog"  className="" activeClassName="active">
                        <i className="fa fa-list"></i>
                    </NavLink >
                </div>
                <div className="col-xs-2">
                     <NavLink  to="/projects"  className="" activeClassName="active">
                        <i className="fa fa-rocket"></i>
                    </NavLink >
                </div>
                <div className="col-xs-2">
                     <NavLink  to="/about"  className="" activeClassName="active">
                        <i className="fa fa-user"></i>
                    </NavLink >
                </div>
            </div>
        )
    }
}

export default Nav;