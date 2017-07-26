import React, { Component } from 'react';

import { NavLink , Router } from 'react-router-dom';
import './nav.css';

class Nav extends Component {
    render(){
        return (
            <div className="nav">               
                <div className="col-xs-2">
                     <NavLink  to="/home"  className="" activeClassName="active">
                        <i className="far fa-home"></i>
                    </NavLink >
                </div>
                 <div className="col-xs-2">
                    <NavLink to="/search" className="" activeClassName="active">
                        <i className="far fa-search"></i>
                    </NavLink >
                </div>
                <div className="col-xs-2">
                     <NavLink  to="/contact"  className="" activeClassName="active">
                        <i className="far fa-envelope"></i>
                    </NavLink >
                </div>
                <div className="col-xs-2">
                     <NavLink  to="/blog"  className="" activeClassName="active">
                        <i className="far fa-list"></i>
                    </NavLink >
                </div>
                <div className="col-xs-2">
                     <NavLink  to="/projects"  className="" activeClassName="active">
                        <i className="far fa-rocket"></i>
                    </NavLink >
                </div>
                <div className="col-xs-2">
                     <NavLink  to="/about"  className="" activeClassName="active">
                        <i className="far fa-user"></i>
                    </NavLink >
                </div>
            </div>
        )
    }
}

export default Nav;