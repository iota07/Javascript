/* becode/javascript
 *
 * /08-dom/07-generate-table-one/script.js - 8.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let table = document.createElement('table');

    const numRows = 10;

    for (let i = 0; i < numRows; i++) {
        let row = table.insertRow();
        let cell1 = row.insertCell();       
        cell1.innerHTML = `${i + 1}`;
        
    }


    document.getElementById('target').appendChild(table);

})();
