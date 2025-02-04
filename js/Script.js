const Toggle = document.getElementById("toggle");
const navig = document.getElementById("Navig")
const Close = document.getElementById("toggleClose");

console.log(Toggle);


Toggle.addEventListener('click', () => {
    navig.style.right='0px';
    console.log('clicked');
    Toggle.style.right='-600px';
    Close.style.right='40px';

})

Close.addEventListener('click', () => {
    navig.style.right='-600px';
    console.log('clicked');
    Toggle.style.right='40px';
    Close.style.right='-600px';

})