/*
    El tipo de uniones discriminadas.

    Este es un patrón que consta de colocar un tipo a cada una de las interfaces para poder discriminarlas. Basicamente debemos colocar una propiedad comun a todas las interfaces que luego nos permita discriminarlas.
*/

interface ISquare {
    type: 'Square'
    size: number
}

interface IRectangle {
    type: 'Rectangle'
    height: number
}

interface ICircle {
    type: 'Circle'
    radius: number
}

type Shape = ISquare | IRectangle | ICircle

const printShape = (shape: Shape): void => {
    switch (shape.type) {
        case 'Square':
            shape.size
            break;

        case 'Rectangle':
            shape.height
            break;

        case 'Circle':
            shape.radius
            break;
    
        default:
            break;
    }
}