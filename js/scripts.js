/* window.addEventListener("load", function (event) {
     let submit = document.getElementById("submit")
     let text = document.getElementById("text").value;
     let output = document.getElementById("output")

     //business logic
     function pigLatin(text) {
        
     }
}) */
let output = document.getElementById("output").innerHTML;
let text = document.getElementById("text").value;
let vowels = ["a", "e", "i", "o", "u"];
function pigLatin(text) {
    vowels.forEach(function (element) {
        if (text.startsWith(element)) {
            console.log('this functions properly 1');
        };
    });
};