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
  }
  /**
   * set the currentIndex - state
   * @param {*} newIndex 
   * shoul be a number between 0 and the length of the array
   * 
   */
  jumpTo(newIndex) {
    if (newIndex >= this.props.imageArray.length) {
      newIndex = 0;
    }
    else if (newIndex < 0) {
      newIndex = this.props.imageArray.length - 1;
    }
    console.log("jumpTo", newIndex);
    this.setState({ currentIndex: newIndex });
  }

  render() {
    //onClick={this.jumpTo(index)}
    let dots = (
      <div className="dot-container">
        {
          this.props.imageArray.map((element, index) => {
            let spanCn = "dot normalDot";
            if (index === this.state.currentIndex) {
              spanCn = "dot selectedDot";
            }
            return (<span onClick={(e) => {this.jumpTo(parseInt(e.target.id, 0))}} className={spanCn} key={index} id={index}>o</span>);
          }, this)
        }
      </div>
    );
    return (
      <div className="Carousel">
        <div className="photowrapper">
        <ShowImageOfArray array={this.props.imageArray} index={this.state.currentIndex} />
        <span className="aside, aside-1" onClick={() => {this.jumpTo(this.state.currentIndex -1 )}}>&larr;</span> <span className="aside, aside-2" onClick={() => {this.jumpTo(this.state.currentIndex +1 )}}>&rarr;</span>
        </div>
        <p><span><input type="number" min={0} max={this.props.imageArray.length + 1} value={this.state.currentIndex + 1} onChange={(event) => {this.jumpTo(event.target.value - 1)}} />/{this.props.imageArray.length}</span></p>
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
