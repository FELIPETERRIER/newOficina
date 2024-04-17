const tpPecas = require('../model/pecasModel')

const getTpPecas = async (req, res) => {
    try {

        const todosTpPecas = await tpPecas.getPecasModel();
        res.status(200).json(todosTpPecas);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            codigoErro: 500,
            mensagem: error
        });

    }
}
const saveTpPecas = async (req, res) => {
    const pecas = { ...req.body }
    try {

        const novaPeca = await tpPecas.savePecasModel(pecas);
        res.status(200).json(
            {
                dados: novaPeca
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
const delTpPeca = async (req, res) => {
    const deletePeca = req.params.id
    try {

        const delPeca = await tpPecas.deletePecaModel(deletePeca);
        res.status(200).json(
            {
                dados: delPeca
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
const putTpPeca = async (req, res) => {
    const updatePeca = { ...req.body}
    const idPeca = req.params.id

    try {

            const putPeca = await tpPecas.putPecaModel(updatePeca,idPeca);
            res.status(200).json(
                {
                    dados: putPeca  
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



    module.exports = { getTpPecas, saveTpPecas,delTpPeca,putTpPeca }
