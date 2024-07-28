const pesM = require('../model/pessoaModel');

const getPessoas = async (req, res) => {
    try {

        const todasPessoas = await pesM.getPessoasModel();
        return res.status(200).json(todasPessoas);

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            codigoErro: 500,
            mensagem: error
        });

    }
}
const getPessoa = async (req, res) => {
    try {    

        const pessoa = await pesM.getPessoaModel( req.params.cpf);
       return res.status(200).json(pessoa);

    } catch (error) {
        console.log(error);
       return res.status(500).json({
            codigoErro: 500,
            mensagem: error
        });

    }
}

const savePessoas = async (req, res) => {
    const pessoa = {...req.body}
    try {
        const result = await pesM.savePessoaModel(pessoa);

        return res.status(201).json(
            {
                dados: result
            }
        );

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            codigoErro: 500,
            mensagem: error
        });    }
    
}
const deletePessoas = async (req, res) => {
    const deletePessoas = req.params.id
    try {

        const delPessoa = await pesM.deletePessoaModel(deletePessoas);
        return res.status(200).json(
            {
                dados: delPessoa
            }
        );

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            codigoErro: 500,
            mensagem: error
        });

    };
}
const putPessoa = async (req, res) => {
    const updatePessoa = { ...req.body}

    try {

            const putPessoa = await pesM.putPessoaModel(updatePessoa);
            return res.status(200).json(
                {
                    dados: putPessoa
                }
            );

    } catch (error) {
            console.log(error);
            return res.status(500).json({
                codigoErro: 500,
                mensagem: error
            });

    }
}
module.exports = {getPessoas, savePessoas,putPessoa,deletePessoas,getPessoa}
