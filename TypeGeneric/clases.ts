/*
    Clases Genericas
    Inferencias en Generic

    Permite mejorar la reutilización de codigo realizar codigio mas generico.
    Una de las cualidades mas destacadas de este tipo de clases, es que delega en quien esta llamando a la clase la responsabilidad de pasarle como argumento el Type que se va a utilizar.

    Uno de los casos de uso mas frecuentes es utilizarlo para unificar codigo que cumple la misma funcionalidad pero para diferentes tipos de datos. Es decir que hace lo mismo pero existe porque maneja deferentes tipos de datos.
*/

/*
    Como se puede ver en el ejemplo tenemos dos clases con codigo muy similar, lo cual nos muestra que tenemos mucho codigo duplicado. Podemos modificar y merjarar esto con la ayuda de GENERIC Type.
*/

class ArrayOfNumber {

    constructor(private collection: number[]) {}

    public get(index: number): number {
        return this.collection[index]
    }
}

class ArrayOfString {

    constructor(private collection: string[]) {}

    public get(index: number): string {
        return this.collection[index]
    }
}


/*
    De esta forma podemos crear una clase generia y remplazar lo que sería la implemantacion de dos clases en solo una. Pasando como arguento un tipo generico y al momento de generar una instancia de dicha clase utilizaremos la notacion <tipe> para pasarte el tipo de nuestro argumento.
*/
class ArrayOfAny<T> {

    constructor(private collection: T[]) {}

    public get(index: number): T {
        return this.collection[index]
    }
}

const itemNum = new ArrayOfAny<number>([1,2,3,4,5,6,7,8,9,10]);
const itemStr = new ArrayOfAny<string>(['a','b','c','d','e']);

console.log('Numero: ', itemNum.get(5) )
console.log('String: ', itemStr.get(3) )

/*
    La inferencia en la declaracion de generic basicamente es lo mismo que en las variables, representa la capacidad que posee Typescript para detectar el tipo de dato de forma automatica. De esta forma no es necesarion enviar como arguemento el tipo de dato cuando generamos una instancia de nuestra clase.
    Solo se recomienda su uso cuando la declaración es redundante es decir cuando se inicializa al momento de declarar.
*/

const itemNumInfe = new ArrayOfAny([1,2,3,4,5,6,7,8,9,10]);
const itemStrInfe = new ArrayOfAny(['a','b','c','d','e']);

console.log('String: ', itemStrInfe.get(3) )
console.log('Numero: ', itemNumInfe.get(5) )
