var buttons = document.getElementsByClassName("button"),
    list = document.getElementById("list"),
    btnLength = buttons.length,
    frag = document.createDocumentFragment(),
    li, i;

for (i = 0; i < btnLength; i++) {
    li = document.createElement("li");
    li.textContent = buttons[i].innerText;
    frag.appendChild(li);
}
list.appendChild(frag);