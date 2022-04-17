// siempre que un archivo js tiene en su nombre antepuesto use, es para aclarar que es un hook
// este hook es un custom hook ya que esta personalizado de algun modo modificando o alargando la funcionalidad que tendria un hook, en este caso estariamos en la instancia de tener la info de la api y queremos almacenarla
// si tenemos esa informacion la mostramos y si no la tenemos no lo hacemos y mientras la informacion esta viniendo mostraremos un loader

// vamos a importar de react dos hooks para poder hacer uso de ellos
import {useState, useEffect} from "react"
// useEffect me permite simplificar el siclo de vida que tendria un componente con clase, con useEffect yo puedo trabajar sobre el ciclo de vida de un componente
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data : [],
        loading : true // esto de aca es para saber si esta cargando o no y en base a eso efectuar una accion corespondiente
    });

    useEffect(() => {
        getGifs(category)
            .then(gifs => {
                setState({
                    data : gifs,
                    loading : false
                })
            })
    }, [category])
    return state
}
