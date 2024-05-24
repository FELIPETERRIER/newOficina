const tpUsuarios = require('../model/loginModel')

const postLogin = async (req, res) => {
    try {
       console.log(req.query)
        const cpfs = await tpUsuarios.getLoginModel();
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