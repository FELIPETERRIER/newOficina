const tpCarros = require('../model/tipoCarrosModel')

const getTpCarros = async (req, res) => {
    try {

        const todosTpCarros = await tpCarros.getTipoCarrosModel();
        res.status(200).json(todosTpCarros);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            codigoErro: 500,
            mensagem: error
        });

    }
}
const saveTpCarros = async (req, res) => {
    const carros = { ...req.body }
    try {

        const novoCarro = await tpCarros.saveTipoCarrosModel(carros);
        res.status(200).json(
            {
                dados: novoCarro
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
const delTpCarros = async (req, res) => {
    const deleteCarro = { ...req.params }
    try {

        const delCarro = await tpCarros.deleteCarroModel(deleteCarro);
        res.status(200).json(
            {
                dados: delCarro
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
const putTpCarros = async (req, res) => {
    const updateCarro = { ...req.body}

    try {

            const putCarro = await tpCarros.putCarroModel(updateCarro);
            res.status(200).json(
                {
                    dados: putCarro
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



    module.exports = { getTpCarros, saveTpCarros, delTpCarros, putTpCarros }
