/*
    Tipo Optional Chining

    Este tipo se utiliza cuando realizamos peticiones hacia recursos externos como un backend o la api de algun servicio y no sabemos si la respuesta puede ser nula. Para solventar esto podemos utilizar el simbolo de "?" optional chaininig.
*/

interface IMedia {
    title: string
    genres: string[]
    year: number
    director?: { name: string }
}

const fetchedMediaData: IMedia = {
    title: 'Dragon Ball',
    genres: ['Anime', 'Accion', 'Fantasia'],
    year: 2019
    // director: { name: 'Mazami Kurumada' }
}

console.log(fetchedMediaData.director?.name);