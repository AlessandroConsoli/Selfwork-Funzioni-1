
// let punteggioParziale = punteggioTiro;

function playDice(lanci) {
    let player1= 0;
    let player2= 0;

    for (let i = 0; i < lanci; i++) {
        let player1Roll = Math.floor(Math.random() * (6 - 1) + 1);
        let player2Roll = Math.floor(Math.random() * (6 - 1) + 1);

        player1 += player1Roll;
        player2 += player2Roll;
    }
    if (player1 > player2) {       
        return `player1 vince con un punteggio di ${player1}`;   
    }else if (player2 > player1){
        return `player2 vince con un punteggio di ${player2}`;
    }else{
        return `pareggio! Entrambi i giocatori hanno totalizzato ${player1}`
    }
}

let tiri = Number(prompt(`quanti tiri vuoi effettuare?`));
let punteggioTotale = playDice(tiri);


console.log(punteggioTotale);



