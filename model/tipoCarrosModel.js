const db = require('../configs/database');

const carros = {
    getTipoCarrosModel: async () => {
        try {
            const resultadoTipoCarros  = await db.query('select * from public.carros');           
            
            if (resultadoTipoCarros.rowCount == 0) {
                throw "Nenhum carro encontrado"
            }
            return resultadoTipoCarros.rows;
        } catch (error) {
            throw error;
        }
    },
    saveTipoCarrosModel: async (objCarros) => {
        
        try {
            let valoresCarros = Object.values(objCarros)
           
            const addTipoCarro  = await db.query('INSERT INTO carros(marca, ano_fabricação, ano_modelo, modelo, placa, chassi, renavan, quilometragem) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)', valoresCarros);
            

            return addTipoCarro.rows
            
           
        } catch (error) {
            throw error;
        }
        
    },
    deleteCarroModel: async (id) => {
        
        try {
            
            let delValoresCarro = Object.values(id);            
            const delTipoCarro  = await db.query('DELETE from carros WHERE id = $1', delValoresCarro );
           
            return delTipoCarro
            
           
        } catch (error) {
            throw error;
        }
        
    },
    
    putCarroModel: async (id) => {
        
        try {
            
            let putValoresCarros = Object.values(id); 
                      
            const putTipoCarros  = await db.query('update carros set (marca, ano_fabricação, ano_modelo, modelo, placa, chassi, renavan, quilometragem) = ($1,$2,$3,$4,$5,$6,$7,$8) where id = $9 ',putValoresCarros);           

            return putTipoCarros
            
           
        } catch (error) {
            throw error;
        }
        
    }
    
}

module.exports = carros
