import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];


window.onload = function(onload) {
  
    let whoRandom = who[Math.floor(Math.random() * who.length)];
    let actionRandom = action[Math.floor(Math.random() * action.length)];
    let whatRandom = what[Math.floor(Math.random() * what.length)];
    let whenRandom = when[Math.floor(Math.random() * when.length)];

  console.log("Hello Rigo from the console!");
  document.querySelector('#excuse').innerHTML = `${whoRandom} ${actionRandom} ${whatRandom} ${whenRandom}`;
};
