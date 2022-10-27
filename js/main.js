const kilometri = prompt("Inserisci i Km che vuoi percorrere");
const age = parseInt(prompt("Inserisci la tua età"));

console.log("Kilometri:", kilometri);
console.log("Età:", age);

// prezzo del biglietto
const prezzo = kilometri * 0.21;

// sconto (20% minorenni - 40% over 65)
if (isNaN(age)) {
    alert("Età inserita non valida");
}

if (age >=18 && age <65) {
    console.log ("Prezzo del biglietto intero:", prezzo);
} else if (age < 18) {
    console.log ("Prezzo scontato del 20%:", prezzo - (prezzo * 20 / 100));
    alert("Sconto del 20%");
} else if (age >= 65 ) {
    console.log ("Prezzo scontato del 40%:", prezzo * 0.6);
    alert("Sconto del 40%");
}