const funcaoUsuario = require('../model/funcoesModel');


const getFuncaoUsuario = async (req, res) => {
    try {

        const todasFuncoesUsuarios = await funcaoUsuario. getFuncaoUsuario();
        res.status(200).json(todasFuncoesUsuarios);
             

    } catch (error) {
        console.log(error);
        res.status(500).json({
            codigoErro: 500,
            mensagem: error
        });

    }
}
const saveFuncaoUsuario = async (req, res) => {
    const funcao = { ...req.body }
    try {

        const novaFuncao = await funcaoUsuario.saveFuncaoUsuario(funcao);
        res.status(200).json(
            {
                dados: novaFuncao
            }
        );

    } catch (error) {
        console.log(error);
        res.status(500).json({
            codigoErro: 500,
            mensagem: error
        });

    }
}
const delFuncaoUsuario = async (req, res) => {
    const deletaFuncao = { ...req.params }
    try {

        const delFuncao = await funcaoUsuario. deleteFuncaoUsuario(deletaFuncao);
        res.status(200).json(
            {
                dados: delFuncao
            }
        );

    } catch (error) {
        console.log(error);
        res.status(500).json({
            codigoErro: 500,
            mensagem: error
        });

    };
}
const putFuncaoUsuario = async (req, res) => {
    const updateFuncao = { ...req.body}

    try {

            const putFuncao = await funcaoUsuario.putFuncaoUsuario(updateFuncao);
            res.status(200).json(
                {
                    dados: putFuncao
                }
      
            );

    } catch (error) {
            console.log(error);
            res.status(500).json({
                codigoErro: 500,
                mensagem: error
            });

    }
}



    module.exports = { getFuncaoUsuario, saveFuncaoUsuario, delFuncaoUsuario, putFuncaoUsuario }
