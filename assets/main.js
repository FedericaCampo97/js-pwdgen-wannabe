//Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito ed infine scrivi in pagina (non solo in console)il risultato
 
//Istruzioni:
//3 prompt 
//let passwrord
//document.getElementById
//Console.log

//Chiedi all'utente il suo nome 
const userName = prompt('inserisci il tuo nome');

//Chiedi all'utente il suo cognome
const userSurname = prompt('inserisci il tuo cognome');

//Chiedi all'utente il suo colore preferito 
const userColor = prompt('inserisci il tuo colore preferito');

//Creo la password 
let password = userName + userSurname + userColor + 23; 

//Scrivo in console la password 
console.log(password);

//Scrivo in pagina il risultato della password 
document.getElementById('password').innerHTML = password;






