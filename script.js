//your code here

const swapbtn=document.getElementById('swap');
const bgScreen=document.getElementById('app');


swapbtn.addEventListener('click', ()=>{
	bgScreen.classList.add('night');
	swapbtn.classList.remove('button_night');
	swapbtn.classList.remove('night');
})

