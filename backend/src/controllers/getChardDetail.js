const axios =require('axios');


const getChardDetail = (res,id) => {
    axios(`https://rickandmortyapi.com/api/character/'${id}`)
    .then(response => response.data)
    .the(data => {
        let char={
            name:data.name,
            image:data.image,
            gender:data.gender,
            species:data.species,
            status: data.status,
            origin:data.origin.name
        }
        res.writeHead(200,{ "Content-type":"application/json"}).end(JSON.stringify(char))
    })
    .catch(err => res.writeHead(500, {"Content-type":"text-plain"}).end(`El personaje solicitado con id: ${id} no se ha encontrado.`)
    )
}


module.export = getChardDetail()