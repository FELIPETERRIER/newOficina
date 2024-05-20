const tpUsuarios = require('../model/loginModel')

const getLogin = async (req, res) => {
    try {

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
/*const saveMarcas = async (req, res) => {
   
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
}*/



module.exports = { getLogin}