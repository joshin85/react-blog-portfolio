import React, { Component } from 'react';

import { NavLink , Router } from 'react-router-dom';
import './nav.css';

class Nav extends Component {
    render(){
        return (
            <div className="nav">
                <div className="col-xs-2">
                    <NavLink to="/search" activeClassName="active">
                        <i className="fa fa-search"></i>
                    </NavLink >
                </div>
                <div className="col-xs-2">
                     <NavLink  to="/home" activeClassName="active">
                        <i className="fa fa-home"></i>
                    </NavLink >
                </div>
                <div className="col-xs-2">
                     <NavLink  to="/contact" activeClassName="active">
                        <i className="fa fa-envelope"></i>
                    </NavLink >
                </div>
            </div>
        )
    }
}

export default Nav;