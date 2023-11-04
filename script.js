const outputVar = document.getElementById('output');
console.log(outputVar);

function keydisplay(event){
    outputVar.innerHTML = `${event.key}`;
    // console.log(`event.key $(event.key)`);
}

document.addEventListener('keydown', keydisplay);

function myFunction(event) {
    let value= event.keyCode;
    document.getElementById("key-code-display").innerHTML = value;
}

document.addEventListener('keypress', myFunction);