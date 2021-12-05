'use strict'

const K = 9 * Math.pow(10, 9); 

//Fuerza en Base a cargas y Distancia
const formC = document.querySelector('#formularioCoulomb');
formC.addEventListener('submit', function(e) {
    e.preventDefault();

    fuerzaCoulomb();

    console.log('enviando...');
    mostrarResultado();
})

const datos = {
    fuerzaC: 0,
    q1C: 0,
    q2C: 0,
    radioC: 0
}


const fuerzaC = document.querySelector('#fuerzaC');
const q1C = document.querySelector('#q1C');
const q2C = document.querySelector('#q2C');
const radioC = document.querySelector('#radioC');
let resultado = 0;

fuerzaC.addEventListener('input', leerDatos);
q1C.addEventListener('input', leerDatos);
q2C.addEventListener('input', leerDatos);
radioC.addEventListener('input', leerDatos);

function leerDatos(e) {
    console.log('Escribiendo...');
    datos[e.target.id] = e.target.value;
    datos[e.target.id] = parseFloat(datos[e.target.id]);
    console.log(datos);
}

function mostrarResultado() {
    let mostrar = document.createElement('P');

    mostrar.textContent = resultado;
    mostrar.classList.add('resultado');

    formC.appendChild(mostrar);
}

function fuerzaCoulomb() {

    let f = datos.fuerzaC;
    let q1 = datos.q1C;
    let q2 = datos.q2C;
    let r = datos.radioC;
    
    if( f === null || f == false || f == 0 ){
        resultado =  K * (q1 * q2) / r **2 + ' ' + 'Newton' + ' ' + '(N)';
    } else if( q1 === 0 || q1 == null || q1 == false ) {
        resultado =  f * r ** 2 / K * q2 + ' ' + 'Coulomb' + ' ' + '(C)';
    } else if( q2 === 0 || q2 == null || q2 == false ) {
        resultado =  f * r ** 2 / K * q1 + ' ' + 'Coulomb' + ' ' + '(C)';
    } else {
        resultado = Math.sqrt( K * (q1 * q2) / f ) + ' ' + 'metros' + ' ' + '(m)' ;
    }
    console.log(resultado);
}


//  Diferencia Potencial

let eV_Joules = 1.6 * Math.pow(10,-19);
let Joules_eV = 1 / (1.6 * Math.pow(10,-19));

// Transforma de eV a Joules o viceversa
function transfor_eV_Joules(eV = Joules_eV, Joules = eV_Joules) { 

    if (eV === 0 ) {
        eV = Joules_eV;
    }
    
    
    return eV * Joules;
};

// Formula Energia Cinetica en funcion velocidad

function energiaCineticaV( Ec, v, m ) {

    if( Ec === 0 ) {
        return m * Math.pow(v, 2);
    } else if ( v === 0 ) {
        return Math.sqrt( 2 * Ec / m );
    } else if ( m === 0 ) {
        return 2 * Ec / v ** 2;
    }

}

function potencialElectrico(V, q, r) {
    if( V === 0 ) {
        return K * q / r ** 2;
    } else if ( q === 0 ) {
        return V * (r ** 2) / K ;
    } else if ( r === 0 ) {
        return Math.sqrt( K * q / V ).toExponential;
    }
}


const permitividad = 8.85e-12;

function densidadSuperficial(q, r, D) {
    if( r === 0 ) {
        return Math.sqrt( q / D );
    }
}

function expo(x, f) {
    return Number.parseFloat(x).toExponential(f);
  }