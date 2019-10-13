// set a list of word
var wordlist = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
document.onkeyup = function(event) {
    var letter = event.key.toLowerCase();
// The computer randomly pick a word
var word = word[Math.floor(Math.random()*wordlist.length)];

var playerInputArray = [];
for (var i=0; i <word.lengh;i++) {
    anserArray[i]="_";
}
var remainingLetters = word.lengh;
while (remainingLetters > 0) {
    console.log(anserArray.join(""));

}