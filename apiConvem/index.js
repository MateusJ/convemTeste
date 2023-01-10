const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const server = express();
const respostas = require("./src/resposta/respostas.json")


server.use(morgan('dev'))
server.use(bodyParser.urlencoded({extended:false}))
server.use(express.json())
server.use(cors())

server.get('/respostas',(req,res )=>{
    return res.json(respostas);
})
server.post('/respostas',(req,res )=>{
    const body = req.body;
    
    if(!body)
        return res.status(400).end()

    if(body.respostaUsu.toUpperCase() == 'SIM'){
        body.respostaAPI = "Sucesso"
    }else{
        body.respostaAPI = "Erro"
    }
    
    respostas.push(body)
    return res.json(body)
})

server.listen(3000, ()=>{

    console.log('funfo');
})