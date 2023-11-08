/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let table = "<table border='1'>";

        // Générer les dix premières tables de multiplication
        for (let i = 1; i <= 10; i++) {
            table += "<tr>";
            for (let j = 1; j <= 10; j++) {
                if (j === 1) {
                    table += "<td>" + (i * j) + "</td>";
                } else {
                    table += "<td>" + (i * j) + "</td>";
                }
            }
            table += "</tr>";
        }

        table += "</table>";

        // Insérer le tableau dans la balise cible
        document.getElementById("target").innerHTML = table;

})();
