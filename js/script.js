// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.


//trovo il bottone
document.querySelector(".start-btn").addEventListener("click", gameStarter);


/**
 * Description funzione che crea la griglia quando premi il bottone
 * @returns {any}
 */
function gameStarter() {
    //seleziono la grid 
    const gridElem = document.querySelector(".grid");
    gridElem.innerHTML = "";
    const welcomeText = document.querySelector("h2");

    welcomeText.classList.add("hidden")
    gridElem.classList.remove('hidden');


    //genero le caselle della griglia

    for (let i = 1; i <= 100; i++) {
        const numbers = i;
        console.log(i);
        //richiamo la funzione
        const newGrid = generateGridElements(numbers);
        console.log(newGrid);
        //stampo la griglia
        newGrid.addEventListener('click', clickGenerator)
        gridElem.append(newGrid)
        console.log(gridElem);
    
    }
}


//function genera elementi html
function generateGridElements(text) {
    const square = document.createElement ("div");
    square.classList.add('grid-items');
    square.innerHTML = `<span>${text}</span>`;
    return square;

}

//function al CLICK colora le celle
function clickGenerator() {
    this.classList.add("selected");
    const clickedNum = this.querySelector("span").textContent;
    console.log(clickedNum);
}