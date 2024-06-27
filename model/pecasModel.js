const db = require('../configs/database');

const pecas = {
    getPecasModel: async () => {
        try {
            const resultadoPecas  = await db.query('select * from public. pecas');           
            
            if (resultadoPecas.rowCount == 0) {
                throw "Nenhuma peça encontrada"
            }
            return resultadoPecas.rows;
        } catch (error) {
            throw error;
        }
    },
    savePecasModel: async (objPecas) => {
        
        try {
            let valoresPecas = Object.values(objPecas)
            console.log(valoresPecas)
            const addPecas  = await db.query('INSERT INTO pecas(cod_pecas,nome_peca,quant_peca,valor_peca,carros_compativeis) VALUES ($1,$2,$3,$4,$5)  RETURNING id ', valoresPecas);
            

            return addPecas.rows
            
           
        } catch (error) {
            throw error;
        }
        
    },
    deletePecaModel: async (id) => {
        
        try {           
                    
            const delPecaVeiculo  = await db.query(`DELETE from  pecas WHERE id = ${id}` );
           
            return delPecaVeiculo
            
           
        } catch (error) {
            throw error;
        }
        
    },
    
    putPecaModel: async (nome_peca,id) => {
        
        try {
            
            let putPecas = Object.values(nome_peca); 
                      
            const putPecaVeiculo  = await db.query(`update pecas  set  nome_peca = ($1) where id = ${id}` ,putPecas);           

            return putPecaVeiculo
            
           
        } catch (error) {
            throw error;
        }
        
    }
    
}

module.exports = pecas
