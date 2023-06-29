const bagis_item = document.querySelectorAll(".bagis-item");
const Load_More = document.querySelector('#Load_More');
let cost = 1;
for(let i = 10 ;i<bagis_item.length ; i++){
    bagis_item[i].classList.add('active')
}

Load_More.addEventListener('click' , (e) => {
    for(let i = 10 ;i<bagis_item.length ; i++){
        bagis_item[i].classList.toggle('active')
    }
    if(cost == 1){
        Load_More.innerHTML = "Geri Qayıt...";
        cost = 0;
    }
    else{
        Load_More.innerHTML = "Hamısını Gör...";
        cost = 1;
    }
})

