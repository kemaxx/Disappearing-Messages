var timer;

function startTyping(){
clearTimeout(timer);
timer = setTimeout(eraseText,3000);
}

function eraseText(){
document.getElementById("textBox").value="";
}