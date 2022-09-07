// Declaracion de una variable

let nombre; // si usamos let, puede cambiar

const PI = 3.1416; // si usamos const, ya no puede cambiar y usando const tenemos que agregarle un valor a fuerzas

let numero = 10; // Valor numerico 

nombre = 'Aldo' // Esto es una inicializacion de variable

let esHombre = true; // Valor booleano

let usuario = undefined; // Valor indefinido , no tiene valor.
console.log(usuario); // El valor seria undefined.


let auto = null; // el valor es nulo o esta ausente.



// Podemos utilizar el operador TypeOf , esto nos dira el tipo de dato que nuestra variable esta guardando.
console.log(tipoDato) 

let tipoDato = typeof nombre;


// podemos generar objetos por medio de llaves {} , y a los objetos les podemos agregar propiedades y valores por ejemplo.
let fruta = {
    color: 'roja',
    sabor: 'acida',
    precio: 97,
    // aqui podemos agregar un objeto dentro de un objeto por ejemplo una fruta hermana
        hermana : {
        color: 'amarilla',
        sabor: 'dulce',
        precio: 110,
            hermana : {
            color: 'azul',
            sabor: 'agridulce',
            precio: 120,
                hermana : {
                color: 'verde',
                sabor: 'dulce',
                precio: 10,
                    hermana : {
                    color: 'rosa',
                    sabor: 'dulce',
                    precio: 80,
                }
            }
        }
    }
};

// de esta manera podemos acceder a la propiedad que queramos de nuestros objetos de una manera estatica (Osea a mano).

console.log(fruta.hermana.hermana.hermana.hermana.precio);

// Tambien podriamos usar un ciclo for

for (let i = fruta.hermana; !i.hermana; i = i.hermana) {

}

// Este es un arreglo y asi podemos acceder a los valores de nuestro arreglo 
let mesesDeCosecha = ['enero', 'febrero']
mesesDeCosecha[0]
mesesDeCosecha[1]


// operadores aritmeticos

let resultado = 10 + 10; // sumar valores numericos

console.log(resultado)  

let concatenacion = 'Aldo' + ' Aldaco'  // Une los dos valores en una sola linea.

console.log(concatenacion)


// Type coercion 
let prueba1 = 5 + '5' // conversion implicita
let prueba2 = 5 + Number('5') // conversion explicita 

console.log(prueba1,prueba2)

let resta = 5 - 5;
let resta2 = 5 - '5';
let resta3 = '5' - '5'
console.log(resta,resta2)



// estructuras de control // condicionales 
let esHumano = true;
if(esHumano === true) {
console.log('Aldo es humano');

}

let jonathan = 20;
if (jonathan >= 18) {
    console.log('es mayor de edad');
} else {
    console.log('Es menor de edad');
}


//  puede utilizarse cuando quieres validar mas de un solo caso por ejemplo
if(jonathan >= 18) {
    console.log|('Es mayor de edad');
}
else if (jonathan >= 18 && jonathan < 30) {
    console.log('Es adulto mayor');
} else {
    console.log('Es menor de edad')
}

// switch tambien se puede utilizar cuando quieres cosas mas especificas
switch(jonathan) {
    case 18:
        console.log('Es mayor de edad');
        break;
    case 30:
            console.log('Es adulto mayor');
            break;
    default:
            console.log('Es menor de edad');
}



// tambien podemos utilizar while

let xavier = 19;

while(xavier > 18 && jonathan < 30) {
    console.log ('xavier es mayor de edad', xavier);
    xavier++
    console.log()   
}

// tambien podemos utilizar un ciclo for 

let annie = 19;

 for (let annie = 18; annie < 30; annie++) {
    console.log("Annie es mayor de edad", annie);
 }
 
 