const express = require('express');
const app = express();
const port = 3003;

const loginController = require('./controller/loginController');
const usuariosController = require('./controller/usuariosController');
const tipoUsuarioController  = require('./controller/tipoUsuarioController');
const pecasController = require('./controller/pecasController');
const servicosController = require('./controller/servicosController');
const carrosController = require('./controller/carrosController');
const marcasController = require('./controller/marcasController')
const pessoasController = require('./controller/pessoasController');
const dotenv = require('dotenv');
dotenv.config();

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.get('/carros',carrosController.getTpCarros);
app.post('/carros',carrosController.saveTpCarros);
app.delete('/carros/:id',carrosController.delTpCarros);
app.put('/carros/:id',carrosController.putTpCarros);

app.get('/marcas',marcasController.getMarcas);
app.post('/marcas',marcasController.saveMarcas);
app.delete('/marcas/:id',marcasController.delMarca);
app.put('/marcas/:id',marcasController.putMarca);

app.get('/pecas',pecasController.getTpPecas);
app.post('/pecas',pecasController.saveTpPecas);
app.delete('/pecas/:id',pecasController.delTpPeca);
app.put('/pecas/:id',pecasController.putTpPeca);

//tipos Usuarios
app.get('/tipoUsuarios',tipoUsuarioController.getTpUsuario);
app.post('/tipoUsuarios',tipoUsuarioController.saveTpUsuario);
app.delete('/tipoUsuarios/:id',tipoUsuarioController.delTpUsuario);
app.put('/tipoUsuarios/:id',tipoUsuarioController.putTpUsuario);




app.get('/pessoas',pessoasController.getPessoas);
app.post('/pessoas',pessoasController.savePessoas);
app.delete('/pessoas/:id',pessoasController.deleteTpPessoas);
app.put('/pessoas/:id',pessoasController.putTpPessoa);


app.post('/usuarios', usuariosController.postUsuarios);
app.get('/usuarios/:id', usuariosController.getUsuarios);

app.get('/servicos', servicosController.getServicos);
app.get('/', loginController.getLogin);
//app.post('/salvarServicos',salvarServicosController.postSalvarServicos);
//app.post('/salvarPecas',salvarPecasController.postSalvarPecas);

app.listen(port)
