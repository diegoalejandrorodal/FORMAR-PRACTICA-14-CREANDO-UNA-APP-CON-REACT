// category es la palabra clave que el usuario ingrese en el buscador de nuestra app por ejemplo; rambo,bambi,zero two, etc
export const getGifs = async (category) => {
    try {
        // se guarda la apiKey aparte para poder hacerla dinamica a la hora de cambiarla
        const apiKey = "bmvQeYYEc4ecboFlsfjGXxCOEv4ooIqQ"
        // se guarda y edita la url a la cual hacerle la consulta 
        const url = ` https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10 ` 
        // se le hace la consulta con await a la url donde esta le endpoint y se guarda dentro de la constante response que hace alucion a la respuesta de la api
        const response = await fetch(url)
        // se extrae la propiedad data de toda la informacion que trae la query de la api mediante desestructuracion
        const {data} = await response.json()
        // se muestra la informacion de data por consola
        const gifs = data.map( img => (
            {
                id : img.id,
                title : img.title,
                url : img.images.downsized_medium.url
            }
        ))

        return gifs

    } catch (err) {
        // los errores se manejan mediante el catch y se muestran por consola con un warn para difetenciarlos mejor
        console.warn(err)
        return[]
        // el return[] esta por si devuelve un array vacio por ejemplo si la busqueda no se encuentra en su base de datos, de esta manera no devolvera undefined y sera mas facil trabajar con ese error y de ese modo la app no rompera tan facil
    }
}

