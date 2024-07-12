const pesMR =require('../model/relacaoModel');

/*const saveRelacao = async (req, res) => {
    const relacaoFuncao = {...req.body}
    try {
        const result = await pesMR.savePessoaModel(pessoa);

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
    
}*/
const deleteRelacao = async (req, res) => {
    const delRelFuncao = req.params.id
    try {

        const delRelacao = await pesMR.deleteRelacaoModel(delRelFuncao);
        res.status(200).json(
            {
                dados: delRelacao
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
module.exports = {saveRelacao,deleteRelacao}