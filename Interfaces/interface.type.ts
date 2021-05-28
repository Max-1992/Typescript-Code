/*
    Diferencias entre Types e Intefaces.

    Si bien ambas estructuras son similares cada estructura posee una finalidad.

    Interface: Las interfaces nos permiten definir la estructura de un objeto. Podemos decir entonces que el rol que cumplen las interfaces son definir y modelar las estructuras de nuestros objetos.

    Type: Ademas de permitir el mismo uso que las Interfaces, este posee otras carácteristicas que lo hacen mas flexible. 
*/

type car = {
    nombre: string
    model: string
    year: number
}

interface IMotocycle {
    nombre: string
    model: string
    year: number
}

