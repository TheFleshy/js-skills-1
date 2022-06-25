/**
 * Responsive menu
 */


const mobileMenu = () => {
    let menu = document.querySelector ('.header ul');
    let btn = document.querySelector ('.header button');

    if(btn.innerText === 'MENU'){
        menu.style.display = 'block';
        btn.innerText = 'CLOSE';
    } else{
        menu.style.display = 'none';
        btn.innerText = 'MENU';
    }
}

/**
 * galery
 */

let rightBtn = document.querySelector('#right-btn');
let leftBtn = document.querySelector('#left-btn');
let pictures = document.querySelectorAll ('.slider-images img');

let imgNum = 0;

// Mesteme gi slikite na desno
const moveRight = () => {
    displayNone(pictures);
    imgNum++;

    if (imgNum === pictures.length){
        imgNum = 0;
    }
    pictures[imgNum].style.display = 'block';
}
// Mesteme gi slikite na levo
const moveLeft = () => {
    displayNone ();
    imgNum--;

    if(imgNum === -1){
        imgNum = pictures.length -1;
    }
    pictures[imgNum].style.display = 'block';

}
// Event listeneri za strelkite
rightBtn.addEventListener ('click' , moveRight);
leftBtn.addEventListener ('click' , moveLeft);

/**
 * Ke gi skrije site sliki funkcijata
 */
const displayNone = () => {
    pictures.forEach((img) => {
        img.style.display = 'none';
    })
}

//Portfolio
const portfolioSort = (button) => {
    let category = button.getAttribute('data-category');
    let PortfolioItems = document.querySelectorAll ('.portfolio-single-item');

    PortfolioItems.forEach ((item) => {
        item.style.display = 'none';
    });

    if (category === 'sve'){
        PortfolioItems.forEach ((item) => {
            item.style.display = 'block';
        });
    }

    PortfolioItems.forEach ((item) => {
        if (item.getAttribute('data-category').includes(category)) {
            item.style.display = 'block';
        }

    });
}

//Otvarame modal
const openModal = () => {
    let modalWindow = document.querySelector ('.popup-modal');
    let overlay = document.querySelector ('.overlay');

    modalWindow.style.display = 'block';
    overlay.style.display = 'block';
}

//Zatvarame modal
const closeModal = () => {
    let modalWindow = document.querySelector ('.popup-modal');
    let overlay = document.querySelector ('.overlay');

    modalWindow.style.display = 'none';
    overlay.style.display = 'none';
}