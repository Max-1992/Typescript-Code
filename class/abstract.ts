/*
    Las clases abstractas son clases que no pueden ser instanciadas, se utilizaban antes de la introduccion del concepto de interfaces.
*/

abstract class Vehiculoo {

    protected readonly brand: string
    protected readonly model: string
    protected color: string
    protected price: number

    constructor(brand: string, model: string, color: string, price: number) {
        this.brand = brand
        this.model = model
        this.color = color
        this.price = price
    }

    /* Getters */
    get getPrice() {
        return this.price;
    }

    get getColor() {
        return this.color;
    }

     /* Setters */
    set setPrice(price: number) {
        this.price = price;
    }

    set setColor(color: string) {
        this.color = color;
    }

    public drive(): void {}
}

class Coche extends Vehiculoo {

    constructor(brand: string, model: string, color: string,  price: number) {
        super(brand, model, color,  price)
    }

    /* 
        Sustitución de metodo (Sustitución de Liskov)
    */
    public drive(): void {
        // Pre-condiciones identicas a las del padre.
        console.log(`Conduciendo mi auto marca ${this.brand} modelo ${this.model}, color ${this.color}`)
        // Post-condiciones iguales o superiores a las del padre.
    }

}

class AirPlane extends Vehiculoo {

    /* 
        Sustitución de metodo (Sustitución de Liskov)
    */
    public drive(): void {
        // Pre-condiciones identicas a las del padre.
        console.log(`Conduciendo mi aeroplano marca ${this.brand} modelo ${this.model}, color ${this.color}`)
        // Post-condiciones iguales o superiores a las del padre.
    }
}

/*
NO PODEMOS GENERAR UNA INSTANCIA DE UNA CLASE ABSTRACTA
const vehiculo = new Vehiculoo('Peugeot', '208', 'Azul', 50000);
vehiculo.drive()
*/

const coche = new Coche('Peugeot', '208', 'Azul', 50000);
coche.drive()

coche.setColor = 'Black'
coche.setPrice = 45000

const airplane = new AirPlane('Boin', '747', 'white', 50000000);
airplane.drive()

console.log('COLOR: ', coche.getColor);
console.log('PRICE: ', coche.getPrice);