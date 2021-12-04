'use strict'
//FORMULAS MATEMATICA



//* Convertir Degradianes a Grados
Math.grados = 180 / Math.PI;
  
//* Modulo o Hipotenusa

function modulo_Hipotenusa(Ca, Co, C = 0) {
    console.log((Ca ** 2 + Co **2 + C**2)** (1 / 2));
};


//* Razones Trigonometricas
function anguloSeno(Co, h) {
    return  (Math.asin(Co / h)) * Math.grados ;
};

function anguloCoseno(Ca, h) {
    return ( Math.acos(Ca / h) ) * Math.grados;
}

function anguloTangente(Co, Ca) {
    return ( Math.atan( Co / Ca ) * Math.grados );
}


//* Producto Escalar 2 vectores


function productoEscalar(V1, V2 = 0, V3 = 0, W1, W2 = 0, W3 = 0) {
    return ( V1 * W1 ) + ( V2 * W2) + ( V3 * W3 );
}



//* Ecuacion de segundo grado

function segundoGrado(a = 0, b = 0, c = 0) {
    let X1 = 0,
        X2 = 0;

    X1 = ( (-b + ( (b ** 2) - (4 * a * c) ) ** 0.5) / 2 * a );
    X2 = ( (-b - ( (b ** 2) - (4 * a * c) ) ** 0.5) / 2 * a );
    
    return `El resultado de X1 = ${X1} y el resultado de X2 = ${X2}`;
}

//* Suma y Resta de Matrices
/* 
let M1 = [
    F1 = { X1, X2, X3},
    
    F2 = { Y1, Y2, Y3 },

    F3 = { Z1, Z2, Z3 }

]
let M2 = [
    F1 = { X1, X2, X3},
    
    F2 = { Y1, Y2, Y3 },

    F3 = { Z1, Z2, Z3 }

]
let F1 = { X1,X2,X3 },
    F2 = { Y1,Y2,Y3 },
    F3 = { Z1,Z2,Z3 } */

function suma3x3Matriz( X1,X2,X3,Y1,Y2,Y3,Z1,Z2,Z3,A1,A2,A3,B1,B2,B3, C1,C2,C3) {
    let     M1 = [ X1,X2,X3, Y1,Y2,Y3,   Z1,Z2,Z3 ],
            M2 = [ A1,A2,A3, B1,B2,B3,   C1,C2,C3 ],
            i = 0,F1 = 0,F2 = 3,F3 = 6,Mt, T;
        

    while (F1 < 3, F2 < 6, F3 < 9, T < 3) {

        X1[F1] = M1[F1] + M2[F1];
        X2[F2] = M1[F2] + M2[F2];
        X3[F3] = M1[F3] + M2[F3];

        

        F1++;
        F2++;
        F3++;
    }




/* 
    for( i = 0; i <= 3; i++ ) {
        Mt = [
            M1[i] + M2[i],
        ]
    }
    for ( i = 4; i <= 6; i++) {
        F2 = [M1[i] + M2[i]]
    }
    for ( i = 7; i <= 9; i++) {
        F3 = [M1[i] + M2[i]]
    }
    console.log(F1,F2,F3); */
}
/*
M2 = [
    F1 = [  { X1: X1 },
            { X2: X2 },
            { X3: X3 }   
    ],
    F2 = [  { Y1: Y1 },
            { Y2: Y2 },
            { Y3: Y3 }
    ],
    F3 = [  { Z1: Z1 },
            { Z2: Z2 },
            { Z3: Z3 }
    ]
]

/* 
function segundo2Grado(a = 0, b = 0, c = 0) {
    console.log( (-b - ( b ^ 2 - 4 * a * c ) ^ 1 / 2) / 2 * a );
}; */




/* 

function angulo_Seno(anguloSeno) {
    return 23.45 * anguloSeno;
};

function miGrados(anguloSeno) {
    console.log(Math.grados(anguloSeno));
} ;


console.log(miGrados)
  */
