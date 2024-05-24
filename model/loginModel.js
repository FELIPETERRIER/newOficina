const db = require('../configs/database');

const users = {
    
    getLoginModel: async() => {
        

function validaCpf(cpf) {
   
    let multiplicador = 10;
    let acumulador = 0;
    for (let i = 0; i < cpf.length - 2; i++) {
        acumulador = acumulador + cpf[i] * multiplicador--;
    }
    ;
    let resto = acumulador % 11;
    let dig1 = 0;
    if (resto > 1) {
        dig1 = 11 - resto;
    }
    multiplicador = 11;
    acumulador = 0;
    for (let i = 0; i < cpf.length - 1; i++) {
        acumulador = acumulador + cpf[i] * multiplicador--;
    }
    ;
    resto = acumulador % 11;
    let dig2 = 0;
    if (resto > 1) {
        dig2 = 11 - resto;
    }
    let dig = (String(dig1) + String(dig2));
    if (cpf.substring(9, 11) == dig) {
        return true;
    }
    else {
        return false;
    }
}
exports.validaCpf = validaCpf;
    if( validaCpf(req.body.cpf)){



        try {
            var senhaUser =req.query.senha             
            var entUser = req.body.cpf
            console.log(senhaUser)
            
           
            const resultadoUsers = await db.query("select cpf,senha from public.pessoas where cpf ='" + entUser.cpf+"'and senha = '" + senhaUser.senha +"'")
             
            
            if (resultadoUsers.rowCount == 0) {
                throw "Usuário inválido"
            }
            return resultadoUsers.rows;
        } catch (error) {
            throw error;
        }
    }
    }
       
}

module.exports = users
