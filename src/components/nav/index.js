import React, { Component } from 'react';

import { NavLink , Router } from 'react-router-dom';
import './nav.css';

class Nav extends Component {
    render(){
        return (
            <div className="nav">
                <div className="col-xs-2">
                    <a to="/search" className="disabled" activeClassName="active">
                        <i className="fa fa-search"></i>
                    </a >
                </div>
                <div className="col-xs-2">
                     <a  to="/home"  className="disabled" activeClassName="active">
                        <i className="fa fa-home"></i>
                    </a >
                </div>
                <div className="col-xs-2">
                     <a  to="/contact"  className="disabled" activeClassName="active">
                        <i className="fa fa-envelope"></i>
                    </a >
                </div>
            </div>
        )
    }
}

export default Nav;