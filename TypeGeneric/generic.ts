/*
    Funciones genericas

    Permite mejorar la reutilización de codigo realizar codigio mas generico.
    Una de las cualidades mas destacadas de este tipo de funciones, es que delega en quien la esta invocando la responsabilidad de pasarle como argumento el Type que se va a utilizar.

    Uno de los casos de uso mas frecuentes es utilizarlo para unificar codigo que cumple la misma funcionalidad pero para diferentes tipos de datos. Es decir que hace lo mismo pero existe porque maneja deferentes tipos de datos.
*/

/*
    Como se puede ver en el ejemplo tenemos dos funciones con codigo muy similar, lo cual nos muestra que tenemos mucho codigo duplicado. Podemos modificar y merjarar esto con la ayuda de GENERIC Type.
*/
const printString = (arr: string[]): void => {
    for (const item of arr) {
        console.log(item);
    }
}

const printNumber = (arr: number[]): void => {
    for (const item of arr) {
        console.log(item);
    }
}


/*
    De esta forma podemos crear una funcion generia y remplazar lo que sería la implemantacion de dos funciones en solo una. Pasando como arguento un tipo generico y al momento de invocar dicha dicha funcion utilizaremos la notacion <tipe> para pasarle el tipo de como argumento.
*/
const printAny = <T>(arr: T[]): void => {
    for (const item of arr) {
        console.log(item);
    }
}

printAny<number>([1,2,3,4,5,6,7,8,9,10])
printAny<string>(['a','b','c','d','e'])

/*
    Inferencia de tipo.
    La inferencia en la declaracion de generic basicamente es lo mismo que en las variables, representa la capacidad que posee Typescript para detectar el tipo de dato de forma automatica. De esta forma no es necesarion enviar como arguemento el tipo de dato cuando invocamos a nuestra funcion.
    Solo se recomienda su uso cuando la declaración es redundante es decir cuando se inicializa al momento de declarar.
*/
printAny([1,2,3,4,5,6,7,8,9,10])
printAny(['a','b','c','d','e'])