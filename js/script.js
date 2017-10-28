var liList = document.getElementsByTagName("li");
var i = 0;
for (i; i < liList.length; i++) {
    var button = document.createElement("span");
    button.className = "close";
    liList[i].appendChild(button);
}


var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;

        div.style.display = "none";
    }
}


var list = document.querySelector('ul');
var count = 0;
list.addEventListener('click', function (liHover) {

    if (liHover.target.tagName === 'LI') {
        liHover.target.style.backgroundColor = "green";
        liHover.target.innerHTML = "Zadanie wykonane (usuwanie z listy...)";

        function coun() {
            var addCount = document.getElementById('clickme');

            count++;
            addCount.innerHTML = count;

        }
        coun();

        setTimeout(function () {
            liHover.target.style.display = "none";
        }, 1000);
    }
}, false);


function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var creaElem = document.createTextNode(inputValue);
    li.appendChild(creaElem);
    if (inputValue === '') {
        alert("Na pewno nie masz żadnych zadań :)? Wpisz coś");
    } else {
        document.getElementById("ulList").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var buttonClose = document.createElement("button");

    buttonClose.className = "close";
    buttonClose.append("Usuń zadanie");
    li.appendChild(buttonClose);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;

            div.style.backgroundColor = "red";

            setTimeout(function () {
                div.style.display = "none";
            }, 1000);
        }
    }
}
