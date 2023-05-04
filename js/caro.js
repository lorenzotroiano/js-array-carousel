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



const imgCarosello = ["img/04.webp", "img/01.webp", "img/02.webp", "img/03.webp", "img/05.webp"];
console.log(imgCarosello);


let itemContainer = document.getElementById('items-container');


for ( let i = 0; i < imgCarosello.length; i++) {

    item = `<div class="item"> <img src="${imgCarosello[i]}"> </div>`;
    
    console.log(item);

   itemContainer.innerHTML += item;
}

const items = document.querySelectorAll('.item');

items[0].classList.add('active');


let activeItem = 0


const next = document.getElementById('up');
console.log(next);




next.addEventListener('click', 
function() {




    if (activeItem < (items.length - 1)) {



        items[activeItem].classList.remove('active');


        activeItem = activeItem + 1;

       items[activeItem].classList.add('active');
    }
})





const indietro = document.getElementById('under');





indietro.addEventListener('click', 
function() {



    
    if (activeItem < (items.length + 1)) {



        items[activeItem].classList.remove('active');


        activeItem = activeItem - 1;

       items[activeItem].classList.add('active');
    }
})




