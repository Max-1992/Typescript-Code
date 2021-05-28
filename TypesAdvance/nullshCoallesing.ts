/*
    Tipe Nullsh Coallesing

    Se utiliza para mostrar algo diferente a undefined cuando sabemos que una propiedad es null. Utilizanod la notación de doble "??" podemos enviar un valor por defecto si una propiedad es nula.
*/

interface IMovie {
    title: string
    genres: string[]
    year: number
    director?: { name: string }
}

const fetchedMovieData: IMovie = {
    title: 'Dragon Ball',
    genres: ['Anime', 'Accion', 'Fantasia'],
    year: 2019
    // director: { name: 'Mazami Kurumada' }
}

console.log(fetchedMovieData.director.name ?? 'Director no encontrado');