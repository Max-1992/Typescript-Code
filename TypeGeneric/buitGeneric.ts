/*
    Buit in Generic

    Extiste alguna clases que nos otorga Typescript para trabajar con generic
*/

/*
    En este ejemplo vamos a trabajar con el método "Partial<Tipe>" el método Partial nos permite decir que vamos a crear un objeto parcial de alguan clase o bien que el objeto cumplirar parcialmente con alguna interfaz.
    Luego deberemos utilizar el castio para indicarle a Typescript que estamos seguros que el objeto cumple el tipo esperado.

    Este método es muy utilizado cuando necesitamos crear objetos de a partes o bien cuando no queremos retornar todos los datos de un objeto sino solo una parte de estos.
*/
class Footwear {
    constructor(public brand: string, public model: string) {}
}

const createFootwear = (brand: string, model: string): Footwear => {
    const footwear: Partial<Footwear> = new Footwear(brand, model)
    footwear.brand = 'adidas'
    return footwear as Footwear
}

/*
    La funcion Readonly nos permite generar variables inmutable ya que restringe el acceso a solo lectura.
*/
let collectionBrands: Readonly<string[]> = ['string1', 'string2']

/*
    Más funcione de generic

    Partial<T>
    Readonly<T>
    Record<T>
    Pick<T>
    Omit<T>
    Exclude<T>
    Extract<T>
    NonNullable<T>
    Parameters<T>
    ConstructorParameters<T>
    ReturnType<T>
    Required<T>
    ThisParameterType<T>
    OmitThisParameter<T>
    ThisType<T>
*/