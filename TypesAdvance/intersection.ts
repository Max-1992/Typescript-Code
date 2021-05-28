/*
    Tipo de intersección

    La idea de este tipo de datos es basicamente poder convinar tipos y reutilizar la mayor cantidad de codigo posible.
*/

/*
    Utilizando interfaces
*/
interface IUser {
    name: string
    startDate: Date
}

interface IAdmin {
    name: string
    permission: string[]
}

interface IUserAdmin extends IAdmin, IUser {
    
}


const admin: IUserAdmin = {
    name: 'Gonzalo Garcia',
    startDate: new Date(),
    permission: ['admin']
}

/*
    Utilizando Type
*/
type User = {
    name: string
    startDate: Date
}

type Admin = {
    name: string
    permission: string[]
}

type UserAdmin = User & Admin;


const administrator: UserAdmin = {
    name: 'Gonzalo Garcia',
    startDate: new Date(),
    permission: ['admin']
}
