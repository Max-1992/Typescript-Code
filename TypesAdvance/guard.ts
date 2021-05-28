/*
    Tipos de guardias.

    Estos tipos de guardias son un mecanismo que nos permite validar antes de utilizar un detreminado elemento a que tipo pertenece. En otras nos permite saber si una clase, objeto u etc pertenece a un tipo determinado.
*/

/*
    Utilizandolos con interfaces
*/
interface IBird {
    fly(): void
}

interface IFish {
    swim(): void
}

// interface IUknownPet extends IBird, IFish {} (De esta forma sería mas simple solucionarlo)

type IUknownPet = IBird | IFish 

const printPet = (pet: IUknownPet): void => {
    if(pet as IFish) {
        (pet as IFish).swim()
    }

    if(pet as IBird) {
        (pet as IBird).fly()
    }
}

const pet: IFish = { swim: (): void => {} }
const pet2: IBird = { fly: (): void => {} }
printPet(pet)
printPet(pet2)


/*
    Utilizandolos con clases
*/
class Bird {
    fly(): void {}
}

class Fish {
    swim(): void {}
}

type UknownPet = Bird | Fish 

const showPet = (pet: UknownPet): void => {
    if(pet instanceof Fish) {
        pet.swim()
    }

    if(pet instanceof Bird) {
        pet.fly()
    }
}

const petFish: UknownPet  = new Fish()
const petBird: UknownPet  = new Bird()
showPet(petFish);
showPet(petBird);