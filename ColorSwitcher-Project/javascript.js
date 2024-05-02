const buttons = Array.from(document.querySelectorAll('.button'));
const body = document.querySelector('body');
const message = document.querySelector('#message');

buttons.map(function (button){
  button.addEventListener('click', function (e) {

    body.style.backgroundColor = e.target.id;
    // if (e.target.id === 'grey') {
    //   body.style.backgroundColor = e.target.id;
    //   message.innerText = `Color is ${e.target.id}`
    // }
    // if (e.target.id === 'white') {
    //   body.style.backgroundColor = e.target.id;
    //   message.innerText = `Color is ${e.target.id}`

    // }
    // if (e.target.id === 'blue') {
    //   body.style.backgroundColor = e.target.id;
    //   message.innerText = `Color is ${e.target.id}`
    // }
    // if (e.target.id === 'yellow') {
    //   body.style.backgroundColor = e.target.id;
    //   message.innerText = `Color is ${e.target.id}`
    // }
    // if (e.target.id === 'purple') {
    //   body.style.backgroundColor = e.target.id;
    //   message.innerText = `Color is ${e.target.id}`
    // }
    // if (e.target.id === 'brown') {
    //   body.style.backgroundColor = e.target.id;
    //   message.innerText = `Color is ${e.target.id}`
    // }
    // if (e.target.id === 'orange') {
    //   body.style.backgroundColor = e.target.id;
    //   message.innerText = `Color is ${e.target.id}`
    // }
    // if (e.target.id === 'red') {
    //   body.style.backgroundColor = e.target.id;
    //   message.innerText = `Color is ${e.target.id}`
    // }
    // if (e.target.id === 'pink') {
    //   body.style.backgroundColor = e.target.id;
    //   message.innerText = `Color is ${e.target.id}`
    // }
    // if (e.target.id === 'wheat') {
    //   body.style.backgroundColor = e.target.id;
    //   message.innerText = `Color is ${e.target.id}`
    // }
  });
});
