const btnSquere = document.querySelector(".btnSquere");
btnSquere.addEventListener("click", addSquere);
const contain = document.querySelector(".container");

let fleg = true;
function addSquere() {
  if (fleg) {
    const squere = document.createElement("div");
    squere.classList.add("squere");
    btnSquere.textContent = "להסתיר"
    contain.appendChild(squere);
    fleg = false;
  } else {
    btnSquere.textContent = "להציג"

    contain.innerHTML = "";
    fleg = true;
  }
}
