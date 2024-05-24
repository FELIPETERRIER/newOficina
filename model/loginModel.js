const db = require('../configs/database');


const users = {
    
    getLoginModel: async(cpf,senha) => {  
        try {              
            const resultadoUsers = await db.query("select cpf,senha from public.pessoas where cpf ='" + cpf +"' and senha = '" + senha +"'")          
        if (resultadoUsers.rowCount == 0) {
            throw "Usuário inválido"
        }
            return resultadoUsers.rows;
        } catch (error) {
            throw error;
        }
    }
}
module.exports = users
