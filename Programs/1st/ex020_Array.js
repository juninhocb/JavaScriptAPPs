let num = [5, 1, 3];
num.push(2);
num.push(6);
let a = num.length
console.log(`${num} e ${a}` );

num.sort();
console.log(`${num}`); 
console.log(`${num[2]}`);

for(let i = 0; i < num.length; i++){
    console.log(`${num[i]}`);
}

let num2 = []; 

for (let i = 0; i < 10; i++){
    num2.push(i+1);
}

for (let z = 0; z < 10; z ++){
    console.log(`${num2[z]}`);
}

for (let pos in num2){
    console.log(`${num2[pos]}`);
}

var x = num2.indexOf(10);
console.log(`${x}`);

if (num2.indexOf(13) != -1){
    console.log(`O valor se encontra no vetor`);
} else {
    console.log('O valor não foi encontrado');
}