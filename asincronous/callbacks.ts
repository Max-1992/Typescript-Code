/*
    Las funciones callbacks son funciones pasadas como arguemento de otras funciones que generalemnte realiza un trabajo ascincrono. Estas funciones callbacks son ejecutadas luego de que las tareas ascincronas sean completada, son utilizados para procesar el resultado de una funcion ascincrona.

    Las carácterisca que le permite a los callbacks existir se llama "High Order Function".

    La convención para la creación de funciones callbacks son dos arguemntos el primero para el manejo de el error y el seguno para los datos.
*/

class Family {
    constructor(
        public readonly name: string,
        public readonly castles: string[]
    ) {}
}

const lanninster = new Family('Lanninster', ['Winterfell', 'Casterly Rock'])
const targaryen = new Family('Targaryen', ['Dragonston', 'Summerhall'])

const families: Family[] = [lanninster, targaryen]

interface ICastleCallback {
    (err?: Error, castles?: string[]): void 
}

// Callback
const logCastleSearch = (err?: Error, castles?: string[]): void => {
    if(err) {
        console.log('ERROR: ', err.message);
        return;
    }

    console.log('CASTLES: ', castles);
    return;
}

// Asyncronus Function
const getCastlesByFamily = (family: string, callback: ICastleCallback ): void => {
    setTimeout(() => {
        try {
            let foundCastles = families.filter(element => element.name === family)
        
            if(foundCastles.length === 0) {
                throw new Error('Family not found')
            }
    
            const castles = foundCastles.map(family => family.castles[0])
            callback(undefined, castles)

        } catch (error) {
            callback(error, undefined)
        }
    }, 1000)
}


getCastlesByFamily('Lanninster', logCastleSearch);
getCastlesByFamily('Echeverre', logCastleSearch);
