function SearchBar({onSearch}) {
   return (
      <div>
          <input type='search' />
      <button onClick={onSearch}>Agregar</button> 
      </div>
   );
}
export default SearchBar;


// creamos un boton "agregar" que le pasamos una funcion(onSearch) que me la esta mandano app, y la ejecuto cuando hago click.    solo paso la funcion no la llamo!