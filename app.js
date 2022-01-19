var btnYes = document.getElementById(btnYes)
var btnNo = document.getElementById(btnNo)
var modalWindow = document.getElementById(modalka)


var txt = document.querySelector(".close");


var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
 span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var txt = document.createTextNode("\u00D7");
var close = document.getElementsByClassName("close");
var i;


  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.parentElement.removeChild(div);
    }
  }

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
 }
}, false);

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
 var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    document.getElementById("zamena").innerHTML = "You have not entered anything";
  } else {
   document.getElementById("myUL").appendChild(li);
   document.getElementById("zamena").innerHTML = "Good";
  }
 document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
 span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
     var div = this.parentElement;
      div.parentElement.removeChild(div);
    }
  }
}



