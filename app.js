const BMIData = [
  { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée", color: "orange", range: [30, 35] },
  { name: "Obésité sévère", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide", color: "purple", range: 40 },
];

// IMC = poids en kg / taille² en m



/******** récupérer les valeurs des inputs ****/

let btnCalculateIMC = document.querySelector("button")

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
  } else {
        console.log(("InputRegex non ok"))
        alert("Veuillez renseigner votre taille en cm et votre poids en kg");
  }


  
  /*if (!height || !weight) {
    alert("Veuillez renseigner votre taille et votre poids");
  } else {
    //meth Math.sqrt() : renvoyer racine carrée d'un nombre
    let IMC = height * Math.sqrt(weight)
    console.log(IMC)
  }*/
})

