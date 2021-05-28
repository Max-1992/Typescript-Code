enum Role {
    doctor,
    nurse,
    admin
}

// Declare Interface
interface IStaffing {
    info: () => any;
}

interface IDoctor {
    nombre: string
    email: string
    role: Role
}

interface INurse {
    nombre: string
    email: string
    role: Role
}

interface IAdmin {
    nombre: string
    email: string
    role: Role
}

interface Billing {
    createInvoice: (price: number) => void
}

interface IBilling {
    createInvoice: (price: number) => void
}

// Declare class
class Doctor implements IStaffing {

    constructor(private readonly doctor: IDoctor) {}

    info() {
        return this.doctor;
    }
}

class Nurse implements IStaffing {

    constructor(private readonly nurse: INurse) {}

    info() {
        return this.nurse;
    }
}

class Admin implements IStaffing, IBilling {

    constructor(private readonly admin: IAdmin) {}

    info() {
        return this.admin;
    }

    createInvoice(price: number) {
        console.log(this.admin.nombre, ' dice que se realizo la factura por un monto de: ', price);
    }
}

// Declare elements
const doctor: IDoctor = {
    nombre: 'Matias Garcia',
    email: 'matias.garcia@medic.com',
    role: Role.doctor
}

const admin: IAdmin = {
    nombre: 'Sol Gonzalez',
    email: 'sol.gonzalez@medic.com',
    role: Role.admin
}

const nurse: INurse = {
    nombre: 'Marcela Morales',
    email: 'marcela.morales@medic.com',
    role: Role.nurse
}

// Main function
const prinStaffing = (staff: IStaffing) => {
    console.log('STAFF: ', staff.info() )
}

const prinCurrency = (staff: IBilling) => {
    staff.createInvoice(2500)
}

prinStaffing(new Doctor(doctor))
prinStaffing(new Nurse(nurse))
prinStaffing(new Admin(admin))
prinCurrency(new Admin(admin))
