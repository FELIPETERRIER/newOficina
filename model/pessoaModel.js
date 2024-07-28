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
    getPessoaModel: async (cpf) => {
        try {
            const resultadoPessoa  = await db.query('select f.funcao,p.* from public.pessoas p '+
                                                    'inner join pessoas_funcoes pf on p.id=pf.id_pessoa '+ 
                                                    'inner join funcoes f on pf.id_funcao = f.id '+
                                                    'where p.cpf = \'' + cpf +'\'');                      
                                                                
            if (resultadoPessoa.rowCount == 0) {
                throw "Nenhuma pessoa encontrada"
            }
            return resultadoPessoa.rows;
        } catch (error) {
            throw error;
        }
    },

    savePessoaModel: async(objPessoa,cpf) => {
        try {
            let funcoes = (objPessoa.funcoes);
            delete objPessoa.funcoes 
            let valores = Object.values(objPessoa);          
            funcoes = funcoes.split(',')
            const salvandoPessoa = await db.query
            ('INSERT INTO pessoas(nome,cpf,telefone_celular,telefone_comercial,telefone_residencial,telefone_whatsapp,e_mail,endereco,cnpj,senha) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING id', valores);
            for(i = 0;i < funcoes.length - 1;i++){
                await db.query
                    ('INSERT INTO pessoas_funcoes VALUES ($1,$2)', [salvandoPessoa.rows[0].id,funcoes[i]] );
            }

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

