const BMIData = [
  { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée", color: "orange", range: [30, 35] },
  { name: "Obésité sévère", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide", color: "purple", range: 40 },
];

// IMC = poids en kg / taille² en m


/******** Valeurs et calcul ********
 * Récupérer les valeurs des inputs
 * Regex : uniquement des chiffres
 * Calculer IMC = poids en kg / taille² en m
 */

// le formulaire est un objet du DOM (html) >> typeof form = object
// Pour l'affichage de toutes les propriétés de l'objet : console.dir(form)
const form = document.querySelector("form");

// évenement avec 2 arguments : nom de l'événement (submit) et meth call back (fonction appelée par une autre fonction)
// addEventListener est une méthode = fonction qui est sous forme de propriété dans un objet
form.addEventListener("submit", handleForm);

function handleForm(e) {
  e.preventDefault();

  calculateBMI();
}

// objet node (sans [..]) ou tableau (avec [...document.querySelector]) permettant présentation de toutes les méthodes)
const inputs = document.querySelectorAll("input");

// 1er élément = index 0 et 2e élément = index 1
function calculateBMI() {
  const height = inputs[0].value;
  const weight = inputs[1].value;

  // truthy
  // falsy = "" null undefined false
  
  if (!height || !weight || height <= 0 || weight <= 0) {
    handleError();
    return;
  }

  // calcul IMC = meth math.pow (mettre au carré)
  // height / 100 pr obtenir taille en m et plus en cm
  // meth toFixed(1) = s'arrêter à 1 chiffre décimal
  const BMI = (weight / Math.pow(height / 100, 2)).toFixed(1);
  console.log(BMI);

  showResult(BMI);
}

const displayBMI = document.querySelector(".bmi-value");
const result = document.querySelector(".result");

function handleError() {
  displayBMI.textContent = "Oups!";
  displayBMI.style.color = "inherit";
  result.textContent = "Remplissez correctement votre taille et votre poids";
}

/****** Fonction montrer le résultat ******
 * remplir les deux conditions pour obtenir données
 * prendre en compte le dernier cas où il n'y a pas de tableau 
 */

function showResult(BMI) {
  const rank = BMIData.find(data => {
    if (BMI >= data.range[0] && BMI < data.range[1]) return data;
    else if (typeof data.range === "number" && BMI >= data.range) return data;
  });

  console.log(rank)

  displayBMI.textContent = BMI;
  displayBMI.style.color = `${rank.color}`;
  result.textContent = `Résultat : ${rank.name}`;
}



/****** MA VERSION ******

const btnCalculateIMC = document.querySelector("button")

btnCalculateIMC.addEventListener("click", (event) => {
  event.preventDefault();

  const inputRegex = new RegExp(/^\d+$/)

  let height = document.querySelector("#height").value
  let weight = document.querySelector("#weight").value
  console.log(height);
  console.log(weight);

  if (inputRegex.test(height) && (inputRegex.test(weight))) {
      console.log("InputRegex ok")
      //meth Math.sqrt() : renvoyer racine carrée d'un nombre
      let IMC = height * Math.sqrt(weight)
      console.log(IMC)
      toRankImg()  
  } else {
        console.log(("InputRegex non ok"))
        alert("Veuillez renseigner votre taille en cm et votre poids en kg");
  }

  if (!height || !weight) {
    alert("Veuillez renseigner votre taille et votre poids");
  } else {
    //meth Math.sqrt() : renvoyer racine carrée d'un nombre
    let IMC = height * Math.sqrt(weight)
    console.log(IMC)
  }
  
  */