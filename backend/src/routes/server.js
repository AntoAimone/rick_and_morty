const express= require('express');
const app =express();
const axios = require('axios');
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/rickandmorty/character/:id', async (req, res)=>{
    try {
        //aplicamos axios
       const {id} = req.params;
       // como no estamos trabajando con informacion, le pido a una api.
       const response = await axios(`https://rickandmortyapi.com/api/character/${id}`); 
        const data = response.data;
        const infoCharacter ={
            id: data.id,
            name: data.name,
            species: data.species,
            gender: data.gender,
            image: data.image
        }
        res.status(200).json(infoCharacter);
    } catch (error) {
    res.status(404).send(error.message); // 404 indica que es un error del cliente.
    }
})

app.get('/rickandmorty/detail/:detailId', async(req,res)=>{

    try {
        const {detailId} = req.params;
        //puedo hacer tambien el destructuring de responde en {data} y en la const infoCharacterDetail pongo data
        const  response = (await axios(`https://rickandmortyapi.com/api/character/${detailId}`)).data;
        //puedo hacer como arriba o englobando todo en el data. son diferentes formas.
        const infoCharacterDetail = {
            name: response.name,
            status: response.status,
            species: response.species,
            gender: response.gender,
            image: response.image,
            origin: response.origin
        }
        res.status(200).json(infoCharacterDetail);
    } catch (error) {
        res.status(404).send(error.message);
    }
})

let fav = []; 

app.get('/rickandmorty/fav', (req,res) => {
  
    res.status(200).json(fav);
})
// con esto me traigo los personajes guardados en fav

app.post('/rickandmorty/fav', (req,res) => {
 
 fav.push(req.body);
 // la info me llega por el body
 res.status(200).send('Se guardaron correctamente.');
})

app.delete('/rickandmorty/fav/:id', (req,res) => {
   
    const {id} = req.params;
    const favFiltered = fav.filter(char => char.id !== parseInt(id));
    // uso el parseInt xq llega por params
    fav = favFiltered;
    
    res.status(200).send('Se eliminó correctamente.')
})




module.exports = app;


// ESTO ES EL SERVER CON HTTP :
// let http = require('http');
// const getChardById = require('../controllers/getCharById');
// const getChardDetail= require('../controllers/getChardDetail');

// http.createServer((req,res)=> {
//     res.setHeader('Access-Control-Allow-Origin', '*') // con esto, le damos permiso al front, que nos haga peticiones al back
//     let id= req.url.split('/').at(-1);
//     if(req.url.includes('onsearch')){
//         getChardById(res,id)
//     }
//     if(req.url.includes('detail')){
//         getChardDetail(res,id)
//     }
// }).listen(3001,'localhost') 




// ESTO ES EL EJERCICIO DE WEB SERVER QUE HABIA QUE BORRAR EN PROMISES:
// if(req.url.includes('rickandmorty/character')){
//     let id = req.url.split('/').at(-1)

//     let characterFilter = character.filter(char => char.id === Number(id))
//     // lo puedo hacer con find, asi me queda un {}, en vez de un [] con el filter

//     res.writeHead(200, {"Content-type": "application/json"}).end(JSON.stringify(characterFilter))
// } // lo tengo que parsear ya que la info viaja en json