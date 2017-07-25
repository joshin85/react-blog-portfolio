import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './item.css';

class BlogItem extends Component {

  constructor(state){
    super(state);
    console.log(state.props);
    this.props = state.props;
    
  }

  render() {
    console.log(this.props);
    return (
      <div className="blog-item card col-md-12"> 
          <div className="card-title">
            {this.props.props.title}
          </div>
          <div className="card-body">
            {this.props.props.body}
          </div>
      </div>
    );
  }
}

export default BlogItem;
