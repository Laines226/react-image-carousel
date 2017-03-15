import React from 'react';
import ShowImageOfArray from './ShowImageOfArray';
// import ButtonsForArray from './ButtonsForArray';
import '../styles/Carousel.css';


const Carousel = ({ imageArray, index, jumpTo }) => {
  let maxIndex = imageArray.length -1;
  let dots = [];
  for (let elementIndex = 0; elementIndex < maxIndex + 1; elementIndex++) {
    let spanCn = "dot normalDot";
    if (elementIndex === index) {
      spanCn = "dot selectedDot";
    }
    dots.push(<span onClick={(e) => { jumpTo(parseInt(e.target.id, 0)) }} className={spanCn} key={elementIndex} id={elementIndex}>o</span>);
  }
  return (
    <div className="Carousel">
      <ShowImageOfArray array={imageArray} index={index} />
      <span className="aside aside-1" onClick={() => { jumpTo(index - 1) }}>&larr;</span> <span className="aside aside-2" onClick={() => { jumpTo(index + 1) }}>&rarr;</span>
      <div className="below"><input type="number" min={0} max={maxIndex + 1} value={index + 1} onChange={(event) => { jumpTo(event.target.value - 1) }} />/<span>{maxIndex + 1}</span></div>
      <div className="below"><div className="dot-container">{dots}</div></div>
    </div>
  );
}

Carousel.propTypes = {
  imageArray: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  index: React.PropTypes.number.isRequired,
  jumpTo: React.PropTypes.func.isRequired
}

export default Carousel;
