import React from 'react';
import ShowImageOfArray from './ShowImageOfArray';

const ButtonsForArray = ({ index, maxIndex, onClick }) => {
    let dots = [];
    for (let elementIndex = 0; elementIndex < maxIndex; elementIndex++) {
        let spanCn = "dot normalDot";
        if (elementIndex === index) {
            spanCn = "dot selectedDot";
        }
        dots.push(<span onClick={(e) => { onClick(parseInt(e.target.id, 0)) }} className={spanCn} key={elementIndex} id={elementIndex}>o</span>);
    }
    return (
        <div>
            <span className="aside aside-1" onClick={() => { onClick(index - 1) }}>&larr;</span> <span className="aside aside-2" onClick={() => { onClick(index + 1) }}>&rarr;</span>
            <div className="below"><input type="number" min={0} max={maxIndex + 2} value={index + 1} onChange={(event) => { onClick(event.target.value - 1) }} />/<span>{maxIndex + 1}</span></div>
            <div className="below"><div className="dot-container">{dots}</div></div>
        </div>
    );
}

ButtonsForArray.defaultProps = {
    index: React.PropTypes.number.isRequired,
    maxIndex: React.PropTypes.number.isRequired,
    onClick: React.PropTypes.func.isRequired
};

export default ButtonsForArray;