// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.


//seleziono la grid 
const gridElem = document.querySelector(".grid");
//genero le caselle della griglia
let numbersTot = "";
for (let i = 1; i <= 100; i++) {
    const numbers = i;
    //richiamo la funzione
    const newGrid = generateGridElements(numbers);
    //stampo la griglia
    gridElem.append(newGrid)
    console.log(numbersTot);
   
}



//function genera elementi html
function generateGridElements (text) {
    const square = document.createElement ("div");
    square.classList.add('grid-items');
    square.innerHTML = `${text}`;
    return square;

}