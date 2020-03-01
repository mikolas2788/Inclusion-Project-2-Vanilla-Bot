// import sum from './sum';
import axios from 'axios';
const Carousel = require("vanilla-js-carousel");


const main = async () => {
  const res = await axios.get('https://fizal.me/pokeapi/api/v2/name/bulbasaur.json');
  console.log(res.data);
}

var carousel = new Carousel({
  elem: 'carousel',    // id of the carousel container
  autoplay: true,      // starts the rotation automatically
  infinite: true,      // enables infinite mode
  interval: 3500,      // interval between slide changes
  initial: 0,          // slide to start with
  dots: true,          // show navigation dots
  arrows: true,        // show navigation arrows
  buttons: false,      // hide <play>/<stop> buttons,
  btnStopText: 'Pause' // <stop> button text
});

carousel.show(1); 
carousel.next(); 

main();


