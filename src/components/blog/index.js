import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './blog.css';

import BlogItem from './item';
const props = {
          data : [
            {
                "title" : "ECMAScript 2017",
                "description" : "A brief overview of the features of ECMAScript 2017 that I believe will be the most useful",
                "body" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            },{
                "title" : "ECMAScript 2017",
                "description" : "A brief overview of the features of ECMAScript 2017 that I believe will be the most useful",
                "body" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            },{
                "title" : "ECMAScript 2017",
                "description" : "A brief overview of the features of ECMAScript 2017 that I believe will be the most useful",
                "body" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            },{
                "title" : "ECMAScript 2017",
                "description" : "A brief overview of the features of ECMAScript 2017 that I believe will be the most useful",
                "body" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            },{
                "title" : "ECMAScript 2017",
                "description" : "A brief overview of the features of ECMAScript 2017 that I believe will be the most useful",
                "body" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            },{
                "title" : "ECMAScript 2017",
                "description" : "A brief overview of the features of ECMAScript 2017 that I believe will be the most useful",
                "body" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            },{
                "title" : "ECMAScript 2017",
                "description" : "A brief overview of the features of ECMAScript 2017 that I believe will be the most useful",
                "body" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            },{
                "title" : "ECMAScript 2017 Javascript",
                "description" : "A brief overview of the features of ECMAScript 2017 that I believe will be the most useful",
                "body" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
        ]
    }
class Blog extends Component {

  constructor(state){
    super();    
    this.state = {
        data : props.data
    }
    this.filterList = this.filterList.bind(this);
  }

  filterList(event){
    var updatedList = props.data;
    updatedList = updatedList.filter(function(item){
      return item.title.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({data: updatedList});
  }

  render() {
    return (
        <div className="blog row">
            <div className="card filter-bar">
                <i className="far fa-search"></i>
                <input type="text" placeholder="Search" onChange={this.filterList}/>
            </div>
        {this.state.data.map((blogItem) => {
        return <BlogItem props={blogItem}/>
        })}
      </div>
    );
  }
}

export default Blog;
