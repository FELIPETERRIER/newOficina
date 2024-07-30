const db = require('../configs/database');

const funcaoUsuario = {
    getFuncaoUsuario: async () => {
        try {
            const resultadoFuncaoUsuario  = await db.query('select * from public.funcoes');           
            
            if (resultadoFuncaoUsuario.rowCount == 0) {
                throw "Nenhuma pessoa encontrada"
            }
            return resultadoFuncaoUsuario.rows;
        } catch (error) {
            throw error;
        }
    },
    saveFuncaoUsuario: async (objUsuario) => {
        
        try {
            let valoresUsuario = Object.values(objUsuario)
            const addTipoUsuario  = await db.query('INSERT INTO funcao(funcao) VALUES ($1) RETURNING id', valoresUsuario);          

            return addTipoUsuario.rows
            
           
        } catch (error) {
            throw error;
        }
        
    },
    deleteFuncaoUsuario: async (id) => {
        
        try {
            
            let delIdFuncaoUsuario = Object.values(id);            
            const deleteFuncaoUsuario  = await db.query('DELETE from funcao WHERE id = $1', delIdFuncaoUsuario  );
           
            return deleteFuncaoUsuario
            
           
        } catch (error) {
            throw error;
        }
        
    },
    
    putFuncaoUsuario: async (id) => {
        
        try {
            
            let putIdFuncaoUsuario = Object.values(id);            
            const putFuncaoUsuario  = await db.query('update funcao set funcao = $2 where id = $1 ',putIdFuncaoUsuario);           

            return putFuncaoUsuario
            
           
        } catch (error) {
            throw error;
        }
        
    }
    
}

module.exports = funcaoUsuario
