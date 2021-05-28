/*
    Existen dos formas de declarar variables en Typescript.
    - Anotación de Tipo.
    - Inferencia de Tipo.
*/

/*
    Anotacion de Tipo: Nosotros le indicamos a Typescripot  que tipo de dato usar en un a variable.
    Segun las buenas practicas esta notación se utiliza cuando no se realizará un asignación por defecto o cuando se utilizara un tipo de dato personalizado. 
    A fines ilustrativos debajo igualemente se motrara con una asiganción por defecto.
*/
const favoriteNumber: number = 7
const lastName: string = 'MyFirstName'
const verified: boolean = true


/*
    Inferencia de Tipo: Typescript se encarga de asignar el tipo de dato dependiendo el valor inicial de la variable.
    Segun las buenas practicas esta notación se utiliza cuando se va a realizar una asiganción por defecto. Es decir que vamos a inicializar nuetra variable con un valor.
*/
const zipCode = 7895
const country = 'MyFirstName'
const accepted = true