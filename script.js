const selectElement = function(element){
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click',function(){
    body.classList.toggle('open');
});

window.sr=ScrollReveal();

sr.reveal('.animate-left',
{
    origin:'left',
    duration:800,
    distance:'20rem',
    delay:200
});
sr.reveal('.animate-right',
{
    origin:'right',
    duration:800,
    distance:'20rem',
    delay:400
});
sr.reveal('.animate-top',
{
    origin:'top',
    duration:800,
    distance:'20rem',
    delay:400
});
sr.reveal('.animate-bottom',
{
    origin:'bottom',
    duration:800,
    distance:'20rem',
    delay:400
});
