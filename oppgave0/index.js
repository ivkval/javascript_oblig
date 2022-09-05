// Oppgave 1
// Henter teksten som skal fjernes
const removableText = document.getElementById("remove");
// Henter knappen som skal fjerne teksten
const removeTextButton = document.getElementById("remove-btn");

// Fester en klikk-lytter som fjerner teksten med
// en funskjon som fjerner teksten
removeTextButton.addEventListener("click", () => {
  removableText.innerHTML = "";
});

// Oppgave 2
// Tekst som skal byttes ut med den som allerede finnes på siden.
const newText = `“It was the best of times, it was the worst of times, 
                  it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, 
                  it was the epoch of incredulity, it was the season of light, it was the season of darkness, 
                  it was the spring of hope, it was the winter of despair.”

                  ― Charles Dickens, A Tale of Two Cities`;

// Den gamle teksten som skal byttes ut
const changeableText = document.getElementById("change");
// Knappen som skal bytte tekstene
const changeTextButton = document.getElementById("change-btn");

// Klikk-lytter som legger til den nye teksten på siden
changeTextButton.addEventListener("click", () => {
  changeableText.innerHTML = newText;
});

// Oppgave 3
// Input-feltet som man skriver i
const inputField = document.getElementById("input");
// Tekstboksen som skriver ut det som skrives i input-feltet
const inputText = document.getElementById("input-text");

// En lytter som kobles til input-feltet og som lytter etter inputs
inputField.addEventListener("input", (e) => {
  // Henter teksten og skriver den ut for hvert tastetrykk
  let text = e.target.value;
  inputText.innerHTML = text;
});

// Oppgave 4
const myList = ["item one", "item two", "item three"];
// Henter listen
const getUl = document.getElementById("ul");
// Henter knappen som skal skrive ut listen
const writeListButton = document.getElementById("write-list");

// Fester en lytter som legger til alle elementene i "myLIst"-arrayet
// og skriver dem ut på siden
writeListButton.addEventListener("click", () => {
  let list = "";
  for (let listItem of myList) {
    list += "<li>" + listItem + "</li>";
  }
  getUl.innerHTML = list;
});

// Oppgave 5
/*
Henter kontaineren som skal inneholde de nye taggene som lages,
de to forskjellige inputene, drop-down menyen og input-feltet og
knappen spm skal lage elementene.
*/
const placeholder = document.getElementById("placeholder");
const selectElement = document.getElementById("select");
const inputElement = document.getElementById("text");
const createElementButton = document.getElementById("create");

// Funksjon som lager nye tekst-elementer ut i fra taggen
// som er blitt valgt
createElementButton.addEventListener("click", () => {
  const tag = selectElement.value; // Henter tagg
  const text = inputElement.value; // Henter tekst
  const newElement = "<" + tag + ">" + text + "</" + tag + ">"; // Lager html
  placeholder.innerHTML = newElement; // Legger til det nye elementet
  inputElement.value = ""; // Tømmer input-feltet
});

// Oppgave 6
// Henter knappen som skal fjerne liste-elementer
const removeLiButton = document.getElementById("remove-li");

// Klikk lytter som fjerne det siste liste-elementet i listen
removeLiButton.addEventListener("click", () => {
  const getList = document.getElementById("list");
  const lastChildElement = getList.lastElementChild;
  lastChildElement.remove();
});

// Oppgave 7
// Input-feltet som man skriver ord i
const wordInputField = document.getElementById("name");
// Knappen som enten skal bli disabled eller få border fargen endret til rød
const buttonToDisable = document.getElementById("order");

wordInputField.addEventListener("input", (e) => {
  const name = e.target.value;
  const nameText = name.trim(); // Fjerner whitespace/mellom-rom
  // If-test som tester om ordet har mer enn 4 bokstaver
  // Hvis ja blir border rød, ellers er border svart
  nameText.length > 4
    ? (buttonToDisable.style.borderColor = "red")
    : (buttonToDisable.style.borderColor = "black");
});

// Oppgave 8
// henter listen med barne-elementer
const ulWithChildren = document.querySelector(".children");
// Henter knappen som skal gi li-elementene en border
const giveChildrenBorderButton = document.getElementById("color");

// Konstanter som holder på styling til border
const greenBorder = "thin solid green";
const pinkBorder = "thin solid pink";

giveChildrenBorderButton.addEventListener("click", () => {
  const liChildren = Array.from(ulWithChildren.children); // Henter ut alle li-elementene og sørger for at de kommer i en array
  for (let i = 0; i < liChildren.length; i++) {
    liChildren[i].style.border = i % 2 === 0 ? greenBorder : pinkBorder; // If-test som gir grønn border til oddetall og rosa til partall
  }
});