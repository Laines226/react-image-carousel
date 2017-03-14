import React, { Component } from 'react';

class ShowImageOfArray extends Component {

    render() {
        let imageToShow = this.props.array[this.props.index];
        return (
            <div className="main" >
                <img src={imageToShow} alt="Hangman" />
            </div>
        );
    }
}

ShowImageOfArray.propTypes = {
    array : React.PropTypes.array.isRequired,
    index: React.PropTypes.number.isRequired
}

export default ShowImageOfArray;