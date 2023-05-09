//Adds a listener to the  html button
const btn = document.querySelector('#btn');
btn.onclick = () => alert(`Hello world!`);
//However this method only allows for 1 onclick property.

//Better method
const btn2 = document.querySelector('#btn2');
//btn2.addEventListener(`click`, () => {
//    alert(`Hello world`);
//});
btn2.addEventListener('click', function(e) {
    console.log(e);
    console.log(e.target);
    e.target.style.background = 'blue';
});

//function(e) is  a callback from the addEventListener

const buttons = document.querySelectorAll('button');

buttons.forEach( (button) => {
    button.addEventListener('click', () => {
        console.log(button.id);
    });
});