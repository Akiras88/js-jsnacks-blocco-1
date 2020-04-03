/***************************************************************************
 * Snack 1
 * 
 * L’utente inserisce due parole in successione, con due prompt. 
 * Il software stampa la parola più lunga. 
 * Utilizza una funzione per determinare e ritornare la parola più lunga.
 ***************************************************************************/

// var parola1 = prompt('Inserisci la prima parola').trim().toLowerCase();
// var parola2 = prompt('Inserisci la seconda parola').trim().toLowerCase();
// 
// console.log('La tua prima parola: ' , parola1);
// console.log('La tua seconda parola: ' , parola2);
// 
// var inputParole = confronta(parola1, parola2);
// 
// if (inputParole == true) {
    // console.log('La prima parola è più lunga')
// } else if (inputParole == false) {
    // console.log('La seconda parola è più lunga')
// } else {
    // console.log('Le due parole sono uguali')
// }




// compare function
// function confronta(par1, par2 ) {
    // var res = ""
    // if (par1.length > par2.length) {
        // return true
    // } else if (par1.length < par2.length) {
    //    return false
    // } 
// }

/***************************************************
 * Snack 2
 * 
 * Inserisci un numero, se è pari stampa il numero
 * Se è dispari stampa il numero successivo
 ***************************************************/

// var numero = parseInt( prompt ('Inserisci un numero') );
// console.log('Il numero scelto è: ', numero);
// 
// var ifPari = pari(numero);
// 
// if (ifPari == true) {
    // console.log('Il numero ' + numero + ' è pari');
// } else  {
    // console.log('Il numero da te scelto è dispari: ' + numero);
    // numero ++;
    // console.log('Stampo il numero successivo ' + numero);
// } 
//   


// even function
// function pari(num)  {
    // if (num % 2 == 0) {
        // return true
    // }
    // return false
// }

/****************************************************************
 * Jsnack 3
 * 
 * Generatore di “nomi cognomi” casuali:
 * prendendo una lista di nomi (‘Michele’, ‘Fabio’, ‘Roberto’) 
 * e una lista di cognomi (‘Forghieri’, ‘Papagni’, ‘Marazzini’)
 * Gatsby vuole generare una falsa lista di 5 invitati.
 ***************************************************************/

// var names = ['Michle', 'Fabio', 'Roberto'];
// var lastNames = ['Forhieri', 'Papagni', 'Marazzini'];
// 
// var fullNameList = [];
// 
// for ( var i = 0; i < 5; i++ ) {
    // var randomNameNumber = getRandomNumber(names.length, 0);
    // var randomLastNameNumber = getRandomNumber(lastNames.length, 0);
// 
    // var newFullName = names[randomNameNumber] + ' ' + lastNames[randomLastNameNumber];
// 
    // fullNameList.push(newFullName);
// }
// 
// console.log(fullNameList);

// random number function
// function getRandomNumber (min, max) {
    // 
    // return Math.floor( Math.random() * (max - min + 1) ) + min;
// }


/************************************************************************
 * Jsnack 4
 * 
 * Crea un array di numeri interi, ad esempio (1, 4, 2, 15, 120, 17, 3) 
 * fai la somma di tutti gli elementi che sono in posizione dispari
 * Prova prima senza funzione e poi con funzione
 *************************************************************************/

var numbers = [1, 4, 2, 15, 120, 17, 3];
console.log('L\' array è composto dai senguenti numeri', numbers);


// sum of all elements that are in odd position
var sum = 0;

for (var i = 0 ; i < numbers.length; i++ ) {
    if( odd(i) ) {
        sum += numbers[i];
    }
}
console.log('La somma dei numeri con indici dispari è:', sum);

// odd function
function odd(numb) {
    if( numb % 2 != 0 ) {
        return true;
    }
    return false;
}

