/*
    Las promesas nos permite manejar codigo ascincrono de forma mas legible que los callbacks.
*/

class Family3 {
    constructor(
        public readonly name: string,
        public readonly castles: string[]
    ) {}
}

const lanninster3 = new Family3('Lanninster', ['Winterfell', 'Casterly Rock'])
const targaryen3 = new Family3('Targaryen', ['Dragonston', 'Summerhall'])

const families3: Family3[] = [lanninster3, targaryen3]


// Asyncronus Function
const getCastlesByFamilyAsync = async (family: string): Promise<string[]> => {
    
    let foundCastles = families3.filter(element => element.name === family)

    if(foundCastles.length === 0) {
        throw new Error('Family not found')
    }
    const castles = foundCastles.map(family => family.castles[0])

    return castles   
}



const logAsyncCastle = async (family: string) => {
    try {
        const castles = await getCastlesByFamilyAsync(family)
        return castles
    } catch (error) {
        return error.message
    }
}

logAsyncCastle('Lanninster')
    .then(castles => console.log('CASTLES: ', castles))
    .catch(err => console.log('ERROR: ', err.message))

logAsyncCastle('Targaryen')
    .then(castles => console.log('CASTLES: ', castles))
    .catch(err => console.log('ERROR: ', err.message))

logAsyncCastle('Echeverre')
    .then(castles => console.log('CASTLES: ', castles))
    .catch(err => console.log('ERROR: ', err.message))



console.log('Finalizo');