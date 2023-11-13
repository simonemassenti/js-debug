/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
//Viene controllato myAge, se è minore di 18 salva in message "Sei troppo giovane! Hai ${myAge} anni!" altrimenti salva 'Hai più di 18 anni!'
// LOGICA: message se è una costante non può cambiare il suo valore
function checkAge(myAge) {
    let message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
}
checkAge(32);

// ESERCIZIO 2
//Stampa il numero di colori presenti nell'array colors
// SINTASSI: length e non lenght
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.length} colori!`);
}
printColorsNumber();


// ESERCIZIO 3
//Si vuole fare la somma di un numero chiesto tramite il prompt e 12
//SINTASSI: il prompt rende una stringa e non un numero quindi effettuerà una concatenazione enon una somma
function addNumbers() {
    const userNumber = parseInt(prompt('Inserisci un numero'));
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();


// ESERCIZIO 4
//Viene controllato se l'indirizzo email inserito tramite il prompt è presente nell'array addresses
//LOGICA: a grantAccess viene assegnata una stringa ma poi nella if viene confrontata con un valore booleano
function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    if (addresses.includes(userEmail)) {
        grantAccess = true;
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();


// ESERCIZIO 5 (suggerimento: c'è un solo errore)
//Viene controllato se all'interno dell'array addresses è presente l'email inserito tramite il prompt
//DISTRAZIONE - SINTASSI: mancava la parentesi graffa che chiudeva la funzione
//Viene assegnato a grantAccess una variabile stringa e non booleana
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    for (let i = 0; i < addresses.length; i++) {
        const email = addresses[i];

        if (userEmail.length > 5) {

            if (email === userEmail) {
                grantAccess = true;
            }

        }

        if (grantAccess) {
            console.log('Accesso consentito!');
        } else {
            console.log('Accesso negato!');
        }
    }

}
    checkAccessImproved();