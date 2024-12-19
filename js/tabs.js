var videoButton = document.getElementById("videoButton");

videoButton.onclick = function() {
    // el.src = "";
    // el.style.fontSize ="56px";
    videoButton.innerText = "hyhyhujujujuju";
}

function listener(e) {
    var l = document.createElement("li");
    switch (e.type) {
      case "animationstart":
        l.innerHTML = "Started: elapsed time is " + e.elapsedTime;
        break;
    }
    document.getElementById("output").appendChild(l);
  }