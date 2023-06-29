const card = document.querySelectorAll('.card');
const collapse = document.querySelectorAll('.collapse');

for(let i = 0 ; i < card.length ; i++){
    card[i].addEventListener('click' , (e) => {
        collapse[i].classList.toggle('show');
    })
}