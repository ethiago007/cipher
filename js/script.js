const sentence = prompt("Type a sentence");
alert(sentence);
let kamal = sentence.charAt(0).toUpperCase();
//alert(kamal);
let kamalLast = sentence.charAt(sentence.length - 1).toUpperCase();
//alert(kamalLast);
let reservedConcat = kamal.concat(kamalLast);
function reservedSentence(string) {
    return reservedConcat;
}
alert(reservedSentence(sentence));
let takenConcat = [...reservedConcat].reverse().join("");
function reservedOmo(string) {
    return takenConcat;
}
alert(reservedOmo(sentence));
let concatedSentence = sentence.concat(takenConcat);
function concatedSentenc(string) {
    return concatedSentence;
}
alert(concatedSentence);
let bigger = sentence.charAt(sentence.length / 2);
function big(string) {
    return bigger;
}
alert(bigger);
let volvo = bigger.concat(concatedSentence);
function lips(string) {
    return volvo;
}
alert(volvo);
let iPhone = [...volvo].reverse().join("");
function sick(string){
    return iPhone;
}
alert(iPhone);
$(document).ready(function() {
    $(".original").click(function() {
      alert(sentence);
    });
    $(".encoded").click(function() {
        alert(iPhone);
      });
});



