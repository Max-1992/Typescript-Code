/*
    Funciones que retornan tipo never.
    Existen 3 formas de indicar que una funcion no retorna nada.
    - void
    - never
*/

/*
    Las funciones que retornan never garantizan que no existe retorno, es decir que no devolveran un undefined. Este tipo de funciones son las que manejar usualmente errores.
*/
const throwError = (message: string): never => {
    throw new Error(message)
}

/*
    Las funciones que retornan void no garantizan que el flujo del codigo no se siga ejecutando y terminen retornando un valor undefined. Basicamente las funciones de tipo void podrían traducirse como funciones que retornan undefined, es decir que no poseen un retorno explicito en su flujo.
*/
const helloWord = (name: string): void => {
    console.log('Hola mundo, mi nombre es ' + name);
}

/*
    La funciones pueden llevar notacion o tipo de datos union, es decir que pueden devolver mas de un tipo de dato.
*/
const isValid = (value: string): never | void => {

    if(!value) {
        throw new Error('Value is not existing.')
    }

    console.log('Mi valor es: ', value);
}