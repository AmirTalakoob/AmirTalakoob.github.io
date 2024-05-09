function handleClick() {
    document.getElementById("textbox").style.fontSize = "24pt";
}

function changeStyle(){
    if (document.getElementById("shmancy").checked) {
        document.getElementById("textbox").style.fontWeight = "bold";
        document.getElementById("textbox").style.color = "blue";
        document.getElementById("textbox").style.textDecoration = "underline";
    }
    if (document.getElementById("boring").checked) {
        document.getElementById("textbox").style.fontWeight = "normal";
        document.getElementById("textbox").style.color = "black";
        document.getElementById("textbox").style.textDecoration = "none";
    }
}

function moo(){
    var text = document.getElementById("textbox").value;
    var sentences = text.split(".");

    //faced a problem with an additional empty sentence at the end, this is to remove it
    sentences = sentences.filter(function(sentence) {
        return sentence.trim() !== "";
    });

    sentences.forEach(function(sentence, index, array) {
        array[index] = sentence.trim() + " Moo.";
    });

    document.getElementById("textbox").value = sentences.join(" ");
}