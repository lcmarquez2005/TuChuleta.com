'use strict'

const K = 9 * Math.pow(10, 9); 

//Fuerza en Base a cargas y Distancia
const formC = document.querySelector('#formularioCoulomb');
const formReset = document.querySelector('#formReset');
formC.addEventListener('submit', function(e) {
    e.preventDefault();

    fuerzaCoulomb();


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

let mostrar;/* Elemento que se mostrara con el RESULTADO FUERZA COULOMB */

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
    mostrar = document.createElement('P');
function mostrarResultado() {

    mostrar.textContent = resultado;
    mostrar.classList.add('resultado');

    formC.appendChild(mostrar);
}

function fuerzaCoulomb() {
    let f = datos.fuerzaC;
    let q1 = datos.q1C;
    let q2 = datos.q2C;
    let r = datos.radioC;

    if( q1 && q2 && r !== 0 && f == 0 ){
        resultado =  K * (q1 * q2) / r **2 + ' ' + 'Newton' + ' ' + '(N)';
        
    } else if( f && q2 && r !== 0 && q1 == 0 ) {
        resultado =  f * r ** 2 / K * q2 + ' ' + 'Coulomb' + ' ' + '(C)';

    } else if( f && q1 && r !== 0 && q2 == 0 ) {
        resultado =  f * r ** 2 / K * q1 + ' ' + 'Coulomb' + ' ' + '(C)';

    } else if( f && q2 && q1 !== 0 && r == 0 ) {
        resultado = Math.sqrt( K * (q1 * q2) / f ) + ' ' + 'metros' + ' ' + '(m)' ;

    } else if ( r &&  f &&  q1 &&  q2 !== 0 ) {
        resultado = 'Debes dejar un SOLO campo Vacio que sera el Calculado';

    } else {
        resultado = 'ERROR';
    }
    console.log(resultado);
}

formReset.addEventListener('click', function() {
    console.log('click')
    fuerzaC.value = '';
    q1C.value = '';
    q2C.value = '';
    radioC.value = '';

    mostrar.remove();

})


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