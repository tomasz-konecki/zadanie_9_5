var buttons = document.getElementsByClassName("button"),
    list = document.getElementById("list"),
    btnLength = buttons.length,
    frag = document.createDocumentFragment();

for (var i = 0; i < btnLength; i++) {
    var li = document.createElement("li");
    li.innerHTML = (buttons[i].innerText);
    frag.appendChild(li);
}
list.appendChild(frag);