var buttons = document.getElementsByClassName("button");

for (var i=0; i<buttons.length; i++) {
    var newElem = document.createElement('li'),
        output = (buttons[i].innerText),
        list=document.getElementById('buttons-names');
    list.appendChild(newElem).innerHTML = output;
}
