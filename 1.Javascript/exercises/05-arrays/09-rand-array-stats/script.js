/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    document.getElementById('run').addEventListener('click', function(){

        function generateRandomNumbers() {
            const randomNumbers = [];
            for (let i = 1; i <= 10; i++) {
                const randomNumber = Math.floor(Math.random() * 100) + 1;
                const cell = document.getElementById('n-' + i);
                cell.textContent = randomNumber;
                randomNumbers.push(randomNumber);
            }
            return randomNumbers;
        }
        
        const numbersArray = generateRandomNumbers();

        const smallest = Math.min(...numbersArray);
        const highest = Math.max(...numbersArray);
        const sum = numbersArray.reduce((a, b) => a + b, 0);
        const average = sum / numbersArray.length;

        console.log("Le plus petit nombre :", smallest);
        console.log("Le plus grand nombre:", highest);
        console.log("Somme des nombres :", sum);
        console.log("Moyenne des nombres:", average);

        document.getElementById("min").textContent = smallest;
        document.getElementById("max").textContent = highest;
        document.getElementById("sum").textContent = sum;
        document.getElementById("average").textContent = average;





    });


})();
