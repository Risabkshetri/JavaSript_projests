const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', function(){
   const hamIcon = this.querySelector('.hamburger-icon');
   const crossIcon = this.querySelector('.cross-icon');

   if( hamIcon.style.display === 'none'){
	hamIcon.style.display = 'inline-block';
    crossIcon.style.display = 'none';
    menu.style.display = 'none';
   }
   else{
	crossIcon.style.display = 'inline-block';
	menu.style.display = 'block';
	hamIcon.style.display = 'none';

   }
});

