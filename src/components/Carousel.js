import React, { Component } from 'react';
import ShowImageOfArray from './ShowImageOfArray';
import '../styles/Carousel.css';


const Carousel = ({imageArray, index, jumpTo}) =>{
 
    let dots = (
      <div className="dot-container">
        {
          imageArray.map((element, elementIndex) => {
            let spanCn = "dot normalDot";
            if (elementIndex === index) {
              spanCn = "dot selectedDot";
            }
            return (<span onClick={(e) => {jumpTo(parseInt(e.target.id, 0))}} className={spanCn} key={elementIndex} id={elementIndex}>o</span>);
          })
        }
      </div>
    );
    return (
      <div className="Carousel">
        <div className="photowrapper">
        <ShowImageOfArray array={imageArray} index={index} />
        <span className="aside, aside-1" onClick={() => {jumpTo(index -1 )}}>&larr;</span> <span className="aside, aside-2" onClick={() => {jumpTo(index +1 )}}>&rarr;</span>
        </div>
        <p><span><input type="number" min={0} max={imageArray.length + 1} value={index + 1} onChange={(event) => {jumpTo(event.target.value - 1)}} />/{imageArray.length}</span></p>
        {dots}
      </div>
    );
}

Carousel.propTypes = {
  imageArray: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  index: React.PropTypes.number.isRequired,
  jumpTo : React.PropTypes.func.isRequired
}

export default Carousel;
