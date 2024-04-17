const db = require('../configs/database')


const pessoa = {
    getPessoasModel: async () => {
        try {
            const resultadoPessoas  = await db.query('select * from public.pessoas');            
            
            if (resultadoPessoas.rowCount == 0) {
                throw "Nenhuma pessoa encontrada"
            }
            return resultadoPessoas.rows;
        } catch (error) {
            throw error;
        }
    },

    savePessoaModel: async(objPessoa) => {
        try {
            let valores = Object.values(objPessoa);
          

            const salvandoPessoa = await db.query('INSERT INTO pessoas(nome,cpf,telefone_celular,telefone_comercial,telefone_residencial,telefone_whatsapp,e_mail,endereco) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING id', valores);

            return salvandoPessoa
        } catch (error) {
            throw error
        }
    },

    /*Falta testar o Delete e put
    deletePessoaModel: async (cpf) => {
        
        try {        
                    
            const delPessoa  = await db.query(`DELETE from  pessoas WHERE cpf = ${cpf}` );
           
            return delPessoa
            
           
        } catch (error) {
            throw error;
        }
        
    },
    
    putPessoaModel: async (cpf) => {
        
        try {
            
            let putPessoa = Object.values(cpf); 
                      
            const putPecaVeiculo  = await db.query(`update (nome,cpf,telefone_celular,telefone_comercial,telefone_residencial,telefone_whatsapp,e_mail,endereco)  set = ($1,$2,$3,$4,$5,$6,$7,$8) where cpf = ${cpf}` ,putPessoa);           

            return putPecaVeiculo
            
           
        } catch (error) {
            throw error;
        }
        
    }*/

}

module.exports = pessoa

