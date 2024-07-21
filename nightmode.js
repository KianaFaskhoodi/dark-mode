
function dark() {
  debugger;
  var radio = document.getElementById("mySwitch");
    var element = document.getElementsByTagName("link");
    
    if (radio.checked) {
        element[1].setAttribute("href", "dark.css");
    } else {
      element[1].setAttribute("href", "light.css");
  }
}  