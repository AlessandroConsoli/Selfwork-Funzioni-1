let tiri = prompt(`quanti tiri vuoi effettuare?`);

for (let i = 0; i < tiri; i++) {
    let singleRoll = Math.floor(Math.random() * (6 - 1) + 1);
    console.log(singleRoll);
    // let accumulator = 0 + singleRoll    ;
    // console.log(accumulator);
    
}