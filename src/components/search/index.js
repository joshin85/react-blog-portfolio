import React, { Component } from 'react';

import { NavLink , Router } from 'react-router-dom';
import pageImage from '../../images/page.png';
import './search.css';

import './'

class Search extends Component {
    render(){
        return (
            <div className="search">
                <div className="search-bar">
                    <input type="text" placeholder="Search..."/>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card-button">
                            <div className="card-img"><img src={pageImage}/></div>
                            <div className="card-title"> Android Messenger </div>
                            <div className="card-body"> ...<span>Android messenger takes heavy advantage of nodejs and</span> <b> javascript </b> <span>taking full advantage of the asychronous nature of </span><b> javascript </b>...</div>                        
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;