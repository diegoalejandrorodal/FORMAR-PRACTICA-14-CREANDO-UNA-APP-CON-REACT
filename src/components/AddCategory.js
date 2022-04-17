import React, {useState} from "react"

export const AddCategory = ({ setCategories }) => {
    // de su componente padre se recive por props el setCategories el cual esta dentro del objeto props ya que las props es un objeto se puede desestructurar y asi acceder a una propiedad en concreto como en este caso. el componente padre tiene el estado de categoria y este componente hijo se va a encargar de setear el estado de categoria que va a tener el componente padre
    // aca se esta definiendo un array de categorias para que en la vista se vallan sumando los resultados y no se borren cuando se haga un nuevo pedido
    // se le da el setCategories por que el el aray con las categrias antes buscadas y asi se le pueden seguir sumando mas sin que se borren las anteriores
    const [inputValue, setInputValue] = useState(''); // aca estamos seteando el estado inicial el cual sera un string vacio, para que? para que por defecto el valor del input este vacio y no se quede con el valor que le demos al querer hacer la busqueda ya que al hacer la busqueda el componente se recarga y se le da el valor inicial

    const handleInputChange = ({ target }) => { // del evento que viene por parametro solo nos interesa el tarjet por eso se desestructura, para evitar usar demas el dot notation aunque seria un solo nivel: event.tarjet.value
        setInputValue(target.value) // aca se setea el valor del unput
    }

    const handleSubmit = (e) => {
        // este es el manejador del envio de formulario

        e.preventDefault();
        // aca se esta preveniendo el eventro del form para que no se envie
        if(inputValue.trim().length > 2){
        // aca se esta comparando el valor que se ingreso en el imput y si su largo es mayor a 0 es decir si no esta vacio se ejecuta el codigo, el trim es para sacarle los espacioos si es que tiene y asi evitar problemas

            setCategories(categories => [inputValue, ...categories])
            // aca es donde ocurre la magia, se setea una categoria nueva la cual es el valor del input, se devuelve un array con las categorias antiguas y al principio se muestra la ultima buscada para que de esa manera la busqueda realizada no quede al final
            setInputValue('') // se le setea el value al input como un str vacio para poder seguir haciendo busquedas sin tener que borrar el anterior valor
        }

    }

    return(
        // cuando se dispare el evento de onSubmit es decir, cuando se envie el formalario el que se va a ecargar de la logica de ese evento sera el handleSubmit, otra forma de verlo es que cuando se dispare ese evento se ejecutara o llamara a la funcion handleSubmit
        <form onSubmit={handleSubmit}>
            <input 
                type= "text"
                value={inputValue} // el valor de este imput lo va a definir el estado inicial con useState
                onChange={handleInputChange} // cuando se detecte un cambio se va a manejaar con un change handler
            />
        </form>
    )
}