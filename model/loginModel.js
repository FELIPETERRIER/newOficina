const db = require('../configs/database');

const users = {
    
    getLoginModel: async (entUser,senha) => {

        try {
            var senhaUser ={"senha":"14"} 
            console.log(senha)
            var entUser ={"cpf":"09556938614"}       

            const resultadoUsers = await db.query("select cpf,senha from public.pessoas where cpf ='" + entUser.cpf+"'and senha = '" + senhaUser.senha +"'")
            
            
            if (resultadoUsers.rowCount == 0) {
                throw "Nenhuma pessoa encontrada"
            }
            return resultadoUsers.rows;
        } catch (error) {
            throw error;
        }
        
        }
    
        
        
       /* let entFuncao = "gerente";
        let b = resultadoUsers;
    
    
        if(b === entUser && entFuncao === b){
            console.log("certo")
        }else{
            console.log("errado")
       }
    
    
       ///Sabemos que a função Users retorna um array como os valores das funçoes e cpfs.
       Temos que encontrar uma função que percorra o array e identifique as strings iguais. 











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
