//kort så behövde inga kommentarer för att förstå
var navbarManager = {
  toggleNavbar: function() {
      var x = document.getElementById("nav2");
      if (x.className === "nav") {
          x.className += " responsive";
      } else {
          x.className = "nav";
      }
  }
};

// Funktion för att toggla navbaren
function navDrop() {
  navbarManager.toggleNavbar();
}

//funktion för filtret
function fnDisplayDivs() {
  // Hämta alla kryssrutor med klassen "dator-brand"
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
//gäller för tablett och mobil
function toggleVarukorg() {
var varukorg = document.getElementById('Varukorg');
// Kontrollera om varukorgen är dold eller synlig och ändra dess display-stil
if (varukorg.style.display === 'none' || varukorg.style.display === '') {
    varukorg.style.display = 'block'; // Visa varukorgen
    updateKassaKnappSynlighet();
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

//ändrar kassan knappens synlighet
function updateKassaKnappSynlighet() {
var varukorg = document.getElementById("Varukorg");
var tomKnapp = document.getElementById("kassa-knapp");

// Kontrollera om varukorgen innehåller några artiklar
var varukorgLista = document.getElementById("varukorg-lista");
var synlig = varukorgLista.children.length > 0;

// Visa eller döljer kassa knappen beroende på om varukorgen är tom eller inte
tomKnapp.style.display = synlig ? "block" : "none";
}

//funktion för att  lägga till i varukorghen samt få fram total summa
// Variabel för att hålla reda på den totala summan
var totalSumma = 0;

function addToCart(namn, beskrivning, pris, bildSrc) {
  // Skapa en ny artikel för varukorgen
  var artikel = document.createElement("article");
  artikel.classList.add("varukorg-artikel");

  // Skapa en img-tag för bilden
  var bildImg = document.createElement("img");
  bildImg.src = bildSrc;
  bildImg.alt = namn;

  // Skapa en div för texten och lägg till artikelns namn och pris
  var textDiv = document.createElement("div");
  textDiv.classList.add("varukorg-text");

  var namnDiv = document.createElement("div");
  namnDiv.classList.add("varukorg-namn");
  namnDiv.textContent = namn;

  var beskrivningDiv = document.createElement("div");
  beskrivningDiv.classList.add("varukorg-beskrivning");
  beskrivningDiv.textContent = beskrivning;

  var prisDiv = document.createElement("div");
  prisDiv.classList.add("varukorg-pris");
  prisDiv.textContent = pris;


  // Lgg till namn, pris och beskrinving i textDiv
  textDiv.appendChild(namnDiv);
  textDiv.appendChild(beskrivningDiv);
  textDiv.appendChild(prisDiv);

  // Lägg till blilden och texten i artikel-elementet
  artikel.appendChild(bildImg);
  artikel.appendChild(textDiv);

  // Lägg till den nya artikeln i varukorgen
  var varukorgLista = document.getElementById("varukorg-lista");
  varukorgLista.appendChild(artikel);

  //lägger till priset iden totala summan
  totalSumma += parseFloat(pris.replace(" kr", "").replace(/\D/g, ''));
  updateTotalSumma();

  updateKassaKnappSynlighet();
  // Visa varukorgen
  var varukorg = document.getElementById("Varukorg");
  varukorg.style.display = "block";

  

//funktion för den totala summan
  function updateTotalSumma() {
    var summaElement = document.getElementById("total-summa");
    summaElement.textContent = "Summa: " + totalSumma.toFixed(2) + " kr";
}

}

//denna gäller för varukorgen till dator
// Funktion för att uppdatera antalet kolumner baserat på varukorgens synlighet
function updateColumns(varukorgVisible) {
const main = document.querySelector('main');
if (varukorgVisible) {
    // Om varukorgen är synlig, visa 2 kolumner
    main.style.gridTemplateColumns = 'repeat(2, 1fr)';
    main.style.gridColumn = '2 / 3';
} else {
    // Om varukorgen är dold, visa 3 kolumner
    main.style.gridTemplateColumns = 'repeat(3, 26vw)';
    main.style.gridColumn = '2 / span 2';
}
}

// Funktion för vagnknappen till dator
function toggleColumns() {
const varukorg = document.getElementById('Varukorg');
varukorg.style.display = varukorg.style.display === 'none' ? 'block' : 'none';
const varukorgVisible = varukorg.style.display !== 'none';
updateColumns(varukorgVisible);
updateKassaKnappSynlighet()
}