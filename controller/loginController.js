const tpUsuarios = require('../model/loginModel');
const cpfValidado = require('../dist/src/validadorCPF')

const postLogin = async (req, res) => {
    try {
        let funcao = req.body.post.typeUser
        let cpf = req.body.post.cpf.replaceAll(".","").replaceAll(" - ","");            
        let senha = req.body.post.senha;   
        console.log(req.body)    
        const cpfOK = await cpfValidado.loginCpf(cpf);  
            if(cpfOK == true){        
                const cpfs = await tpUsuarios.getLoginModel(cpf,senha,funcao);
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