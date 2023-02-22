export default function Card({name,species,gender,image,onClose}) {
   return (
      <div>
       <button onClick={onClose}>X</button>
         <h2 >{name}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img src={image} alt= {name} />
      </div>
   );
}
 // al desconstruir el props hago que todo sea mas comodo en las siguientes líneas, accedo directamente a las propiedades.
 // lo unico que hace es mostrar en pantalla lo que yo le pase 

 //a card lo utilizo como plantilla 