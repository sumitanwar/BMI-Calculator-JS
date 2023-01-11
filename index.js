const ageValidation = document.getElementById("age_validation");
const age = document.getElementById("age_container");
const male = document.getElementById("male");
const female = document.getElementById("female");
const Height = document.getElementById("height_container");
const Weight = document.getElementById("weight_container");
const resultDisp = document.getElementById("R_Display");
const CalculateBtn = document.getElementById("Calculate_btn");
const Clear = document.getElementById("Clear_btn");
let finalResult;
let BMI;

function calculate(e) {
  // console.log(typeof (age.value))
  if (age.value < 2 || age.value > 120) {
    ageValidation.classList.add("Errmsg");
    ageValidation.innerText = "Age Should be between 2-120";
  } else if (male.checked == false && female.checked == false) {
    resultDisp.innerText = "Gender is must";
  } else if (
    `${parseInt(age.value)}` != "NaN" &&
    `${parseInt(Height.value)}` != "NaN" &&
    `${parseInt(Weight.value)}` != "NaN"
  ) {
    BMI = (
      parseInt(Weight.value) /
      parseInt((Height.value / 100) * (Height.value / 100))
    ).toFixed();
    resultDisp.innerText = "";
    ageValidation.classList.remove("Errmsg");
    ageValidation.innerText = "ages: 2-120";
    if (BMI < 16) {
      resultDisp.innerText = `BMI=${BMI}Kg/m2 (Serve Thinness)`;
    } else if (BMI >= 16 && BMI <= 17) {
      resultDisp.innerText = `BMI=${BMI}Kg/m2 (Moderate Thinness)`;
    } else if (BMI > 17 && BMI <= 18.5) {
      resultDisp.innerText = `BMI=${BMI}Kg/m2 (Moderate Thinness)`;
    } else if (BMI > 18.5 && BMI <= 25) {
      resultDisp.innerText = `BMI=${BMI}Kg/m2 (Normal)`;
    } else if (BMI > 25 && BMI <= 30) {
      resultDisp.innerText = `BMI=${BMI}Kg/m2 (Overweight)`;
    } else if (BMI >= 30 && BMI <= 35) {
      resultDisp.innerText = `BMI=${BMI}Kg/m2 (Obese Class I)`;
    } else if (BMI > 35 && BMI <= 40) {
      resultDisp.innerText = `BMI=${BMI}Kg/m2 (Obese Class II)`;
    } else if (BMI > 40) {
      resultDisp.innerText = `BMI=${BMI}Kg/m2 (Obese Class III)`;
    }
  } else if (
    `${parseInt(age.value)}` == "NaN" &&
    `${parseInt(Height.value)}` == "NaN" &&
    `${parseInt(Weight.value)}` == "NaN"
  ) {
    resultDisp.classList.add("Errmsg");
    resultDisp.innerText = "Input should be in Number";
    // console.log(resultDisp.innerText)
  }
}
function Cleared() {
  age.value = "";
  Height.value = "";
  Weight.value = "";
  male.checked = false;
  female.checked = false;
  ageValidation.classList.remove("Errmsg");
  ageValidation.innerText = "ages: 2-120";
  resultDisp.innerText = "Result";
  resultDisp.classList.remove("Errmsg");
}
