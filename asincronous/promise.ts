/*
    Las promesas nos permite manejar codigo ascincrono de forma mas legible que los callbacks.
*/

class Family2 {
    constructor(
        public readonly name: string,
        public readonly castles: string[]
    ) {}
}

const lanninster1 = new Family2('Lanninster', ['Winterfell', 'Casterly Rock'])
const targaryen1 = new Family2('Targaryen', ['Dragonston', 'Summerhall'])

const families1: Family2[] = [lanninster1, targaryen1]


// Asyncronus Function
const getCastlesByFamilyPromise = (family: string): Promise<string[]> => {
    const promise: Promise<string[]> = new Promise ((resolve, reject) => {
        setTimeout(() => {
            try {
                let foundCastles = families1.filter(element => element.name === family)
            
                if(foundCastles.length === 0) {
                    throw new Error('Family not found')
                }
                const castles = foundCastles.map(family => family.castles[0])

                resolve(castles)
            } catch (error) {
                reject(error)
            }
        }, 1000)
    })

    return promise
}

console.log('Inicio');
getCastlesByFamilyPromise('Lanninster')
    .then(castles => console.log('CASTLES: ', castles))
    .catch(err => console.log('ERROR: ', err.message))

getCastlesByFamilyPromise('Lanninster')
    .then(castles => getCastlesByFamilyPromise('Targaryen'))
    .then(castles => console.log('CASTLES: ', castles))
    .catch(err => console.log('ERROR: ', err.message))

getCastlesByFamilyPromise('Echeverre')
    .then(castles => castles.length )
    .then(castles => console.log('Castle num: ', castles))
    .catch(err => console.log('ERROR: ', err.message))

console.log('Finalizo');