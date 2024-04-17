const tpUsuario = require('../model/tipoUsuarioModel')

const getTpUsuario = async (req, res) => {
    try {

        const todosTpUsuarios = await tpUsuario.getTipoUsuarioModel();
        res.status(200).json(todosTpUsuarios);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            codigoErro: 500,
            mensagem: error
        });

    }
}
const saveTpUsuario = async (req, res) => {
    const usuario = { ...req.body }
    try {

        const novoUsuario = await tpUsuario.saveTipoUsuarioModel(usuario);
        res.status(200).json(
            {
                dados: novoUsuario
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
const delTpUsuario = async (req, res) => {
    const deleteUsuario = { ...req.params }
    try {

        const delUsuario = await tpUsuario.deleteTipoUsuarioModel(deleteUsuario);
        res.status(200).json(
            {
                dados: delUsuario
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
const putTpUsuario = async (req, res) => {
    const updateUsuario = { ...req.body}

    try {

            const putUsuario = await tpUsuario.putTipoUsuarioModel(updateUsuario);
            res.status(200).json(
                {
                    dados: putUsuario
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



    module.exports = { getTpUsuario, saveTpUsuario, delTpUsuario, putTpUsuario }
