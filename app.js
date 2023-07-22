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

//efecto type
function animacion(){
    let textoAnimacion =[
        ['c','o','n','s','t','r','u','y','o',' ','p','á','g','i','n','a','s',' ','w','e','b'],
        ['s','o','y',' ','p','r','o','g','r','a','m','a','d','o','r'],
    ];
    let letraContador = -1;
    let nivelArray = 0;

    const contenedorAnimaicon = document.querySelector('.cont_text_animation');

    function pintarTexto(){
        letraContador++;
        contenedorAnimaicon.textContent += textoAnimacion[nivelArray][letraContador];

        if(letraContador === textoAnimacion[nivelArray].length -1){
            clearInterval(intervalo);

            setTimeout(()=>{
                intervalo = setInterval(()=>{
                    contenedorAnimaicon.textContent = '';
                    letraContador--;
                    textoAnimacion[nivelArray].pop();

                    textoAnimacion[nivelArray].forEach((elemento)=>{
                        contenedorAnimaicon.textContent += elemento;
                    });

                    if(letraContador < 0){
                        clearInterval(intervalo);
                        nivelArray++;
                        intervalo = setInterval(pintarTexto,150);

                        if(nivelArray > textoAnimacion.length -1){
                            clearInterval(intervalo);
                            nivelArray = 0;
                            animacion();
                        };
                    };
                },150);
            },1000);
        };
    };
    let intervalo = setInterval(pintarTexto,150);
};
window.addEventListener("load",animacion);

//efecto de transicion
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));