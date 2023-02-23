const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const email = document.getElementById('email');
const contrasena = document.getElementById('contrasena');


const label1 = document.getElementById('mensaje1');
const label2 = document.getElementById('mensaje2');
const label3 = document.getElementById('mensaje3');
const label4 = document.getElementById('mensaje4');


const boton = document.getElementById('btn');
let resultado1;
let resultado2;
let resultado3;
let resultado4;
let parrafo1;
let parrafo2;
let parrafo3;
let parrafo4;
let a = 0;
let b = 0;
let c = 0;
let d = 0;



boton.addEventListener('click', validar);

function validar() {

    validarnombre();
    validarapellidos();
    validaremail();
    validarcontrasena();


    if (resultado1 && resultado2 && resultado3 && resultado4) {
        alert('Registrado correctamente');
        location.reload();
    } else {
        nombre.onclick = function () {
            parrafo1.remove();
            a = 0;
        };
        apellido.onclick = function () {
            parrafo2.remove();
            b = 0;
        };
        contrasena.onclick = function () {
            parrafo3.remove();
            c = 0;
        };
        email.onclick = function () {
            parrafo4.remove();
            d = 0;
        };
    }
}


function validarnombre() {



    const nombreRegistro = nombre.value;
    const nombreCantidad = nombreRegistro.length;

    if (nombreCantidad < 3 || /\d/.test(nombreRegistro)) {
        resultado1 = false;


        if (a == 0) {
            parrafo1 = document.createElement('P');
            parrafo1.innerHTML = ` Nombre Erroneo`;
            label1.appendChild(parrafo1);
            parrafo1.classList.add('mensaje');
            a++;
        }

    } else {
        resultado1 = true;
    }

}

function validarapellidos() {
    const nombreRegistro = apellido.value;
    const nombreCantidad = nombreRegistro.length;

    if (nombreCantidad < 3 || /\d/.test(nombreRegistro)) {
        resultado2 = false;
        if (b == 0) {
            parrafo2 = document.createElement('P');
            parrafo2.innerHTML = ` Apellido Erroneo`;
            label2.appendChild(parrafo2);
            parrafo2.classList.add('mensaje');
            b++;
        }

    } else {
        resultado2 = true;

    }

}

function validarcontrasena() {

    const valorcontrasena = contrasena.value.length;

    if (valorcontrasena < 6) {
        resultado3 = false;
        if (c == 0) {
            parrafo3 = document.createElement('P');
            parrafo3.innerHTML = `Contraseña no valida`;
            label3.appendChild(parrafo3);
            parrafo3.classList.add('mensaje');
            c++;
        }

    } else {
        resultado3 = true;

    }

}

function validaremail() {

    const emailRegistro = email.value;

    const valor1 = !(emailRegistro.includes(' '));
    const valor2 = emailRegistro.includes('@');
    const valor3 = emailRegistro.includes('.com');

    if (valor1 && valor2 && valor3) {
        resultado4 = true;
    } else {
        resultado4 = false;
        if (d == 0) {
            parrafo4 = document.createElement('P');
            parrafo4.innerHTML = `Tu email introducido es erroneo`;
            label4.appendChild(parrafo4);
            parrafo4.classList.add('mensaje');
            d++;
        }

    }

}

