/* becode/javascript
 *
 * /08-dom/04-attr-create/script.js - 8.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let sourceImg = document.getElementById('source');
    let dataImg = sourceImg.getAttribute('data-image');
    
    let newImg = document.createElement('img');
    newImg.src = dataImg;
    
    let figureElement = document.getElementById('target');

    figureElement.appendChild(newImg);

    sourceImg.remove();
    

})();
