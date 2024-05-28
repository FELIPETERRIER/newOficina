const db = require('../configs/database');


const users = {
    
    getLoginModel: async(cpf,senha,funcao) => {  
        try {  
            const tipoUsuarios =  await db.query("select funcao from tipos_pessoa where funcao ='"+funcao+ "'" );            
            const resultadoUsers = await db.query("select cpf,senha from public.pessoas where cpf ='" + cpf +"' and senha = '" + senha +"'")          
        if (tipoUsuarios.rowCount == 0 && resultadoUsers.rowCount == 0) {
            throw "Credenciais inválidas"
        }
            return resultadoUsers.rows;
        } catch (error) {
            throw error;
        }
    }
}
module.exports = users
