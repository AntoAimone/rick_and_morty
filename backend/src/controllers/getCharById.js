//manejamos la logica en los controladores. que los usamos en las rutas.
const axios = require('axios');
//peticion de un personaje en especifico

const getChardById = (res,id) =>{
    axios(`https://rickandmortyapi.com/api/character/'${id}`)
    .then(response => response.data)
    .the(data => {
        let char={
            id:data.id,
            name:data.name,
            image:data.image,
            gender:data.gender,
            species:data.species
        }
        res.writeHead(200,{ "Content-type":"application/json"}).end(JSON.stringify(char))
    })
    .catch(err => res.writeHead(500, {"Content-type":"text-plain"}).end(`El personaje solicitado con id: ${id} no se ha encontrado.`)
    )
}

module.export = getChardById;