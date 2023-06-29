const left_content = document.querySelector('.content-left ')


window.addEventListener('scroll' , (e) => {
    if(window.scrollY>40){
        left_content.classList.add('active')
    }
    else{
        left_content.classList.remove('active')
    }
})