/*

Consegna:
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un’immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull’aspetto logico.
MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal. Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile. Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
MILESTONE 3
Al click dell’utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.


*/


// creat Arrey contenente i codici delle img
const imgCarosello = ["img/04.webp", "img/01.webp", "img/02.webp", "img/03.webp", "img/05.webp"];


// creata variabile contenente il container degli item (preso con id)
let itemContainer = document.getElementById('items-container');



// creato ciclo x creare gli item, dunque i div che conterrano gli arrey che a loro volta contengo i codici delle img
for ( let i = 0; i < imgCarosello.length; i++) {

    let item = `<div class="item"> <img src="${imgCarosello[i]}"> </div>`;
    
    // stampate i tag creati sopra, contenente le img che hanno una classe che li rende display none, dunque non visibili
   itemContainer.innerHTML += item;
}


// selezionati tutti i div che hanno classe item e data una variabile (items)
const items = document.querySelectorAll('.item');

// definita la variabile items, dandeole il primo valore che conta l'arrey (0) aggiunta classe axtive che rende la 1 img sempre visibile
items[0].classList.add('active');


// creata variabile con un valore 0
let activeItem = 0;


// creata variabile che prende l'elemento dal document che contiene id up (la freccia)
const next = document.getElementById('up');




// creeato evento al "bottone freccia" 
next.addEventListener('click', 
function() {



// creata condizione in  cui stabilisco un SE (se activitem (dunque 0) è minore al numero di valori presenti nell'arrey -1 allora si verificherà tale condizione
    if (activeItem < (items.length - 1)) {


        // presa la variabile items (che contiene la classe active al primo div) e rimossa la classe per renderla invisibile
        items[activeItem].classList.remove('active');

        // si va allo step successivo 
        activeItem = activeItem + 1;


        // aggiunta adesso la classe active
       items[activeItem].classList.add('active');


       if (activeItem === (items.length -1)) {
        next.classList.add('item');
       }
    }


})





const indietro = document.getElementById('under');





indietro.addEventListener('click', 
function() {



    
    if (activeItem > 0) {



        items[activeItem].classList.remove('active');


        activeItem = activeItem - 1;

       items[activeItem].classList.add('active');




       if (activeItem === 0) {
        indietro.classList.add('item');

        
       }
    }
})




