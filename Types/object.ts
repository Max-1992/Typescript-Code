/*
    Tipo de datos Object.

    En Typescript existe dos tipos de familias de datos:
    - Primitivos
    - No Primitivos

    Primitivos: Esta familia de datos se encuentra conformada por los string, boolean, number, null, undefined.
    No Primitivos: Esta familia de datos se encuentra conformada por los datos que no se encuentran dentro de los tipos primitivos.
*/
let brand: { name: string, description: string, value: number } = {
    name: 'Adidas', 
    description: 'Es una marca de indumentaria deportiva alemana.', 
    value: 120000000
}


let person: { name: string, age: number, address: { street: string, city: string, zipCode: number } } = {
    name: 'Manuel',
    age: 29,
    address: {
        street: 'Av Marquez 5425',
        city: 'San Isidro',
        zipCode: 1608
    }
}

/*
    Podemos definir tipado de objetos de forma dinamimica cuando no sabemos que propiedades nos van a venir y por ende podemos saber o no los valores. 
    De la siguiente forma le decimos que nuestra variable cliente va a ser de tipo objeto, cuyas propiedades/claves de ese objetos van a ser de tipo string pero no podemos especificar cuales son y los valores puede ser cualquier tipo de dato.
    Se podría especificar el tipo de dato de los valores de la siguiente manera si es que todos fueran de un mismo tipo:
    - { [ key: string ]: string }
    - { [ key: string ]: number } 
*/
let client: { [ key: string ]: any } = {}
