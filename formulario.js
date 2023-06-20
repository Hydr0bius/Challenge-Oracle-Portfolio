const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,50}$/,
	asunto: /^[a-zA-Z0-9\s\_\-]{1,50}$/,
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}
const campos = {
    nombre: false,
    correo: false,
    asunto: false,
}

const validarFormulario = (e)=>{
    switch (e.target.name){
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
        break;
        case "asunto":
            validarCampo(expresiones.asunto, e.target, 'asunto');
        break;
        case "correo":
            validarCampo(expresiones.correo, e.target, 'correo');
        break;
    }
};
const validarCampo = (expresion,inpunt,campo)=>{
    if (expresion.test(inpunt.value)) {
        document.getElementById(`grupo_${campo}`).classList.remove('form_grupo_in');
        document.getElementById(`grupo_${campo}`).classList.add('form_grupo_co');
        document.querySelector(`#grupo_${campo} i`).classList.add('fa-circle-check');
        document.querySelector(`#grupo_${campo} i`).classList.remove('fa-circle-xmark');

        document.querySelector(`#grupo_${campo} .form_input_error`).classList.remove('form_input_error-act');
        campos[campo] = true;
    } else{
        document.getElementById(`grupo_${campo}`).classList.remove('form_grupo_co');
        document.getElementById(`grupo_${campo}`).classList.add('form_grupo_in');
        document.querySelector(`#grupo_${campo} i`).classList.remove('fa-circle-check');
        document.querySelector(`#grupo_${campo} i`).classList.add('fa-circle-xmark');
        
        document.querySelector(`#grupo_${campo} .form_input_error`).classList.add('form_input_error-act');
        campos[campo] = false;
    };
}

inputs.forEach((input) =>{
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e)=>{
	e.preventDefault();
    if (campos.nombre && campos.correo && campos.asunto) {
        formulario.reset();

        document.getElementById('form_mensaje_exito').classList.add('form_mensaje_exito-act');
        setTimeout(()=>{
            document.getElementById('form_mensaje_exito').classList.remove('form_mensaje_exito-act');
        },3000);
        document.querySelectorAll('.form_grupo_co').forEach((icono)=>{
            icono.classList.remove('form_grupo_co');
        });
    } else {
        document.getElementById('form_mensaje').classList.add('form_mensaje-act');
        setTimeout(()=>{
            document.getElementById('form_mensaje').classList.remove('form_mensaje-act');
        },1500);
    }
});
