// imagen de fondo
document.getElementById('parallax').style.backgroundImage = "url('../img/background.jpg')";

window.addEventListener('scroll', function(){
    let parallax = document.getElementById('parallax');
    let scrollPosition = window.scrollY;
    parallax.style.backgroundPositionY = (scrollPosition * 0.7) + 'px';
});