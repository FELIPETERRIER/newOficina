const tpUsuarios = require('../model/loginModel')


const postLogin = async (req, res) => {
    try {
      
       let cpf = req.body.post.cpf.replaceAll(".","").replaceAll(" - ",""); 
      
        let senha = req.body.post.senha;
      
       
        
        const cpfs = await tpUsuarios.getLoginModel(cpf,senha);
        res.status(200).json(cpfs);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            codigoErro: 500,
            mensagem: error
        });

    }
}


module.exports = {postLogin}