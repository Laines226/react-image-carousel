import React, { Component } from 'react';
import ShowImageOfArray from './ShowImageOfArray';
import '../styles/Carousel.css';


/**
 * Represents a carousel of images
 * @class 
 * 
 * You have to pass an imageArray in Order form left to right!!!
 * 
 * Optional you can set the index of the starting image
 * keep aware the indexes starting at 0,
 * in browser it's shown like the 1st 
 * Default its set to 0 (first image in array)
 * 
 */
class Carousel extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      currentIndex: this.props.startIndex
    }

    this.jumpTo = this.jumpTo.bind(this);
    this.goLeft = this.goLeft.bind(this);
    this.goRight = this.goRight.bind(this);
    this.handleClickOnDot = this.handleClickOnDot.bind(this);
  }
  /**
   * handles the click on a dot
   * @param event
   * event should be an tag with an id attribute
   *  
   */
  handleClickOnDot(event) {
    console.log("clickedOnDot [event.target]", event.target.id);
    this.jumpTo(parseInt(event.target.id, 0));
  }
  /**
   * set the currentIndex - state
   * @param {*} newIndex 
   * shoul be a number between 0 and the length of the array
   * 
   */
  jumpTo(newIndex) {
    console.log("jumpTo", newIndex);
    this.setState({ currentIndex: newIndex });
  }

  /**
   * shows the image to the left
   * under zero its jumps to the index this.props.imageArray.length -1
   * 
   */
  goLeft() {
    let newIndex = this.state.currentIndex - 1
    if (newIndex < 0) {
      newIndex = this.props.imageArray.length - 1;
    }
    this.setState({ currentIndex: newIndex });
  }

  /**
   * shows the image to the right
   * over this.props.imageArray.length -1 its jumps to index zero 
   * 
   */
  goRight() {
    let newIndex = this.state.currentIndex + 1
    if (newIndex >= this.props.imageArray.length) {
      newIndex = 0;
    }
    this.setState({ currentIndex: newIndex });
  }
  render() {
    //onClick={this.jumpTo(index)}
    let dots = (
      <div>
        {
          this.props.imageArray.map((element, index) => {
            let spanCn = "normalDot";
            if (index === this.state.currentIndex) {
              spanCn = "selectedDot";
            }
            return (<span onClick={(e) => this.handleClickOnDot(e)} className={spanCn} key={index} id={index}>o</span>);
          }, this)
        }
      </div>
    );
    return (
      <div className="Carousel">
        <ShowImageOfArray array={this.props.imageArray} index={this.state.currentIndex} />
        <p><span>{this.state.currentIndex + 1}/{this.props.imageArray.length}</span></p>
        <p><span onClick={this.goLeft}>Left</span>     <span onClick={this.goRight}>Right</span></p>
        {dots}
      </div>
    );
  }
}

Carousel.defaultProps = {
  startIndex: 0
}

Carousel.propTypes = {
  imageArray: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  startIndex: React.PropTypes.number
}

export default Carousel;
