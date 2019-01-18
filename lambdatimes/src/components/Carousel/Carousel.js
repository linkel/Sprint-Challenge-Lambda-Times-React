import React, { Component } from 'react';
import { carouselData } from '../../data'

// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentIdx : 0,
      images : []
    }
  }
  componentDidMount(){
    this.setState({images:carouselData});
  }

  leftClick = () => {
    if (this.state.currentIdx === 0){
      this.setState({currentIdx : 3})
    } else {
      this.setState({currentIdx: this.state.currentIdx - 1})
    }
  }

  rightClick = () => {
    if (this.state.currentIdx === 3){
      this.setState({currentIdx : 0})
    } else {
      this.setState({currentIdx: this.state.currentIdx + 1})
    }
  }

  selectedImage = () => {
    return <img alt="carousel" src={this.state.images[this.state.currentIdx]} style={{display: 'block'}} />
  }
  
  render(){
    return (
      <div className="carousel">
        {this.selectedImage()}
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}