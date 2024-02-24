
//nav-bar//
function navDrop() {
    var x = document.getElementById("nav2");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
  }

  function fnDisplayDivs() {
    // Hämta alla kryssrutor med klassen "daor-cont"
    var checkboxes = document.getElementsByClassName("daor-cont");

    // Skapa en variabel för att hålla koll på om någon kryssruta är markerad
    var anyCheckboxChecked = false;

    // Loopa genom alla kryssrutor
    for (var i = 0; i < checkboxes.length; i++) {
        var checkbox = checkboxes[i];
        var filter = checkbox.getAttribute("rel");

        // Hämta alla artiklar med motsvarande klass och visa/dölj dem baserat på om kryssrutan är markerad eller inte
        var articles = document.getElementsByClassName(filter);
        for (var j = 0; j < articles.length; j++) {
            if (checkbox.checked) {
                articles[j].style.display = "flex";
                // Om någon kryssruta är markerad, sätt anyCheckboxChecked till true
                anyCheckboxChecked = true;
            } else {
                articles[j].style.display = "none";
            }
        }
    }

    // Om ingen kryssruta är markerad, visa alla artiklar
    if (!anyCheckboxChecked) {
        var allArticles = document.querySelectorAll(".main article");
        for (var k = 0; k < allArticles.length; k++) {
            allArticles[k].style.display = "flex";
        }
    }
}