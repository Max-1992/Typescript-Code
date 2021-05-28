/*
    Constraint Generic

    Generic nos brinda una flexibilidad de trabajo muy grande, lo cual nos pone en la necesidad en algunas ocaciones de colocar un marco de trabajo en la implementacion de generic en el componente que estamos trabajando.
*/

/*
    Definimos una interfaz que va a delimitar el marco de trabajo
*/
interface IMedia {
    print(): void
}

/*
    Creamos las clases con las cuales vamos a trabajar, estas clase van a implementar la interfaz que va a regular el marco de trabajo.
*/
class Movie implements IMedia {
    constructor(private name: string) {}

    print(): void {
        console.log(`Pelicula ${this.name}`)
    }
}

class TvShow implements IMedia {
    constructor(private name: string) {}

    print(): void {
        console.log(`Series ${this.name}`)
    }
}

/*
    Creamos nuestra funcion principal utilizando los Tipos Genericos o los Generic Type. Sin embargo vamos a establecer una Constraint y para ello vamos a utilizar la interfaz declarada anteriormente que actualmente implementan nuestras clases. Con ella vamos a decirle a nuestra funcion generica "que solo puede recibir tipos que implementen dicha interfaz a través de la palabra reservada extends".
    De esta forma limitamos el uso de los tipos genericos a los declarados en nuestro constraint o marco de trabajo.
*/
const printMedia = <T extends IMedia>(medias: T[]): void => {
    medias.forEach((media: IMedia) => {
        media.print()
    })
} 

const movie: IMedia = new Movie('Batman Return')
const tvShow: IMedia = new TvShow('Arrow')

const media: IMedia[] = [movie, tvShow]

printMedia(media)

