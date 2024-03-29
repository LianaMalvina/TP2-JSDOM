
//imagen del main hover ------------------------------------------------------------------------------------------------

let imagen = document.getElementById('captura');

function mouseOver(){ 
    imagen.src = "images/captura2.jpg"  
};

imagen .addEventListener('mouseover', mouseOver)

function mouseOut (){
    imagen.src = "images/Captura de Pantalla (1).jpg"
};

imagen.addEventListener('mouseout', mouseOut)



// Sección Features - Slider- Cards ------------------------------------------------------------------------------------

let prev = document.querySelector('.prev');
let next = document.querySelector('next');

let slideIndex = 0;

function moveSlide (n){
    const slides = document.querySelectorAll('.slide');
    const slider = document.querySelector('.slider');
    const slideWidth = slides[0].offsetWidth;

    slideIndex += n;
    if (slideIndex < 0){
        slideIndex = slides.length - 3;
    } else if (slideIndex > slides.length - 3){
        slideIndex = 0;
    }

    slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}


// Seccion Features Cards - leer más-------------------------------------------------------------------------------------
let textAdicional = document.getElementById('textAdicional');
let adicional = document.getElementById('adicional');
let textAdic = document.getElementById('textAdic');
let adic = document.getElementById('adic');
let masTexto = document.getElementById('masTexto');
let masPalabras = document.getElementById('masPalabras');



adicional.addEventListener('click', toggleText);
adic.addEventListener('click', toggleText);
masPalabras.addEventListener('click', toggleText);


function toggleText() {

    textAdicional.classList.toggle('ocultar');

    if(textAdicional.classList.contains ('ocultar'))
    {
        adicional.innerHTML = 'Leer más';
    }
    else{
        adicional.innerHTML = 'Leer menos';
    };

    textAdic.classList.toggle('ocultar');

    if(textAdic.classList.contains ('ocultar'))
    {
        adic.innerHTML = 'Leer más';
    }
    else{
        adic.innerHTML = 'Leer menos';
    };

    if(masTexto.classList.contains ('ocultar'))
    {
        masPalabras.innerHTML = 'Leer más';
    }
    else{
        masPalabras.innerHTML = 'Leer menos';
    };

};
// EN ESTA SECCION NO PUDE HACER QUE LAS 3 TARJETAS SEAN DESPLEGABLES Y QUE SE ABRA DE UNA EN UNA,AGRADEZO LA CORRECCION CON SOLUCIÓN


// Sección PORTAFOLIO, TARJETAS DESPLEGABLES Y REPOSITORIO GITHUB-------------------------------------------------------

let esconder = document.getElementById('esconder');
let sabeMas = document.getElementById('sabeMas');

function mostrarse() { 
    document.getElementById('textoOculto').style.display = 'block';
} 
function ocultarse() {
    document.getElementById('textoOculto').style.display = 'none';
}

// lo mismo que en la seccion anterior, no me doy cuenta cómo hacer para que funcione en cada card



// Sección Formulario ---------------------------------------------------------------------------------------------------

document.getElementById('contactFomor').addEventListener('submit', function(evento){

    evento.preventDefault();

let nombre = document.getElementById('nombre').value;
let telefono = document.getElementById('telefono').value;
let email = document.getElementById('email').value;
let subject = document.getElementById('subject').value;
let massage = document.getElementById('massage').value;

if ( !nombre || !telefono || !email || !subject || !massage){
    document.getElementById('respuesta').style.color = 'red';
    document.getElementById('respuesta').innerText = 'Por favor, completa todos los campos';
    return;
};

    document.getElementById('respuesta').style.color = 'green';
    document.getElementById('respuesta').innerText = '¡Su mensaje ha sido exitoso!';


document.getElementById('nombre').value = "";
document.getElementById('telefono').value ="";
document.getElementById('email').value = "";
document.getElementById('subject').value ="";
document.getElementById('massage').value = "";

});