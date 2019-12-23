// laço simples

var x = 0;  
while (x < 5){
    console.log(`Passo ${x+1}`);
    x += 1;
}

// laço executa depois teste

var y = 5;
do {
    console.log(`Valor da var ${y}`);
    y -= 1;
}while ( y != 0)

// estrutura com controle 
var z = 0;
console.log('Start for ');
for (z; z< 5; z++){
    console.log(`Passo do For ${z+1}`);
}