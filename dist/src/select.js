const db = require('../../configs/database');


const select = {
    selectOption:async()=>{
        
        let options = (await db.query('select id,funcao from tipos_pessoa')).rows;
        return options
        
       
     
}
}

module.exports = select