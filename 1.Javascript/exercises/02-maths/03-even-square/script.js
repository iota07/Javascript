/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        // your code here

            let i; 
            let a = 21;
            let resultArray = [];

            for (i=1;i<=a;i++){
            if(i%2==0){

                let square = i*i;
                resultArray.push(square);
                
            };
        };
        console.log (resultArray);
        alert(resultArray);


    });
})();
