const db = require('../configs/database');

const relacao = {
    getRelacaoModel: async(funcao) => {
        try {

            let relFuncao = Object.values(funcao);
            console.log(relFuncao)            

        
        } catch (error) {
            throw error
        }
    },  
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





















