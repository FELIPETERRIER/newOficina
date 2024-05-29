const db = require('../configs/database');
const users = {    
    getLoginModel: async(cpf,senha,funcao) => {  
        try {  
            const sql = "select p.nome,p.cpf,tp.funcao from pessoas p "+
            "inner join pessoas_tipo_pessoas ptp "+
                "on ptp.id_pessoa = p.id "+
            "inner join tipos_pessoa tp "+
             "   on tp.id = ptp.id_tipo_pessoa "+
            "where p.cpf ='"+cpf+"' "+
            "and p.senha = '"+senha+"' "+
            "and ptp.id_tipo_pessoa = "+Number(funcao)            
            const resultadoUsers = await db.query(sql)                     
        if (resultadoUsers.rowCount == 0) {
            throw "Credenciais inválidas"
        }
            return resultadoUsers.rows;
        } catch (error) {
            throw error;
        }
    }
}
module.exports = users
