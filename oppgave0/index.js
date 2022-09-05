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
const getUl = document.getElementById("ul");
const writeListButton = document.getElementById("write-list");

writeListButton.addEventListener("click", () => {
  let list = "";
  for (let listItem of myList) {
    list += "<li>" + listItem + "</li>";
  }
  getUl.innerHTML = list;
});

// Oppgave 5
const placeholder = document.getElementById("placeholder");
const selectElement = document.getElementById("select");
const inputElement = document.getElementById("text");
const createElementButton = document.getElementById("create");

createElementButton.addEventListener("click", () => {
  const tag = selectElement.value;
  const text = inputElement.value;
  const newElement = "<" + tag + ">" + text + "</" + tag + ">";
  placeholder.innerHTML = newElement;
  inputElement.value = "";
});

// Oppgave 6
const removeLiButton = document.getElementById("remove-li");

removeLiButton.addEventListener("click", () => {
  const getList = document.getElementById("list");
  let lastChildElement = getList.lastElementChild;
  lastChildElement.remove();
});

// Oppgave 7
const nameInputField = document.getElementById("name");
const buttonToDisable = document.getElementById("order");

nameInputField.addEventListener("input", (e) => {
  const name = e.target.value;
  const nameText = name.trim(); // Fjerner whitespace/mellom-rom
  nameText.length > 4
    ? (buttonToDisable.style.borderColor = "red")
    : (buttonToDisable.style.borderColor = "black");
});

// Oppgave 8
const ulWithChildren = document.querySelector(".children");
const giveChildrenBorderButton = document.getElementById("color");

const greenBorder = "thin solid green";
const pinkBorder = "thin solid pink";

giveChildrenBorderButton.addEventListener("click", () => {
  const liChildren = Array.from(ulWithChildren.children);
  for (let i = 0; i < liChildren.length; i++) {
    liChildren[i].style.border = i % 2 === 0 ? greenBorder : pinkBorder;
  }
});