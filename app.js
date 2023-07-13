
//efecto para el titulo
let docTitle = document.title;
window.addEventListener("blur",() =>{
    document.title = "Regresa no te vayas :'(";
});
window.addEventListener("focus", () =>{
    document.title =docTitle;
})

//hamburger
const bar = document.querySelector('#bar');
const nav = document.querySelector('.header_nav');
const cerrar = document.querySelector('#close');

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    });
};
if(cerrar){
    cerrar.addEventListener('click',()=>{
        nav.classList.remove('active');
    });
;}

//efecto de transicion
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));