const db = require('../configs/database');
//aqui esta o erro
const users = {
    getLoginModel: async () => {
        try {
            const resultadoUsers = await db.query('select cpf,funcao from public.tipos_pessoa ');           
            
            if (resultadoUsers.rowCount == 0) {
                throw "Nenhuma marca encontrada"
            }
            return resultadoUsers.rows;
        } catch (error) {
            throw error;
        }
        
        }
    












    /*saveMarcasModel: async (tipoUsuario) => {
        
        try {
            let resultadoUser = Object.values(tipoUsuario)
           
            const addMarcas  = await db.query('INSERT INTO  marcas_carro(marcas) VALUES ($1)  RETURNING id ', valoresMarcas);
            

            return addMarcas.rows
            
           
        } catch (error) {
            throw error;
        }
        
    },
    deleteMarcaModel: async (id) => {
        
        try {
            
                    
            const delMarcaVeiculo  = await db.query(`DELETE from  marcas_carro WHERE id = ${id}` );
           
            return delMarcaVeiculo
            
           
        } catch (error) {
            throw error;
        }
        
    },
    
    putMarcaModel: async (marca,id) => {
        
        try {
            
            let putMarca = Object.values(marca); 
                      
            const putMarcaVeiculo  = await db.query(`update  marcas_carro set  marcas = ($1) where id = ${id}` ,putMarca);           

            return putMarcaVeiculo
            
           
        } catch (error) {
            throw error;
        }
        
    }*/
    
}

module.exports = users
