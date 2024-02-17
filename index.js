/*
FEATURE JAVASCRIPT:
1. MEMBUKA DAN MENUTUP NAVIGASI DARI TOMBOL HAMBURGER
2. MENERAPKAN FITUR DARK MODE
3. MENERAPKAN WEB STORAGE UNTUK MENYIMPAN NILAI MODE DARK
*/

const buttonX = document.getElementById('buttonX');
const buttonHamburger = document.getElementById('buttonHamburger');
const buttonModeDark = document.querySelectorAll('.buttonModeDark');
const con_v = document.querySelectorAll('.con_v');
const con_x = document.querySelectorAll('.con_x');
const header = document.querySelector('header');
const navger = document.getElementById('navger');
const empty = document.getElementById('ul2_2');
const body = document.getElementById('body');
const localStorageKey = 'darkMode';
let darkMode = localStorage.getItem(localStorageKey) === 'true';

const openNav = () => {
    console.log('buka');
    navger.style.transform = "translate(0%, 0%)";
}

const closeNav = () => {
    console.log('tutup');
    navger.style.transform = "translate(100%, 0%)";
}

const applyDarkModeStyles = () => {
    if (darkMode) {
        body.style.color = "white";
        body.style.backgroundColor = "black";
        header.style.borderBottom = "2px solid white";
        con_v.forEach(element => {
            element.style.border = "2px solid white";
        });
        con_x.forEach(element => {
            element.style.borderTop = "2px solid white";
        });
    } else {
        body.style.color = "black";
        body.style.backgroundColor = "white";
        header.style.borderBottom = "2px solid black";
        con_v.forEach(element => {
            element.style.border = "2px solid black";
        });
        con_x.forEach(element => {
            element.style.borderTop = "2px solid black";
        });
    }
}

const modeDark = () => {
    darkMode = !darkMode;
    localStorage.setItem(localStorageKey, darkMode);
    applyDarkModeStyles();
}

applyDarkModeStyles();

buttonModeDark.forEach(button => {
    button.addEventListener('click', modeDark);
});
buttonHamburger.addEventListener('click', openNav);
buttonX.addEventListener('click', closeNav);
empty.addEventListener('click', closeNav);
