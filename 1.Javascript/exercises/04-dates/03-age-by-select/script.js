/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
        
    
    document.getElementById('run').addEventListener('click', function(){

        let day = document.getElementById('dob-day').value;
        let month = document.getElementById('dob-month').value;
        let year = document.getElementById('dob-year').value;
        const dateOfBirth = `${year}-${month}-${day}`;
        console.log(dateOfBirth);
        let age = Date.now() - dateOfBirth;
        function calculateAge(dateOfBirth) {
            const today = new Date();
            const birthDate = new Date(dateOfBirth);
            let age = today.getFullYear() - birthDate.getFullYear();
            const monthDiff = today.getMonth() - birthDate.getMonth();
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age;
        };
       console.log(age);
        
    });

     


})();
