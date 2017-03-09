import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './components/Carousel';
import './styles/index.css';

import HangImageEmpty from './images/hangmanEmpty.png';
import HangImage00 from './images/hangman00.png';
import HangImage01 from './images/hangman01.png';
import HangImage02 from './images/hangman02.png';
import HangImage03 from './images/hangman03.png';
import HangImage04 from './images/hangman04.png';
import HangImage05 from './images/hangman05.png';
import HangImage06 from './images/hangman06.png';
import HangImage07 from './images/hangman07.png';
import HangImage08 from './images/hangman08.png';
import HangImage09 from './images/hangman09.png';

let imageArray = [HangImageEmpty, HangImage00, HangImage01, HangImage02, HangImage03, HangImage04, HangImage05, HangImage06, HangImage07, HangImage08, HangImage09];
let startIndex= 0;

ReactDOM.render(
  <Carousel imageArray={imageArray} startIndex={startIndex} />,
  document.getElementById('root')
);
