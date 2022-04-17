import React from "react";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs"
// en este componente es donde se usa el custom hook el cual a su vez hace uso del helper que hace el pedido a la api

export const GifGrid = ({  category }) => {
    // data: images, eso es para renombrar la propiedad data asi que ahora al hacerle referencia se lo hace como images
    // data y loading se estan desestructurando del hook ya que el mismo retorna el state el cual tiene esos datos
    const {data : images, loading} = useFetchGifs(category) // aca es donde se le pasa la categoria al hijo para que pueda hacer la busqueda

    // el {loading} es un if ternario reducido
    return(
        <>
            <h2>
                {category}
            </h2>
            
            {loading && <p>loading...</p>} 

            <div>
                { // se mapea images que es donde estarian todos los gifs
                    images.map(image => (
                        <GifItem // en el helper que hicimos el cual consulta a la api se creo una constante gifs el cual le da un if a cada imagen
                            key = {image.id}
                            {...image} // se hace esto para pasar todas las propiedades con el spread operator y no escribirlas una a una
                        />
                    ))
                }
            </div>
        </>
    )
}