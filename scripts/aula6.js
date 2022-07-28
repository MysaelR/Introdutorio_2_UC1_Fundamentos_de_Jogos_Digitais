var question1 = document.querySelector(".value1");
var question2 = document.querySelector(".value2");
var question3 = document.querySelector(".value3");

var point;

const checkBoxFalse = document.getElementById("container-points-false");
const checkBoxTrue = document.getElementById("container-points-true");

function checkQuestion() {
  var compare = 0;
  if (question1.value.toLowerCase() === "teste") {
    compare++;
  }
  if (question2.value.toLowerCase() === "v") {
    compare++;
  }
  if (question3.value.toLowerCase() === "f") {
    compare++;
  }
  point = compare;

  let text = `Quase lá, você acertou ${point}/3. Tente novamente!`;
  document.getElementById("pontos-totais").innerText = text;
  if (point < 3) {
    checkBoxTrue.style.display = "none";
    checkBoxFalse.style.display = "block";
  } else if (point >= 3) {
    checkBoxTrue.style.display = "flex";
    checkBoxFalse.style.display = "none";
  }
}
