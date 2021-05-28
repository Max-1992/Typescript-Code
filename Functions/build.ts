/*
    Formas de crear funciones

    Podemos declrar funciones de forma declarativa o con arrow functiosn, ademas la notacion de tipos puede ser implicita si no la declaramos aunque no se recomienda.
*/

/*
    Declare function
*/
function add (num1: number, num2: number): number {
    return num1 + num2;
}


/*
    Arrow function
*/
const substract = (num1: number, num2: number): number => num1 - num2;


/*
    Funciones din retorno
*/
const imprimir = function (): void {
    substract(5,2)
}


