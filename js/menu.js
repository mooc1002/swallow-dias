const btn = document.querySelector('.sp-nav');
const bar = document.querySelectorAll('.bar');
const nav = document.querySelector('nav');
const list = document.querySelectorAll('li');
const body = document.querySelector('body');

btn.addEventListener('click', function() {
    nav.classList.toggle('show');

   for(let i = 0; i < bar.length; i++){
       bar[i].classList.toggle('cross');
   }

   body.classList.toggle('show');
    
})


for(let i = 0; i < list.length; i++){
    list[i].addEventListener('click', function () {
        nav.classList.toggle('show');

        for(let i = 0; i < bar.length; i++){
            bar[i].classList.toggle('cross');
        }
    })

}
