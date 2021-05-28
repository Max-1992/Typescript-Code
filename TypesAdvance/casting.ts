/*
    Tipo de casteo

    Existen dos forma de realizar el Type Casting para llevar de un tipo a otro tipo un elemento. Los cuales son utilizar la notación con almoadillas <type> o la Key reservada AS.
*/

/*
    Primera forma de ralizar un casteo
*/
const element = <HTMLInputElement>document.getElementById('inputText')
const value = element.value;

/*
    Segunda forma de ralizar un casteo
*/
const elem = document.getElementById('inputText') as HTMLInputElement
const val = element.value;