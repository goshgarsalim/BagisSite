
const hamburger_icon_btn = document.querySelector('.hamburger_icon_btn');
const mobile_open_menu = document.querySelector('.mobile_open_menu');

hamburger_icon_btn.addEventListener('click' , (e) => {
    hamburger_icon_btn.classList.toggle("is-active");
    mobile_open_menu.classList.toggle('active')
})