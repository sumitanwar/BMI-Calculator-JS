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
  BMI = parseFloat(
    parseInt(Weight.value) /
      parseInt((Height.value / 100) * (Height.value / 100))
  );
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
  preventDefault();
}
function clear() {
  age.value = parseInt(0);
  Height.value = "";
  Weight.value = "";
  resultDisp.innerText = "Result";
}
