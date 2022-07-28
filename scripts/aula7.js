const cards = document.querySelectorAll(".card");
const dropzones = document.querySelectorAll(".dropzone");
const checkBoxFalse = document.getElementById("container-points-false");
const checkBoxTrue = document.getElementById("container-points-true");

var select = false;
var selected;
var filho;
var point;

cards.forEach((card) => {
  card.addEventListener("dragstart", dragstart);
  card.addEventListener("drag", drag);
  card.addEventListener("dragend", dragend);
});

function checkPoints() {
  point = 0;
  var loop = 1;
  dropzones.forEach((dropzone) => {
    var contains = dropzone.querySelector(`#drag-${loop}`);

    if (contains) {
      point = point + 1;
    }
    loop++;
  });
  if (point < 4) {
    checkBoxTrue.style.display = "none";
    checkBoxFalse.style.display = "block";
  } else if (point >= 4) {
    checkBoxTrue.style.display = "flex";
    checkBoxFalse.style.display = "none";
  }
  let text = `Quase lá, você acertou ${point}/5. Tente novamente!`;
  document.getElementById("pontos-totais").innerText = text;
}

function dragstart() {
  dropzones.forEach((dropzone) => dropzone.classList.add("highlight"));
  select = true;
  this.classList.add("is-dragging");
}
console.log("carregando");

function drag() {}

function dragend() {
  dropzones.forEach((dropzone) => dropzone.classList.remove("highlight"));
  select = false;
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
  select && this.classList.add("void");
  filho = this.querySelector(".card");
}

function dragover() {
  this.classList.add("over");
  const cardBeingDragged = document.querySelector(".is-dragging");
  this.appendChild(cardBeingDragged);
}

function dragleave() {
  select = false;
  this.classList.remove("over");
}

function drop() {
  this.classList.remove("over");
}
