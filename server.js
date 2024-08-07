const express = require('express');
const app = express();
//const cors = require('cors')
const port = 3001;



/*app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","http://localhost:3001")
    res.header("Access-Control-Allow-Methods",['GET', 'PUT', 'POST','DELETE'])
    res.header("Access-Control-Allow-Headers",'Content-Type')
    app.use(cors())
    next()
})*/


const loginController = require('./controller/loginController');
const funcoesController  = require('./controller/funcoesController');
const pecasController = require('./controller/pecasController');
const servicosController = require('./controller/servicosController');
const carrosController = require('./controller/carrosController');
const marcasController = require('./controller/marcasController');
const pessoasController = require('./controller/pessoasController');

const dotenv = require('dotenv');
dotenv.config();

app.use(express.json())
app.use(express.urlencoded({extended: true}));

//Carros
app.get('/carros',carrosController.getTpCarros);
app.post('/carros',carrosController.saveTpCarros);
app.delete('/carros/:id',carrosController.delTpCarros);
app.put('/carros/:id',carrosController.putTpCarros);

//Marcas
app.get('/marcas',marcasController.getMarcas);
app.post('/marcas',marcasController.saveMarcas);
app.delete('/marcas/:id',marcasController.delMarca);
app.put('/marcas/:id',marcasController.putMarca);

//Pecas
app.get('/pecas',pecasController.getTpPecas);
app.post('/pecas',pecasController.saveTpPecas);
app.delete('/pecas/:id',pecasController.delTpPeca);
app.put('/pecas/:id',pecasController.putTpPeca);

//Pessoas
app.get('/pessoas',pessoasController.getPessoas);
app.get('/pessoa/:cpf',pessoasController.getPessoa);
app.post('/pessoas',pessoasController.savePessoas);
app.delete('/pessoas/:id',pessoasController.deletePessoas);
app.put('/pessoas/:id',pessoasController.putPessoa);

//funcoes
app.get('/funcao',funcoesController.getFuncaoUsuario);
app.post('/funcao',funcoesController.saveFuncaoUsuario);
app.delete('/funcao/:id',funcoesController.delFuncaoUsuario);
app.put('/funcao/:id',funcoesController.putFuncaoUsuario);

//Serviços
app.get('/servico',servicosController.getServicos);
app.post('/servico',servicosController.saveServico);
app.delete('/servico/:id',servicosController.deleteServicos);
app.put('/servico/:id',servicosController.putTpServico);

app.post('/login', loginController.postLogin);
app.listen(port,()=>{
    console.log("servidor rodando na porta " +port)
})

