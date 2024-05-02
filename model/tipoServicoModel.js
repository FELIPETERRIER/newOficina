const db = require('../configs/database');

const servicos = {
    getTipoServicoModel: async () => {
        try {
            const resultadoTipoServico  = await db.query('select * from public.servicos');           
            
            if (resultadoTipoServico.rowCount == 0) {
                throw "Nenhum serviço encontrado"
            }
            return resultadoTipoServico.rows;
        } catch (error) {
            throw error;
        }
    },
    saveTipoServicoModel: async (objServicos) => {
        
        try {
            let valoreServico = Object.values(objServicos)
           
            const addTipoServico  = await db.query('INSERT INTO servicos(tiposervico) VALUES ($1) returning ID', valoreServico);
            

            return addTipoServico.rows
            
           
        } catch (error) {
            throw error;
        }
        
    },
    deleteServicoModel: async (id) => {
        
        try {
            
            let delServico = Object.values(id);            
            const delTpServico  = await db.query('DELETE from servicos WHERE id = $1', delServico );
           
            return delTpServico
            
           
        } catch (error) {
            throw error;
        }
        
    },
    
    putServicoModel: async (id) => {
        
        try {
            
            let putServico = Object.values(id); 
                      
            const putTpServico  = await db.query('update servicos set tipoServico = $1 where id = $2 ',putServico);           

            return putTpServico
            
           
        } catch (error) {
            throw error;
        }
        
    }
    
}

module.exports = servicos
