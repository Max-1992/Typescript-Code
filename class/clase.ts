/*
    Una clase es basicamente la definicion de un conjunto de objetos similiares. Posee características y capacidades.
*/

class Vehicle {

    private readonly brand: string
    private readonly model: string
    public color: string

    constructor(brand: string, model: string, color: string) {
        this.brand = brand
        this.model = model
        this.color = color
    }

    public drive(): void {
        console.log(`Conduciendo mi ${this.brand} modelo ${this.model}, color ${this.color}`)
    }

}

const vehicle = new Vehicle('Peugeot', '208', 'Azul');
vehicle.drive()