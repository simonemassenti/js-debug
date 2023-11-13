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


// ESERCIZIO 1 (suggerimento: ci sono 6 errori)
const cars = [
    {
        manufacturer: 'Ford',
        model: 'Fiesta',
        type: 'diesel'
    },
    {
        manufacturer: 'Audi',
        model: 'A1',
        type: 'benzina'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Golf',
        type: 'benzina' //Benzina
    },
    {
        manufacturer: 'Fiat',
        model: 'Panda',
        type: 'metano'
    },
    {
        manufacturer: 'Fiat',
        model: 'Multipla',
        type: 'GPL'
    },
    {
        manufacturer: 'Tesla',
        model: 'Model 3',
        type: 'elettrico'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Polo',
        type: 'benzina'
    },
    {
        manufacturer: 'Ford',
        model: 'Kuga',
        type: 'diesel' //Diesel
    },
    {
        manufacturer: 'Seat',
        model: 'Ibiza',
        type: 'metano'
    }, //SINTASSI: Mancava la virgola
    {
        manufacturer: 'Audi',
        model: 'R8',
        type: 'benzina' //Benzina
    },
];
// SINTASSI: >= al posto della freccetta =>
const gasolineCars = cars.filter( (auto) => auto.type === 'benzina');

const dieselCars = cars.filter( (auto) => {
    return auto.type === 'diesel'; //RETURN
});

const otherCars = cars.filter( (auto) => {
   return auto.type !== 'benzina' && auto.type !== 'diesel'; //&&
});

console.log('Auto a benzina');
console.log('*******************************');
console.log(gasolineCars);

console.log('Auto a diesel');
console.log('*******************************');
console.log(dieselCars);

console.log('Tutte le altre auto');
console.log(otherCars);