function countSentences() {
    var text = document.getElementById("textAr").value;
    var sentences = text.split(/[.!?]+/).filter(function (sentence) {
        return sentence.trim() !== '';
    });
    document.getElementById("result").textContent = "Number of sentences: " + sentences.length;
}
