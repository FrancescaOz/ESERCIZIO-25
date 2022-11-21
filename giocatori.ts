/////////////////////////////////////////////////////////////
let numeroCasuale: number;
let giocatore1: number;
let giocatore2: number;
let compara1: number;
let compara2: number;

numeroCasuale = estrai();
giocatore1 = estrai();
giocatore2 = estrai();

function estrai() {
    return Math.floor(Math.random() * 100);
}

//mostra i numeri usciti//
console.log('numero casuale gnerato = ', numeroCasuale);
console.log('numero giocatore1 = ', giocatore1);
console.log('numero giocatore2 = ', giocatore2);

//verificare la vincita//

if (giocatore1 == numeroCasuale) {
    'il giocatore 1 ha vinto'
}
if (giocatore2 == numeroCasuale) {
    'il giocatore 1 ha vinto'
}

//in caso di mancata vincita netta//

if (giocatore1 != numeroCasuale && giocatore2 != numeroCasuale) {
    
    if (giocatore1 < numeroCasuale) {
        compara1 = numeroCasuale - giocatore1;
    } else {
        compara1 = giocatore1 - numeroCasuale;
    }
    if (giocatore2 < numeroCasuale) {
        compara2 = numeroCasuale - giocatore1;
    } else {
        compara2 = giocatore2 - numeroCasuale;
    }
    if (compara1 < compara2) {
        console.log('Nessuno dei due ha vinto ma il giocatore 1 si è avvicinato di più');
    } else {
        console.log('Nessuno dei due ha vinto ma il giocatore 2 si è avvicinato di più')
    }
};