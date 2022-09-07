// El ciclo for in nos va a dar cada nombre de la propiedad de libro.

const libro = {
    titulo : 'Harry potter y el misterio de JS',
    autor : 'Victor',
    paginas : 300
};

for(let nombrePropiedad in libro) {
    console.log(nombrePropiedad, libro[nombrePropiedad]);  // de esta manera nos trae cada nombre de la propiedad y su valor tambien.
}


// Ciclo For Of, podemos obtener el valor de un arreglo con su elemento indice, For Of nos ayuda a recorrer estructuras como esta.
let frutas = ['fresa', 'mango', 'melon'];
              //0        1         2
frutas[0]
frutas[1]
frutas[2]


for(let fruta of frutas) {
console.log(fruta);
}


/// for in aplica para objetos literales, y for of aplica para arreglos y nos ayuda a recorrer objetos iterables.

for(let indice in frutas) {
    console.log(frutas);
}


let obj = {
    frutas: ['fresa', 'mango', 'melon'],
    personajes: ['harry', 'sina', 'benja']

}

for(let propiedad in obj) {
    //propiedad frutas obj[propiedad] = ['fresa']
    //propiedad personajes obj['personajes'] = ['harry']
    
    for(let elemento of obj[propiedad]) {
        console.log(elemento);
    }
}


function imprimirNombre(nombre) {
    //
    console.log('Mi nombre es ' + nombre); // estoy concatenando dos valores strings, el valor que yo le meta como parametro de entrada es lo que va a imprimir en (nombre)
    return
}

imprimirNombre('Victor')  // Esto es un argumento

// defino una funcion con los parametros ; Definicion
// ejecuto una funcion con los argumentos ; Ejecucion

function haceGelatina(sabor, forma){
    return `Esta es la gelatina de sabor ${sabor} y con forma ${forma}`;
}

let gelatinaDeXavy = hacerGelatina ('Limon', 'Cuadrada')
console.log(gelatinaDeXavy)



// un call back es la definicion de una funcion que pasa como argumento otra funcion para ser ejecutada posteriormente 
// en pocas palabras una funcion dentro de otra funcion.
