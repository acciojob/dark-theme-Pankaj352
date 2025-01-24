const swapbtn = document.getElementById('swap');
const bgScreen = document.getElementById('app');

swapbtn.addEventListener('click', () => {
  
  bgScreen.classList.toggle('night');

  if (bgScreen.classList.contains('night')) {
    swapbtn.classList.remove('button_day');
    swapbtn.classList.add('button_night');
  } else {
    swapbtn.classList.remove('button_night');
    swapbtn.classList.add('button_day');
  }
});
