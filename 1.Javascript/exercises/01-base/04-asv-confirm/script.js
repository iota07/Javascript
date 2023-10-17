/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

let confirmation = false;

while (!confirmation) {

    let age = prompt('Quel age avez-vous?');
    let sex = prompt('Quel est votre sexe H ou F ?');
    let location = prompt('Quelle ville habitez-vous');   
                
    
    let confirmationInfo = `Votre age est ${age}, votre sex est ${sex} et votre ville est ${location}, Ces informations sont-elles correctes ?`;

    confirmation = confirm(confirmationInfo);

    if (!confirmation) {
        alert("Veuillez réintroduire vos informations");
    }

}

alert('Merci de votre confirmation');


})();
