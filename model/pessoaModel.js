const db = require('../configs/database');



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

    savePessoaModel: async(objPessoa,cpf) => {
        try {

            let valores = Object.values(objPessoa);  
            

            const salvandoPessoa = await db.query
            ('INSERT INTO pessoas(nome,cpf,telefone_celular,telefone_comercial,telefone_residencial,telefone_whatsapp,e_mail,endereco,cnpj,senha) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING id', valores);

            return salvandoPessoa
        } catch (error) {
            throw error
        }
    },    
    deletePessoaModel: async (id) => {
        
        try {        
                    
            const delPessoa  = await db.query(`DELETE from  pessoas WHERE id = ${id}` );
           
            return delPessoa
            
           
        } catch (error) {
            throw error;
        }
        
    },
   
    putPessoaModel: async (id) => {
        
        try {
            
            let putPessoa = Object.values(id); 
                      
            const putPecaVeiculo  = await db.query(`update pessoas set(nome,cpf,telefone_celular,telefone_comercial,
                telefone_residencial,telefone_whatsapp,e_mail,endereco,cnpj,senha) = ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) where id = $11` ,putPessoa);           

            return putPecaVeiculo
            
           
        } catch (error) {
            throw error;
        }
        
    }

}

module.exports = pessoa

