// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.

let numeri = [];

let numeriUtente = [];

let button = document.getElementById('play');

let secondi = 0;


button.addEventListener('click',
    
    document.getElementById('numeriR').innerHTML += `<div>${numeri}</div>`,
    
    clock = setTimeout(function() {
    
    if(clock = true) {
        document.getElementById('cronometro').innerHTML = `<div>Ti rimangono: ${secondi} secondi</div>`
    } 
    
    
    }, 1000)

)


// Funzione che genera numeri random
function numeriRandomFunction() {
    for (i = 0; i < 5; i++) {
        let numeriRandom = Math.floor(Math.random() * 100);
        if(!numeri.includes(numeriRandom)) {
            numeri.push(numeriRandom);
        } else {
            i++;
        }
    }
    return numeri
}

// console.log(numeriRandomFunction())

// Funzione prompt per i numeri che inserisce l'utente
function insertPromptNumberFunction() {
    for(i = 0; i < 5; i++) {
        let newNumeriUtente = parseInt(prompt(`Inserisci il ${i + 1}° numero memorizzato: `) );
        numeriUtente.push(newNumeriUtente);
        
    }
    return numeriUtente
    
}

function removeDislay() {
    numeri.classList.add('d-none')
}

// console.log(insertPromptNumberFunction())

// document.getElementById('numeriR').innerHTML += `<div>${numeriUtente}</div>`






// let timerTime = setInterval(myTimer, 1000);

// function countDown() {
//   const  = new Date();
//   document.getElementById("crono").innerHTML = ();
// }

// // ALTRO METODO: GENERARE NUMERI RANDOM ASSICURANDOSI CHE SIANO TUTTI DIVERSI
// const rundomNumbers = [];

// while (rundomNumbers.length < 5) {
//     const newRandomNumber = getRandomNumber(1, 100);
//     if(!randomNumbers.includes(newRandomNumber)) {
//         randomNumbers.push(newRandomNumber);
//     }
// }

// console.log(randomNumbers);