const kilometri = prompt("Inserisci i Km che vuoi percorrere");
const age = parseInt(prompt("Inserisci la tua età"));

console.log("Kilometri:", kilometri);
console.log("Età:", age);

// prezzo del biglietto
const prezzo = kilometri * 0.21;
console.log ("Prezzo del biglietto:", prezzo);

// sconto (20% minorenni - 40% over 65)
if (isNaN(age)) {
    alert("Età inserita non valida")
}
