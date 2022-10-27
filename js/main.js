const kilometri = parseInt(prompt("Inserisci i Km che vuoi percorrere"));
if (isNaN(kilometri)) {
    alert("Kilometri inseriti non validi");
}

const age = parseInt(prompt("Inserisci la tua età"));
if (isNaN(age)) {
    alert("Età inserita non valida");
}

console.log("Kilometri:", kilometri);
console.log("Età:", age);

// prezzo del biglietto
const prezzo = kilometri * 0.21;


// sconto (20% minorenni - 40% over 65)
if (age >= 18 && age < 65) {
    console.log("Prezzo biglietto intero:", prezzo.toFixed(2));
} else if (age < 18) {
    let prezzoMinorenni = prezzo - (prezzo * 20 / 100);
    console.log("Prezzo bigliettto ridotto del 20%:", prezzoMinorenni.toFixed(2));
    alert("Sconto del 20%");
} else if (age >= 65) {
    let prezzoAnziani = prezzo * 0.6
    console.log("Prezzo biglietto ridotto del 40%:", prezzoAnziani.toFixed(2));
    alert("Sconto del 40%");
}