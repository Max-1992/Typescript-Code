enum Roles {
    Doctor,
    Anestesista,
    Asistente,
    Administrativo
}

interface IStaff {
    nombre: string
    email: string
    role: Roles
}

const medico: IStaff = {
    nombre: 'Matias Garcia',
    email: 'matias.garcia@medic.com',
    role: Roles.Doctor
}


const prinStaffo = (staff: IStaff) => {
    console.log('STAFF: ', staff);
}