/*
    Tipo generico KeyOf

    Esta porpiedad se utiliza en combinacion con las constrait y basicamente nos permite dirle que un tipo va a pertener a otro tipo.
    Se utiliza para resguardad el trabajo con objetos. De esa forma nosotros podemos tener objetos y asegurarnos de que Typescript no nos permita utilizar propiedades que no esten declaradas.
*/

/*
    Lo primero que vamos a hacer es declarar nuestra funcion generica y utilizar un constraint para decirle que va a recibir un argumento de tipo object.
    Luego debemos decirle que recibiremos otro arguemnto y para ello volveremos a generar un nuevo constrait pero esta ves queremos decirle que nuestro segundo arguemnot pertenece a el primer argumento y para ello vamos a utilizar la palabra reservada keyOf.

    1. Declaramos una constraint indicando todos los argumentos, para nuestro caso seran T de tipo Object y U que le pertenesera a T.
    2. Debemos indicarle que nuestro segundo argumento U le pertenece a T y para ello utilizaremos el metodo keyOf.
*/
const findValue = <T extends object, U extends keyof T>(object: T, key: U) => {
    return object[key]
}

findValue({ name: 'Maria', age: 34 }, 'name')


/*
    Veamos como podemos trabajar con KeyOf en un caso mas real y cotidiano.
    1. La colección es de un array de objetos que implentan la interfaz IUsuario "T"
    2. Vamos a decirle que "K" es una de las llaves de los elementos de "T", es decir una de las llaves de un objeto que implenta IUsuario.
    3. Vamos a decirle que value es el valor que existe en "T" en la llave que indique "K", si utilizaramos notacion de puntos seria T.K o user.name.
*/
interface IUsuario {
    name: string
    age: number,
    birthday: Date,
    email: string
}

const findUserByPropertie = <T extends IUsuario, K extends keyof T>( users: T[], key: K, value: T[K] ): IUsuario => {

    const user: IUsuario | undefined = users.find(user => user[key] === value)
    if(!user) { throw new Error('User not found') }
    return user
}

const user1: IUsuario = {
    name: 'Matias Morales',
    age: 27,
    birthday: new Date(),
    email: 'mati.mo@gmail.com'
}

const user3: IUsuario = {
    name: 'Morena Martinez',
    age: 31,
    birthday: new Date(),
    email: 'more.martinez@gmail.com'
}

const users: IUsuario[] = [user1, user3]

findUserByPropertie<IUsuario, "email">(users, 'email', 'more.martinez@gmail.com')

/*
    Inferencia de tipo.
    En este caso Typescript es capas de asumir el tipo enviado dandonos como resultado lo siguiente. const findUserByPropertie: <IUsuario, "email">(users: IUsuario[], key: "email", value: string) => IUsuario
*/
findUserByPropertie(users, 'email', 'more.martinez@gmail.com')