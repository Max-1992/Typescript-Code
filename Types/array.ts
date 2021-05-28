/*
    Tipo de dato Array
*/

/*
    Declaración por Anotación.
*/
let dates: Date[];
let listCourses: string[]
let numbers: number[]

let listStudents: string[] = ['student1', 'student2', 'student3'];
let listNumbers: number[] = [1, 2 , 3 , 4 , 5];
let others: any[] = ['stirng', 2, {}, null, true];


/*
    Declaración por inferencias.
*/
let clients = ['clint1', 'clint2', 'clint3']
let years = [new Date(), new Date(), new Date()]

/*
    Array de object
*/
let brands: { name: string, description: string, value: number }[];
let persons: { name: string, age: number, address: { street: string, city: string, zipCode: number } }[];
let listData: { [ key: string ]: any }[];

