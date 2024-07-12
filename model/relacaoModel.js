const db = require('../configs/database');

const relacao = {
    /*saveRelacaoModel: async(objPessoa,cpf) => {
        try {

            let valores = Object.values(objPessoa);  
            

            const salvandoPessoa = await db.query
            ('INSERT INTO pessoas_tipo_pessoas()', valores);

            return salvandoPessoa
        } catch (error) {
            throw error
        }
    },   */ 
    deleteRelacaoModel: async (id) => {
        
        try {        
                    
            const delRelacao  = await db.query(`DELETE from  pessoas_tipo_pessoas WHERE id = ${id}` );
           
            return delRelacao
            
           
        } catch (error) {
            throw error;
        }
        
    }
}
   
module.exports = relacao





















