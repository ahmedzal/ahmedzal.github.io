let text = document.getElementById('text');
let bg1 = document.getElementById('bg1');
let bg2 = document.getElementById('bg2');
let bg3 = document.getElementById('bg3');
let bg12 = document.getElementById('bg12');
let bg22 = document.getElementById('bg22');
let bg32 = document.getElementById('bg32');
let blurb = document.getElementById('blurb');
//let parallax = document.getElementsByClassName('parallax');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 1.5 + 'px';
    bg3.style.marginTop = value * -1 + 'px';
    bg32.style.marginTop = value * -1 + 'px';
    bg2.style.marginTop = value * -0.7 + 'px';
    bg22.style.marginTop = value * -0.7 + 'px';
    bg1.style.marginTop = value * -0.5 + 'px';
    bg12.style.marginTop = value * -0.5 + 'px';
    //parallax.style.marginTop = value  + 'px';

    //blurb.style.marginTop = -1 *value + 'px';
});