/*
    Tipo de dato Tuplas
    Las tuplas nos permite proteger los datos que se encuentran dentro de un array. Nos permiten tipar cada posición del arreglo y es posible o recomendable utilizarlas cuando sables la cantidad y los tipos de valores que obtendremos en cada posición de nuestro array.
*/

/*
    Declarar tuplas basica.
*/
let laptop: [string, number, Date] = ['Asus', 20589, new Date()]

// laptop[1] = 'Dell';

/*
    Declarar Tuplas con TYPE para que pudan ser reutilizadas.
*/
type car = [string, number, string, Date]

let cars: car = ['Peugueot', 308, 'ACD895', new Date()];

// cars[0] = 201;