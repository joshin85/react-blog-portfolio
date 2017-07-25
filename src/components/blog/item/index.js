import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './item.css';

class BlogItem extends Component {

  constructor(state){
    super(state);
  }

  render() {
    console.log(this.props);
    return (
      <div className="blog-item card card-button col-md-12">          
          <div className="toggle top-right">
            <i className="far fa-expand"></i>
          </div>
          <div className="card-title row">
            <div className="col-md-9">
              {this.props.props.title}
            </div>
            <div className="social col-md-3 toggle">
              <a className="circle-icon twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="circle-icon facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="circle-icon linkedin">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="card-body">
            {this.props.props.body}
          </div>
      </div>
    );
  }
}

export default BlogItem;
