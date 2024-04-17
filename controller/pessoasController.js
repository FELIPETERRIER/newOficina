const pesM = require('../model/pessoaModel');

const getPessoas = async (req, res) => {
    try {

        const todasPessoas = await pesM.getPessoasModel();
        res.status(200).json(todasPessoas);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            codigoErro: 500,
            mensagem: error
        });

    }
}
const savePessoas = async (req, res) => {
    const pessoa = {...req.body}
    try {
        const result = await pesM.savePessoaModel(pessoa);

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
const deleteTpPessoas = async (req, res) => {
    const deletePessoas = req.params.id
    try {

        const delPessoa = await pesM.deletePessoaModel(deletePessoas);
        res.status(200).json(
            {
                dados: delPessoa
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
const putTpPessoa = async (req, res) => {
    const updatePessoa = { ...req.body}

    try {

            const putPessoa = await pesM.putPessoaModel(updatePessoa);
            res.status(200).json(
                {
                    dados: putPessoa
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
module.exports = {getPessoas, savePessoas,putTpPessoa,deleteTpPessoas}
