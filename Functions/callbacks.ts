/*
    Funciones como callbacks
    
    Podemos enviar una función como argumento de otra.
*/

/*
    Utilizando callback como una funcion declarada.
*/
const printing:  (result: number) => void =  (result: number): void => console.log(result);

const showOperation = (a: number, b: number, printing: (result: number) => void): void => {
    const result = a + b
    printing(result)
}

showOperation(10, 5, printing);

/*
    Utilizando callback con una funcion anonima.
*/
showOperation(10, 5, (result: number): void => console.log(result));
