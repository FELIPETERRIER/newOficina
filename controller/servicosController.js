exports.getServicos = (req, res) => {
    res.status(200).json(
        {
            dados: {
                cod: 220,                
                nome:'troca de oleo'
            },
            status: "Serviço encontrado"
            
        }
       
    );
}