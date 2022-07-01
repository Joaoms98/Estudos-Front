const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval (() => {

    const pipePosition =  pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 75 && pipePosition > 0 && marioPosition <80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src='/assets/images/blood-transfusion-red-blood-cell-red-blood-cell-blood-d723c01ba00b9eb63ddc8b9d642a15cb.png'
        mario.style.width ='150px'

        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', jump);