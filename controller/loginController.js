const tpUsuarios = require('../model/loginModel');
const cpfValidado = require('../dist/src/validadorCPF');
const jwt = require('jsonwebtoken');


const postLogin = async (req, res) => {
    try {
        
        let cpf = req.body.cpf.replaceAll(".","").replaceAll(" - ","");            
        let senha = req.body.senha;  
        let funcao = req.body.funcao;
        
        
        const cpfOK = await cpfValidado.loginCpf(cpf);  
            if(cpfOK == true){        
                const cpfs = await tpUsuarios.getLoginModel(cpf,senha,funcao);
                jwt.sign({id:req.body.id})
                res.status(200).json(cpfs);
            }else{
                console.log('Credenciais inválidas')
            }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            codigoErro: 500,
            mensagem: error
        });

    }
}


module.exports = {postLogin}