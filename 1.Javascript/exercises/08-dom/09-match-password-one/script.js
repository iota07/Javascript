/* becode/javascript
 *
 * /08-dom/09-match-password-one/script.js - 8.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let buttonscript = document.getElementById('run');

    buttonscript.addEventListener('click', function(){
        let pwd1 = document.getElementById('pass-one').value;
        let pwd2 = document.getElementById('pass-two').value;
        if (pwd1 !== pwd2) {
            document.getElementById('pass-one').style.border = "2px solid red";
            document.getElementById('pass-two').style.border = "2px solid red";
        } else {
            document.getElementById('pass-one').style.border = "1px solid black";
            document.getElementById('pass-two').style.border = "1px solid black";
        }
    });
})();
