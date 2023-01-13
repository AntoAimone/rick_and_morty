import Card from './Card';

 function Cards({characters}) { //character es un [] de {}, 
   
   return (
      <div>
         {
         characters.map(({name,species,gender,image, id })=>{
          return <Card 
            key= {id}
            name={name}
            species={species}
            gender={gender}
            image= {image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
            />
         })
      }
      </div>
   )
}
// utilizo un map, xq me devuelve algo, un array siempre, por ejemplo el forEach(solo me sirve para iterar), no me devuelve nada, por ende, no tengo las cards en la pág.


export default Cards;