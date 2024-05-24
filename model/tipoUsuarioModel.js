const db = require('../configs/database');

const tipoUsuario = {
    getTipoUsuarioModel: async () => {
        try {
            const resultadoTipoUsuario  = await db.query('select * from public.tipos_pessoa');           
            
            if (resultadoTipoUsuario.rowCount == 0) {
                throw "Nenhuma pessoa encontrada"
            }
            return resultadoTipoUsuario.rows;
        } catch (error) {
            throw error;
        }
    },
    saveTipoUsuarioModel: async (objUsuario) => {
        
        try {
            let valoresUsuario = Object.values(objUsuario)
            const addTipoUsuario  = await db.query('INSERT INTO tipos_pessoa(funcao) VALUES ($1) RETURNING id', valoresUsuario);          

            return addTipoUsuario.rows
            
           
        } catch (error) {
            throw error;
        }
        
    },
    deleteTipoUsuarioModel: async (id) => {
        
        try {
            
            let delValoresUsuario = Object.values(id);            
            const delTipoUsuario  = await db.query('DELETE from tipos_pessoa WHERE id = $1', delValoresUsuario  );
           
            return delTipoUsuario
            
           
        } catch (error) {
            throw error;
        }
        
    },
    
    putTipoUsuarioModel: async (id) => {
        
        try {
            
            let putValoresUsuario = Object.values(id);            
            const putTipoUsuario  = await db.query('update tipos_pessoa set (funcao,cpf) = ($2,$3 )where id = $1 ',putValoresUsuario);           

            return putTipoUsuario
            
           
        } catch (error) {
            throw error;
        }
        
    }
    
}

module.exports = tipoUsuario
