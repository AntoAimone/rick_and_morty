import { useState } from "react";

function SearchBar({onSearch}) {
   const [character, setCharacter] = useState('')
   
 const handleChange = (event) => {
   setCharacter(event.target.value)
 }  
   return (
      <div>
          <input type='search' value={character} onChange={handleChange}/>
      <button onClick={() => onSearch(character)}>Agregar</button> 
      </div>
   );
}
export default SearchBar;

//onCHange, se dispara frente a un nuevo evento, y eso es cuando el usuario empeiza a escribir en el input y hace click. handleChange, una vez que pasa eso, lo pisa al estado con lo que haya puesto el usuario.
// creamos un boton "agregar" que le pasamos una funcion(onSearch) que me la esta mandano app, y la ejecuto cuando hago click.    solo paso la funcion no la llamo!