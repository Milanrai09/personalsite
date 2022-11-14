const work = document.querySelector('button')
const navhead = document.querySelector(".header");
work.addEventListener('click',() => {
    work+navhead.classList.toggle('active')
})

const year = new Date().getFullYear();
const date = `&copy; ${year} Milan Rai. All Rights Reserved`
document.getElementsByTagName('footer')[0].innerHTML= date;