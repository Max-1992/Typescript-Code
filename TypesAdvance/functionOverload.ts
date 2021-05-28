/*
    Tipo Function Overload

    Typescript nos provee el concepto de sobrecarga en las funciones en el cual podemos tener la misma funcion repetida varias veces pero invocada con diferentes parametros, pudiendo retornar diferentes tipos.

    Esto es util cuando una función puede ser llamada con diferentes tipos de argumento y esta devolvera un tipo de dato dependiendo del argumento con el cual fue invocada.
*/

type StringOrArray = string[] | string;

/*
    Crear sobre carga declarando la función con cada un o de los tipos posibles a retornar dependiendo el argumento enviado.

    Si la sobrecarga fuen configurada correctamente al pasar el mouse por la funcion principal deberemos observar algo así: function reverse(stringOrArray: string): string (+1 overload)

*/
function reverse (stringOrArray: string): string;
function reverse (stringOrArray: string[]): string[];

function reverse  (stringOrArray: StringOrArray): StringOrArray  {
    return typeof stringOrArray === 'string' 
    ? stringOrArray.split('').reverse().join()
    : stringOrArray.slice().reverse()
}

const output = reverse(['a', 'b', 'c'])

console.log(output);