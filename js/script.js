
//email ammesse per giocare
var emailAmmesse = ['pippo@mail.com' , 'coffee@mail.com' , 'tazza@mail.com' , 'mariorossi@mail.com'];


//Messaggio di input email
var inputMailElement = prompt('Digita la tua email per accedere al gioco!');



//controllo credenziale esatta che verrà stampata nel browser
var credenziale = false;

for (var i = 0; i <= emailAmmesse.length; i++) {
  if (inputMailElement === emailAmmesse[i]) {
    credenziale = true
  }
};


if(!credenziale) {document.getElementById('emailcorretta').innerText =  ('Email sbagliata!')}
else {
  document.getElementById('emailcorretta').innerText = ('Email corretta!')
};


// Una volta accertato che la credenziale sia esatta avvio il gioco dei dadi.
// Per iniziare mi prendo gli ID nell'HTML in cui andrò a stampare le domande e i risultati

var dadiPlayerElement = document.getElementById('randomplayer');

var dadiComputerElement = document.getElementById('randomcomputer');



//Assegno alla variabile dadiPlayerElement un valore random

dadiPlayerElement = Math.floor((Math.random() * 6) + 1);

document.getElementById('randomplayer').innerText = ('Il tuo numero è ') +
dadiPlayerElement;



//Assegno alla variabile dadiComputerElement un valore random

dadiComputerElement = Math.floor((Math.random() * 6) + 1);

document.getElementById('randomcomputer').innerText = ('Il numero del calcolatore è ') + dadiComputerElement;



//Verifico chi abbia vinto/perso/pareggiato tra il giocatore e il computer.

var resultElement = document.getElementById('risultato')

if( dadiPlayerElement > dadiComputerElement) {
  resultElement.innerText = ('the winner is you')}

else if(dadiPlayerElement < dadiComputerElement) {
  resultElement.innerText = ('You are a looser!')}

 else{
  resultElement.innerText = ('Palla al centro!')
 }
