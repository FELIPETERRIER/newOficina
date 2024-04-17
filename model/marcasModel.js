const db = require('../configs/database');

const marcas = {
    getMarcasModel: async () => {
        try {
            const resultadoMarcas  = await db.query('select * from public. marcas_carro');           
            
            if (resultadoMarcas.rowCount == 0) {
                throw "Nenhuma marca encontrada"
            }
            return resultadoMarcas.rows;
        } catch (error) {
            throw error;
        }
    },
    saveMarcasModel: async (objMarcas) => {
        
        try {
            let valoresMarcas = Object.values(objMarcas)
            console.log(valoresMarcas)
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
        
    }
    
}

module.exports = marcas
