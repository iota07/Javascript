/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(()=> {

    // your code here

    let i; 
    let a = 100;
    let resultArray = [];

    for (i=1;i<=a;i++){
    if(i%3==0 && i%5==0){

        resultArray.push("fizzbuzz");
        
    }else if(i%5==0) {
        
        resultArray.push("buzz");

    }else if(i%3==0) {
        
        resultArray.push("fizz");
    }else {
        resultArray.push(i);
    }
};
console.log (resultArray);  



})();
