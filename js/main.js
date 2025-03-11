const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBthImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBthImg.src = '/img/icon/NAVCLOSE.svg'
    } else {
        navBthImg.src = '/img/icon/NAV.svg'
    }
}

AOS.init();