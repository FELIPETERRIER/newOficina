const db = require('../configs/database');

const tipoUsuario = {
    getTipoUsuarioModel: async () => {
        try {
            const resultadoTipoUsuario  = await db.query('select cpf from public.tipos_pessoa');           
            
            if (resultadoTipoUsuario.rowCount == 0) {
                throw "Nenhuma pessoa encontrada"
            }
            return resultadoTipoUsuario.rows;
        } catch (error) {
            throw error;
        }
    },
}

console.log(tipoUsuario)


module.exports =  tipoUsuario

/*let tipo = "select cpf from tipos pessoas";
let user = "mecanico"
//tipos de usuarios possiveis:auxiliar cliente,gerente,funilaria,mecanico,propietário

let cpf = "09556938613";
if (user == cpf){
    console.log("ok")
} else{
    console.log("errado")*/
