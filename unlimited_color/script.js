// generate a random  color

const randomColor = function () {
    const hex = '0123456789ABCDF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  let intervalId;
  const startChangingcolor = () => {
   if(!intervalId) {
    intervalId = setInterval(changbgColor, 100);
   }
    function changbgColor() {
      document.body.style.backgroundColor = randomColor();
    }
  };
  const stopChangingcolor = () => {
    clearInterval(intervalId);
    intervalId = null;
  };
  document.querySelector('#start').addEventListener('click', startChangingcolor);
  document.querySelector('#stop').addEventListener('click', stopChangingcolor);
  