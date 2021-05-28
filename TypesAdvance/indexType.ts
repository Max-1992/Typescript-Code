/*
    Tipo de index.

    Esta es un tipo que nos permite generar objetos o interfaces flexibles. Permitiendo no estar limitados a las propiedades que estos contienen.

    Un caso de uso frecuente es cuando no sabemos de antemano todos los posibles campos o elementos que un objeto tendrá o bien necesitara. También puede darse el caso de que solo sabemos algunos de los campos.
*/

/*
    Steps
    1. Lo primero que vamos ha hacer es definir el Tipo de la Interfaz. [ key: string ]
    2. Lo segundo que vamos a hacer es definir el valor.  [ key: string ] : string

    De esta forma le estamos diciendo que nuestro objeto puede almacenar cualquier clave de tipo string y que su valor será de tipo string.
*/
interface IErrorType {
    [ key: string ] : string
}

const error: IErrorType = {
    email: 'Your email is invalid.',
    passsword: 'Your password is invalid.',
    phone: 'Your phone is invalid.',
    code: '400'
}

interface IPosition {
    [ key: string ] : number
}

const championship: IPosition = {
    First: 1,
    second: 2,
    third: 3,
    bedroom: 4,
    fifth: 5,
    sixth: 6,
    seventh: 7,
    eighth: 8,
    nineth: 9,
    tenth: 10,
}

interface IHttpRequest {
    [ key: string ] : any
}

const request: IHttpRequest = {
    body: {},
    Headers: {},
    transactionId: '1486-748--7-7-8588445-5874-abcrfge'
}