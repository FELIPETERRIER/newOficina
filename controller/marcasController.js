const tpMarcas = require('../model/marcasModel')

const getMarcas = async (req, res) => {
    try {

        const todasMarcas = await tpMarcas.getMarcasModel();
        res.status(200).json(todasMarcas);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            codigoErro: 500,
            mensagem: error
        });

    }
}
const saveMarcas = async (req, res) => {
    const marcas = { ...req.body }
    try {

        const novaMarca = await tpMarcas.saveMarcasModel(marcas);
        res.status(200).json(
            {
                dados: novaMarca
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
const delMarca = async (req, res) => {
    const deleteMarca = req.params.id
    try {

        const delMarca = await tpMarcas. deleteMarcaModel(deleteMarca);
        res.status(200).json(
            {
                dados: delMarca
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
const putMarca = async (req, res) => {
    const updateMarca = { ...req.body}
    const idMarca = req.params.id

    try {

            const putMarca = await tpMarcas.putMarcaModel(updateMarca,idMarca);
            res.status(200).json(
                {
                    dados: putMarca
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



    module.exports = { getMarcas, saveMarcas, delMarca, putMarca }
