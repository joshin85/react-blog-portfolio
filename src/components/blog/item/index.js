import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './item.css';

class BlogItem extends Component {

  constructor(state){
    super(state);
    this.state = state;
    this.toggle = this.toggle.bind(this);
    this.open = this.open.bind(this);
  }

  open(event) {
    this.state.props.active = true;
    this.setState(this.state);
    event.stopPropagation();
  }

  toggle(event) {
    this.state.props.active = !this.state.props.active;
    this.setState(this.state);
    event.stopPropagation();
  }

  render() {
    return (
      <div className={"blog-item card col-md-12 " + (this.state.props.active ? 'active' : 'card-button')} onClick={this.open}>          
          <div className="top-left" onClick={this.toggle}>
            <i className="far fa-chevron-circle-down toggle"></i>
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
            <div className="blog-fade"></div>
            <div className="blog-description">
              {this.props.props.body}
            </div>
          </div>
      </div>
    );
  }
}

export default BlogItem;
