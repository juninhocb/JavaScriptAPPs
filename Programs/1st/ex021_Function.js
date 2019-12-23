function f1 (x){
    console.log(`o valor do numero passado por parametro + 2 é ${x +2}`);
    return x +2;
}

let y = f1(4);
console.log(`${y}`);

function poui (n){
    if ( n % 2 == 0){
    return 'par'
} else {
    return 'impar'
}}

console.log(`O valor 3 é ${poui(3)}`);

function soma(n1, n2){
    return n1 + n2;
}

console.log(`O valor da soma entre 3 e 4 é ${soma(3, 4)}`);