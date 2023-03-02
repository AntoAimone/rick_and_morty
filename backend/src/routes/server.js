let http = require('http');
const getChardById = require('../controllers/getCharById');
const getChardDetail= require('../controllers/getChardDetail');

http.createServer((req,res)=> {
    res.setHeader('Access-Control-Allow-Origin', '*') // con esto, le damos permiso al front, que nos haga peticiones al back
    let id= req.url.split('/').at(-1);
    if(req.url.includes('onsearch')){
        getChardById(res,id)
    }
    if(req.url.includes('detail')){
        getChardDetail(res,id)
    }
}).listen(3001,'localhost') 




// ESTO ES EL EJERCICIO DE WEB SERVER QUE HABIA QUE BORRAR EN PROMISES:
// if(req.url.includes('rickandmorty/character')){
//     let id = req.url.split('/').at(-1)

//     let characterFilter = character.filter(char => char.id === Number(id))
//     // lo puedo hacer con find, asi me queda un {}, en vez de un [] con el filter

//     res.writeHead(200, {"Content-type": "application/json"}).end(JSON.stringify(characterFilter))
// } // lo tengo que parsear ya que la info viaja en json