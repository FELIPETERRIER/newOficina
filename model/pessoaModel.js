const db = require('../configs/database');
//const validadorCPF = require('./validadorCPF');


const pessoa = {
    getPessoasModel: async () => {
        try {
            const resultadoPessoas  = await db.query('select * from public.pessoas');            
            
            if (resultadoPessoas.rowCount == 0) {
                throw "Nenhuma pessoa encontrada"
            }
            return resultadoPessoas.rows;
        } catch (error) {
            throw error;
        }
    },

    savePessoaModel: async(objPessoa,cpf) => {
        try {

            let valores = Object.values(objPessoa);  
            

            const salvandoPessoa = await db.query
            ('INSERT INTO pessoas(nome,cpf,telefone_celular,telefone_comercial,telefone_residencial,telefone_whatsapp,e_mail,endereco,cnpj,senha) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING id', valores);

            return salvandoPessoa
        } catch (error) {
            throw error
        }
    },

   
    /*validaCpf() {
        let cpf = '09556938613';
        let multiplicador = 10;       
    
        let acumulador = 0; 
    
        for(let i = 0;i <cpf.length-2;i++){      
    
            acumulador = acumulador  + cpf[i]* multiplicador--;        
    
        };   
        let resto =acumulador % 11;
        let dig1 = 0;   
    
        if(resto > 1){
            dig1 = 11 - resto;
        }
    
            multiplicador = 11;
            acumulador = 0
        for(let i = 0;i <cpf.length-1;i++){      
    
            acumulador = acumulador  + cpf[i]* multiplicador--;        
    
        };   
        resto = acumulador % 11;
        let dig2 = 0;   
    
        if(resto > 1){
            dig2 = 11 - resto;
        }

       let dig =(String(dig1) + String(dig2))
       
       if(cpf.substring(9,11)== dig){
        return true
       }
       else{
        return false
       }
       
    },
    validaCElular(){
        let valido = celular.length == 14 ? true : false;
    },
    validaCNPJ() {
      
        let multiplicador = [5,4,3,2,9,8,7,6,5,4,3,2];       
        
        let acumulador = 0; 
       
        for(let i = 0;i <cnpj.length-2;i++){      
           
            acumulador = acumulador  + cnpj[i]* multiplicador[i];
           
        };   
        let resto =acumulador % 11;
        let dig1 = 0;   
       
        if(resto > 1){
            dig1 = 11 - resto;
        }
        
        multiplicador = [6,5,4,3,2,9,8,7,6,5,4,3,2];
        acumulador = 0
        for(let i = 0;i <cnpj.length-1;i++){      
           
            acumulador = acumulador  + cnpj[i]* multiplicador[i];        
            
        };   
        resto = acumulador % 11;
        
        let dig2 ;   
       
        if(resto < 2){
            dig2 = 0;
        }else{
            dig2 = 11 - resto
        }
       let dig =(String(dig1) + String(dig2))   
    
       if(cnpj.substring(12,14) == dig){
        return true
       }
       else{
        return false
       }
     
    }
    
    
       
    
    
    
    
    
    
    
    
    
    
        
        
}*/
    
    deletePessoaModel: async (id) => {
        
        try {        
                    
            const delPessoa  = await db.query(`DELETE from  pessoas WHERE id = ${id}` );
           
            return delPessoa
            
           
        } catch (error) {
            throw error;
        }
        
    },
    //update tipos_pessoa set funcao = $2 where id = $1 ',putValoresUsuario
    putPessoaModel: async (id) => {
        
        try {
            
            let putPessoa = Object.values(id); 
                      
            const putPecaVeiculo  = await db.query(`update pessoas set(nome,cpf,telefone_celular,telefone_comercial,
                telefone_residencial,telefone_whatsapp,e_mail,endereco,cnpj,senha) = ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) where id = $11` ,putPessoa);           

            return putPecaVeiculo
            
           
        } catch (error) {
            throw error;
        }
        
    }

}

module.exports = pessoa

