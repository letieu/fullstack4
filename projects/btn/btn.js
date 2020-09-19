let nextBtn = document.getElementsByClassName('caro__next')[0];
let btnBack = document.getElementsByClassName('caro__back')[0];
let caroWrap = document.getElementsByClassName('caro__wrap')[0];
let btnWidth = document.getElementsByClassName('caro__item')[0].offsetWidth;
let btnNumber = document.getElementsByClassName('caro__item').length;
let caroWidth = document.querySelector('.caro').offsetWidth;
window.onload = init;

function init() {
    nextBtn.addEventListener('click', function() {
        move(false)
    })
    btnBack.addEventListener('click', function() {
        move(true)
    })
    let buttons = document.getElementsByClassName('caro__btn')
    for (let btn of buttons) {
        btn.addEventListener('click', function() {
            for (let b of buttons) {
                b.classList.remove('active')
            }
            this.classList.add('active')
        })
    }
}


function move(right = true) {
    let direct = 1;
    if (!right) direct = -1;
    console.log(btnWidth)
    let curentPos = caroWrap.style.left
    if (curentPos == "") curentPos = 0
    else curentPos = curentPos.substr(0, curentPos.indexOf("px"))
    curentPos = parseInt(curentPos)
    curentPos += direct * btnWidth
    if (curentPos > 0 ) {
        curentPos = -1 * btnWidth * btnNumber + (caroWidth - btnWidth);
        curentPos -= curentPos % btnWidth;
    } 
    else if(curentPos < -1 * btnWidth * (btnNumber - Math.floor(caroWidth / btnWidth))) curentPos = 0
    

    console.log(curentPos)
    caroWrap.style.left = curentPos + "px"

}