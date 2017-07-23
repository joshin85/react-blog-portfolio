import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import profile from '../../images/profile.png'
class Home extends Component {

  constructor(){
    super();
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="home-splash">
            <div className="col-md-4 col-md-offset-4">
              <div className="card">
                <h2>Shinjo Melosh</h2>
              </div>
                <div className="card-image">
                  <img src={profile}/>  
              </div>
            </div>
          
          </div>       
        </div>
        <div className="row">
          <div className="col-md-4">
            <Link to="blog">
              <div className="card-button">
                <h2> Blog </h2>
                <i className="fa fa-list fa-3x"></i>
              </div>
            </Link>
          </div>   
          <div className="col-md-4">
            <Link to="projects">
                <div className="card-button">
                  <h2> Projects </h2>
                  <i className="fa fa-rocket fa-3x"></i>
                </div>
            </Link>
          </div>  
          <div className="col-md-4">
            <Link to="about">
              <div className="card-button">
                <h2> About Me </h2>
                <i className="fa fa-user fa-3x"></i>
              </div>
            </Link>
          </div>

        </div>
      </div>
    );
  }
}

export default Home;
