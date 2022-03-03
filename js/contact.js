const recruit = document.querySelector('.question');
const career = document.querySelector('.career');


recruit.addEventListener('mouseover', function(){
    recruit.classList.add('over');
    career.classList.remove('over')
})
career.addEventListener('mouseover', function(){
    career.classList.add('over');
    recruit.classList.remove('over');
})
recruit.addEventListener('mouseleave', function(){
    recruit.classList.remove('over');
})
career.addEventListener('mouseleave', function(){
    career.classList.remove('over');
})