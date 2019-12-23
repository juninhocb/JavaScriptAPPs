/*var idade = 17; 
if (idade < 16){
    console.log("Não vota");
}else { 
    if (idade <= 16 && idade < 18){
        console.log("Voto Opcional");
    }else {
    console.log("Voto obrigatório");
} }
*/ 
// modo simplificado
var idade = 27; 
console.log(`Voçê tem ${idade} Anos`);
if (idade < 16){ 
    console.log("Não vota");
}else if (idade < 18 || idade > 65){
    console.log("Voto opcional");
}else {
    console.log("Voto obrigatório");
}