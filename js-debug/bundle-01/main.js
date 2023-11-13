/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
//Stampa in console i numeri da 0 a 4
//LOGICA: Il ciclo for non gira a causa della condizione falsa

for (let i = 0; i < 5; i++) {
    console.log(i);
}


// ESERCIZIO 2
//Se il numero è pari rende il numero sommato a 5 altrimenti rende il numero stesso
//SINTASSI: Il simbolo = è un'assegnazione, nella if abbiamo bisogno di comparare dei valori con il simbolo == o comparare valore e tipo con il simbolo ===

function addIfEven(num) {
    if (num % 2 === 0) {
        return num + 5;
    }
    return num;
}


// ESERCIZIO 3
//Stampa i numeri da 0 a 4
//SINTASSI: il ciclo for ha bisogno del ; per separare la dichiarazione e inizializzazione dell'indice, la condizione e l'incremento

function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
//Vengono presi i numeri pari dall'array numbers e assegnati all'array evenNumbers
//1. SINTASSI: ; alla fine dell'incremento del for
//2. SINTASSI: Il simbolo = nella condizione della if
//3. SINTASSI: Il ; dopo le parentesi della if
//4. LOGICA: Il return all'interno del ciclo for
//5. LOGICA: il ciclo for si ferma prima di controllare l'ultima posizione dell'array
//6. LOGICA: Il controllo nella if viene effettuato sull'array e non sull'elemento dell'array
//7. LOGICA: Viene pushato l'indice e non il numero corrispondente all'interno dell'array evenNumbers quindi risulterà [1, 3, 5, 7]

function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
   return evenNumbers; 
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]
