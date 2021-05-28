/*
    Funciones como tipos
    
    Podemos indicar que un argumento, variable o retorno es una funcion.
*/

/*
    Tipado generico. 
    No se recomienda el uso del tipado generico a no ser que la funcion a ejecutar no se conozca.
*/
const multiply: Function = (num1: number, num2: number): number => num1 * num2;
const opearcion = (op: Function): number => op(5, 5);


/*
    Tipado especifico.
    - function (arg) return
    - (arg) => return
*/
const division: (num1: number, num2: number) => number = (num1: number, num2: number): number => num1 / num2;
const operation = (op: (num1: number, num2: number) => number ): number => op(5, 5);