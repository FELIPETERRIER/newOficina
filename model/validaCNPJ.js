function validaCNPJ() {
    let cnpj = '11222333000181';
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
let banana = validaCNPJ();



console.log(banana)

   









