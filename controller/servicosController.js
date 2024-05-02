const pesM = require('../model/tipoServicoModel');

const getServicos = async (req, res) => {
    try {

        const todosServicos = await pesM.getTipoServicoModel();
        res.status(200).json(todosServicos);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            codigoErro: 500,
            mensagem: error
        });

    }
}
const saveServico = async (req, res) => {
    const servico = {...req.body}
    try {
        const result = await pesM.saveTipoServicoModel(servico);

        res.status(201).json(
            {
                dados: result
            }
        );

    } catch (error) {
        console.log(error);
        res.status(500).json({
            codigoErro: 500,
            mensagem: error
        });    }
    
}

const deleteServicos = async (req, res) => {
    const deleteServico = req.params.id
    try {

        const delServico = await pesM.deleteServicoModel(deleteServico);
        res.status(200).json(
            {
                dados: delServico
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

const putTpServico = async (req, res) => {
    const updateServico = { ...req.body}

    try {

            const putServico = await pesM.putServicoModel(updateServico);
            res.status(200).json(
                {
                    dados: putServico
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
module.exports = {getServicos,saveServico,deleteServicos,putTpServico}
