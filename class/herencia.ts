/*
    La herencia basicamente nos permite extender una clase de otra.
*/

interface IBellable {
    currentBill: () => string
}

interface IFly {
    fly: () => void
}

class Vehiculo {

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

    public drive(): void {
        console.log(`Conduciendo mi ${this.brand} modelo ${this.model}, color ${this.color}`)
    }

}

class Auto extends Vehiculo implements IBellable {

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

    public currentBill(): string {
        return `El auto marca ${this.brand} modelo ${this.model} fue facturado por el precio de ${this.price} dólares.`
    }

}

class Plane extends Vehiculo implements IBellable, IFly {

    public drive(): void {
        // Pre-condiciones identicas a las del padre.
        console.log(`Recorriendo pista con mi avion marca ${this.brand} modelo ${this.model}, color ${this.color}`)
        // Post-condiciones iguales o superiores a las del padre.
    }

    public currentBill(): string {
        return `El avion marca ${this.brand} modelo ${this.model} fue facturado por el precio de ${this.price} dólares.`
    }

    public fly(): void {
        console.log(`Volando con mi avion marca ${this.brand} modelo ${this.model}.`)
    }

}


const vehiculo = new Vehiculo('Peugeot', '208', 'Azul', 50000);
vehiculo.drive()

const auto = new Auto('Peugeot', '208', 'Azul', 50000);
auto.drive()

auto.setColor = 'Black'
auto.setPrice = 45000

console.log('COLOR: ', auto.getColor);
console.log('PRICE: ', auto.getPrice);

