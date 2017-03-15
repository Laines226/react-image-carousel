import React from 'react';

const ShowImageOfArray = ({ array, index }) => {

    let imageToShow = array[index];
    return (
        <div className="main" >
            <img src={imageToShow} alt="Hangman" />
        </div>
    );
}

ShowImageOfArray.propTypes = {
    array: React.PropTypes.array.isRequired,
    index: React.PropTypes.number.isRequired
}

export default ShowImageOfArray;