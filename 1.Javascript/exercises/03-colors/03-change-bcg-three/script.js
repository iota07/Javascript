/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    function getRandomColor() {
        
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
    
        
        const color = `rgb(${red}, ${green}, ${blue})`;
    
        return color;
    }
    
    document.getElementById('run').addEventListener('click', function(){

        const randomColor = getRandomColor();
        document.body.style.backgroundColor = randomColor;
    });
      
    
    

})();
