
//nav-bar
function navDrop() {
    var x = document.getElementById("nav2");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
  }

  //funktion för filtret
  function fnDisplayDivs() {
    // Hämta alla kryssrutor med klassen "daor-cont"
    var checkboxes = document.getElementsByClassName("dator-brand");

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

// Funktion för att visa eller dölja varukorgen
function toggleVarukorg() {
  var varukorg = document.getElementById('Varukorg');
  // Kontrollera om varukorgen är dold eller synlig och ändra dess display-stil
  if (varukorg.style.display === 'none' || varukorg.style.display === '') {
      varukorg.style.display = 'block'; // Visa varukorgen
  } else {
      varukorg.style.display = 'none'; // Dölj varukorgen
  }
}

// Hämta referensen till varukorgsikonen och lägg till en klickhändelse
var varukorgIcon = document.getElementById('vagn');
if (varukorgIcon) {
  varukorgIcon.addEventListener('click', toggleVarukorg);
} else {
  console.error('Kunde inte hitta varukorgsikonen med angivet ID.');//extra kontroll
}


function addToCart(namn, pris, bildSrc) {
  // Skapa en ny artikel för varukorgen
  var artikel = document.createElement("article");
  artikel.classList.add("varukorg-artikel");

  // Skapa en div för bilden och lägg till bakgrundsbilden
  var bildDiv = document.createElement("div");
  bildDiv.classList.add("varukorg-bild");
  bildDiv.style.backgroundImage = "url('" + bildSrc + "')";

  // Skapa en div för texten och lägg till artikelns namn och pris
  var textDiv = document.createElement("div");
  textDiv.classList.add("varukorg-text");
  textDiv.innerHTML = "<h5>" + namn + "</h5><p>" + pris + "</p>";

  // Lägg till bilden och texten i artikel-elementet
  artikel.appendChild(bildDiv);
  artikel.appendChild(textDiv);

  // Lägg till den nya artikeln i varukorgen
  var varukorgLista = document.getElementById("varukorg-lista");
  varukorgLista.appendChild(artikel);

  // Visa varukorgen
  var varukorg = document.getElementById("Varukorg");
  varukorg.style.display = "block";
}