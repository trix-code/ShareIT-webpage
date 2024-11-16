
let backgrounds = ['img/bg1.png', 'img/bg2.png', 'img/bg3.png'];
let currentBg = 0;

window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight * 0.5 && currentBg < backgrounds.length - 1) {
        currentBg++;
        document.getElementById('background').style.backgroundImage = `url(${backgrounds[currentBg]})`;
    } else if (window.scrollY < window.innerHeight * 0.5 && currentBg > 0) {
        currentBg--;
        document.getElementById('background').style.backgroundImage = `url(${backgrounds[currentBg]})`;
    }
});
