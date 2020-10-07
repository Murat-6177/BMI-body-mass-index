let massMark = 78;
let massJohn = 96;
let heightMark = 1.76;
let heightJohn = 1.86;
// Calculate BMI of John and Mark
// BMI = mass / height2 = mass / (height * height). (mass in kg and height in meter).
let BMIJohn = massJohn / (heightJohn * heightJohn);
let BMIMark = massMark / (heightMark * heightMark);
console.log("Mark's BMI is " + BMIMark);
console.log("John's BMI is " + BMIJohn);
//givin methods to BMI
BMIJohn = BMIJohn.toFixed(3);     // toFixed       kesirli sayılardan "baştan" 3 sayı kalır diğerleri mefta
BMIMark = BMIMark.toFixed(1);     // toFixed              """"""""""
const higherBMI = BMIMark > BMIJohn; //this give "true"
console.log(
  `Is Mark's BMI is higher than John's? Answer is “${higherBMI}". Because Mark's BMI is ${BMIMark} and John's BMI is ${BMIJohn}`
);



//new challenge

massArda = prompt("Arda'nın kilosu");
massMelda = prompt("Melda'nın kilosu");
heightArda = prompt("Arda'nın boyu")
heightMelda  = prompt("Melda'nın boyu")

BMIArda = massArda / (heightArda * heightArda);
BMIMelda = massMelda / (heightMelda * heightMelda);
console.log(BMIArda);
console.log(BMIMelda);

BMIArda = BMIArda.toFixed(2);
console.log("Arda's BMI is " + BMIArda);
BMIMelda = BMIMelda.toFixed(2);
console.log("Melda's BMI is " + BMIMelda);

// new challenge bitimi
