import './App.css';
import Cards from './components/Cards.jsx';
import Nav from "./components/Nav";
import { useState } from 'react';
import About from './components/About';
import Detail from './components/Detail';
import { Routes, Route} from "react-router-dom";

function App () {
  const [characters,setCharacters] =useState([]);
  
  const onSearch = (character) => {
    fetch(`http://localhost:3001/rickandmorty/onsearch/${character}`)
    .then((response) => response.json())
    .then((data) => {
       if (data.id) {
          setCharacters((oldChars) => [...oldChars, data]);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    })
    .catch(err => console.log(err))
  }

  const onClose = (id) => {
    setCharacters(
      characters.filter(character => character.id !== id)
    )
  }
  
  return (
    <div className='App' style={{ padding: '25px' }}>
      <Nav onSearch={onSearch}/>  
     
       <Routes>
        <Route path='home' element={ <Cards onClose = {onClose} characters={characters}/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='detail/:detailId' element={<Detail/>}/>
      </Routes>
    
    </div>
  )
}

export default App;
