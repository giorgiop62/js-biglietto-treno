//chiedere all'utente km che vuole percorrere e l'età del passeggero
//calcolare il prezzo totale del viaggio:
//il prezzo del biglietto è definito in base ai km(0.21 al km)
//applicato lo sconto del 20% per i minorenni
//sconto del 40% per gli over 65
// output prezzo in forma umana

const km = prompt('Quanti km devi percorrere?');
const età = prompt('Quanti anni hai?');
const prezzoAlKm = 0.21;
let risulato = (prezzoAlKm * km);
if(età < 18){
  ScontoMinore = (risulato * 0.2); 
  console.log(ScontoMinore);
} else if(età >=65){
  ScontoOver = ( risulato * 0.4);
  console.log (ScontoOver)
}else {
  let risulato;
  console.log(risulato);
}





