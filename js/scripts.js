/* window.addEventListener("load", function (event) {
     let submit = document.getElementById("submit")
     let text = document.getElementById("text").value;
     let output = document.getElementById("output")

     //business logic
     function pigLatin(text) {
        
     }
}) */
let output = document.getElementById("output").innerHTML;
let text = [];
let vowels = ["a", "e", "i", "o", "u"];
function pigLatin(text) {
    vowels.forEach(function (vowel) {
        if (text.startsWith(vowel)) {
            text.forEach(function (singleWord) {
                singleWord.concat('way');
            });
            console.log(text);
        };
    });
};







/*
window.onload = function () {
    vowelAr = ["a", "e", "o", "u", "i"]
    let form = document.querySelector("form");
    let div = document.getElementById("output");
    form.addEventListener("submit", submitFunction);


    function submitFunction(event) {
        event.preventDefault();
        let inputText = document.getElementById("textinput").value;
        let savedText = inputText;

        for (index = 0; index < 6; index++) {
            savedText = savedText.replaceAll(vowelAr[index],'-');
            div.innerHTML = savedText;
        }
    }


}
*/