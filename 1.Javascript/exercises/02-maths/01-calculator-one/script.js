/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    
     

    document.getElementById("addition").addEventListener("click", () => {
        // perform an addition
        function addition(a, b) {
            return a + b;
        };
        var op1 = document.getElementById('op-one').value;
        var num1 = parseFloat(op1);
        var op2 = document.getElementById('op-two').value;
        var num2 = parseFloat(op2);  
                          
        let result = addition(num1, num2);
        alert(result);

    });

    document.getElementById("substraction").addEventListener("click", () => {
        // perform an substraction
        function substraction(a,b){
            return a - b;
        };

        var op1 = document.getElementById('op-one').value;
        var num1 = parseFloat(op1);
        var op2 = document.getElementById('op-two').value;
        var num2 = parseFloat(op2); 

        let result = substraction(num1, num2);
        alert(result);

    });

    document.getElementById("multiplication").addEventListener("click", () => {
        // perform an multiplication
        function multiplication(a,b){
            return a * b;
        };
        var op1 = document.getElementById('op-one').value;
        var num1 = parseFloat(op1);
        var op2 = document.getElementById('op-two').value;
        var num2 = parseFloat(op2); 

        let result = multiplication(num1, num2);
        alert(result);


    });

    document.getElementById("division").addEventListener("click", () => {
        // perform an division
        function division(a,b) {
            return a / b;

        };

        var op1 = document.getElementById('op-one').value;
        var num1 = parseFloat(op1);
        var op2 = document.getElementById('op-two').value;
        var num2 = parseFloat(op2);

        let result = division(num1, num2);
        alert(result);


    });

    
})();
