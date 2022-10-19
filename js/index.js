// Iteration 1: Names and Input
let hacker1 = "Geraldo Henrique dos Santos Melo";
let hacker2 = "Geraldo Henrique dos Santos Mel";
let hacker1Alterado = [];
let hacker2Alterado = [];
let hacker2Reverse = [];
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);
//
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log (`The driver has the longest name, it has ${hacker1.length} characters`)
    }else if (hacker1.length == hacker2.length){
        console.log (`Wow, you both have equally long names, ${hacker1.length} characters`)
    }
    else{
        console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters"`)
    }

// Iteration 3: Loops
for (let i in hacker1){
    hacker1Alterado.push(hacker1[i].toUpperCase());
    hacker1Alterado.push(" ");
}
hacker1Alterado = hacker1Alterado.join('');
console.log(hacker1Alterado);

for (i = hacker2.length; i>=0 ; i--){
    hacker2Alterado.push(hacker2[i]);
}
hacker2Alterado = hacker2Alterado.join('');
hacker2Reverse = hacker2Alterado.split(' ').reverse().join(' ');
console.log(hacker2Reverse);

if(hacker1.localeCompare(hacker2,'pt-BR',{sensitivity: 'case'}) < 0){
    console.log(`The driver's name goes first.`);
}else if (hacker1.localeCompare(hacker2,'pt-BR',{sensitivity: 'case'}) > 0){
    console.log(`Yo, the navigator goes first definitely.`);
}else{
    console.log(`What?! You both have the same name?`);
}

