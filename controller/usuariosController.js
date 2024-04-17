exports.postUsuarios = (req, res) => {
    req.status(201).json(
        {
            dados: {
               nome:req.body
            },
            status: "Usuario salvo"
            
        }
       
    );
}
exports.getUsuarios = (req, res) => {
    {
    function nomeUsuario(){    
    let dados = [
        {
            id: 22,
            cpf: '00000000000',
            nome:'Fernando'
            
        },
       
        {
            id: 23,
            cpf: '00000000000',
            nome:'Felipe'
        }
        ]
        let pegouNome = dados.filter((peguei)=>(peguei.id == 23))
        return pegouNome
        
    }}
    res.status(200).json(
        
       
        {
            
            status:nomeUsuario(),
            
        }
       
    );
}