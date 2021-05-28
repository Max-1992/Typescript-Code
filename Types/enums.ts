/*
    Tipo de dato Enums.
    Este tipo de dato existe en Typescript pero no existe en vanilla javascript.
    Los enums sirven para enumerar valores fijos dentro de un proyecto. Este tipo de datos es muy util cuando tenemos datos que son constantes y no se modifican.
    Debemos tener en cuenta que los enum especifica una posicion como valor de la misma manera que lo hacen los arrays.

    Un caso de uso comun podría ser el de una transacción bancaria en el cual vos tenes diferentes estados de tranaccion por ejemplo Pending | Rejected | Successful.
*/
enum transactionStatesEnabled { Pending, Rejected, Successful }

let transaction = {
    id: 1,
    status: transactionStatesEnabled.Pending
}
// Esto es igual a status: transactionStatesEnabled.Pending === status: 0

enum role { superAdmin, admin, client }

let user = {
    name: 'Manuel',
    role: role.admin
}
// Esto es igual a status: role: role.admin === status: 1

let user2 = {
    name: 'Manuel',
    role: role.client
}
// Esto es igual a status: role: role.admin === status: 2