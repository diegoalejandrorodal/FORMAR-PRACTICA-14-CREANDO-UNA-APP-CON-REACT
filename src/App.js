import React, { useState } from "react"
import { AddCategory } from './components/AddCategory'
import { GifGrid } from "./components/GifGrid";

export const App = () => {

  const [categories, setCategories] = useState([]) // aca es donde se define el inicio de las categorias como un array vacio ya que es en el hijo donde se lo va llenando con los valores nuevos
// el <></> es un fragment, el mismo sirve para poner componentes como hermanos sin necesidad de crear un nuevo nodo
  return (
    <> 
      <h1>
        Giphy Browser
      </h1>

      {
        <AddCategory 
        setCategories={setCategories}
        // el setCategories es lo que este componente padre le va a pasar a su componente hijo
        />
      }

      <ol>
        {
          categories.map(( category, index) => (
            // nosotros lo que queremos aca es renderizar el componente que va a mostrar todos los gifs
            <GifGrid
              // al hacer un map siempre hay que especificar un key o id
              key={category + index}
              category={category}
            />
          ))
          // en react solo hay que usar metodos de array que devuelvan algo como en este caso map
        } 
      </ol>

    </>
  );
}
