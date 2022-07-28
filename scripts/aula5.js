/** help */
function log(message) {
  console.log("> " + message);
}

var select = false;
var selected;
var filho;
var point;

/** app */
const cards = document.querySelectorAll(".card");
const dropzones = document.querySelectorAll(".dropzone");

const checkBoxFalse = document.getElementById("container-points-false");
const checkBoxTrue = document.getElementById("container-points-true");

var question1 = document.querySelector(".value1");
var question2 = document.querySelector(".value2");

function setQuestion1(value) {
  question1 = value;
}

function setQuestion2(value) {
  question2 = value;
}

function checkQuestion() {
  checkPoints();
  var compare = 0;
  if (question1.value.toLowerCase() === "f") {
    compare++;
  }
  if (question2.value.toLowerCase() === "v") {
    compare++;
  }
  alert(compare);

  if (compare === 2) {
    point++;
  } else {
    point = point;
  }
  let text = `Quase lá, você acertou ${point}/5. Tente novamente!`;
  document.getElementById("pontos-totais").innerText = text;
  if (point < 5) {
    checkBoxTrue.style.display = "none";
    checkBoxFalse.style.display = "block";
  } else if (point >= 5) {
    checkBoxTrue.style.display = "flex";
    checkBoxFalse.style.display = "none";
  }
}

function checkPoints() {
  point = 0;
  var loop = 1;
  dropzones.forEach((dropzone) => {
    var contains = dropzone.querySelector(`#drag-${loop}`);

    if (contains) {
      point++;
    }
    loop++;
  });

  if (point < 5) {
    checkBoxTrue.style.display = "none";
    checkBoxFalse.style.display = "block";
  } else if (point >= 5) {
    checkBoxTrue.style.display = "flex";
    checkBoxFalse.style.display = "none";
  }

  let text = `Quase lá, você acertou ${point}/5. Tente novamente!`;
  document.getElementById("pontos-totais").innerText = text;
}

console.dir(dropzones);
/** our cards */
cards.forEach((card) => {
  card.addEventListener("dragstart", dragstart);
  card.addEventListener("drag", drag);
  card.addEventListener("dragend", dragend);
});

function dragstart() {
  // log('CARD: Start dragging ')
  dropzones.forEach((dropzone) => dropzone.classList.add("highlight"));
  select = true;
  // this = card
  this.classList.add("is-dragging");
}
console.log("carregando");

function drag() {
  // log('CARD: Is dragging ')
}

function dragend() {
  // log('CARD: Stop drag! ')
  dropzones.forEach((dropzone) => dropzone.classList.remove("highlight"));
  select = false;
  // this = card
  this.classList.remove("is-dragging");
  console.log("droped");
  var dropVoid = document.querySelector(".void");
  dropVoid.append(filho);
  dropzones.forEach((dropzone) => dropzone.classList.remove("void"));

  checkPoints();
}

/** place where we will drop cards */
dropzones.forEach((dropzone) => {
  dropzone.addEventListener("dragenter", dragenter);
  dropzone.addEventListener("dragover", dragover);
  dropzone.addEventListener("dragleave", dragleave);
  dropzone.addEventListener("drop", drop);
});

function dragenter() {
  // log('DROPZONE: Enter in zone ')
  select && this.classList.add("void");

  filho = this.querySelector(".card");
  //   console.log(filho);
}

function dragover() {
  // this = dropzone
  this.classList.add("over");

  // get dragging card
  const cardBeingDragged = document.querySelector(".is-dragging");

  // this = dropzone
  this.appendChild(cardBeingDragged);
}

function dragleave() {
  select = false;

  //   log("DROPZONE: Leave ");
  // this = dropzone
  this.classList.remove("over");
  //   console.log("entrou"); aa
}

function drop() {
  // log('DROPZONE: dropped ')

  this.classList.remove("over");
  //   dropVoid.classList.remove("void");
  //   dropVoid = null;
  //   console.log(dropVoid);

  //   cardVoid.appendChild(filho);
}
