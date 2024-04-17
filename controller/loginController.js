exports.getLogin = (req, res) => {
    res.status(200).json(
        {
            dados: {
               nome:'felipe',
               senha:'*****'

            },
            status: "Login efetuado"
            
        }
       
    );
}
