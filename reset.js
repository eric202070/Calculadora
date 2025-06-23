const lor = document.querySelector(".limpar");
const lormaior = document.querySelector(".limpar-registro");

lor.addEventListener("click", (e) => {
  const registros = document.querySelector("#Registros");
  if (e.target === lor || e.target === lormaior) {
    registros.innerHTML = "";
  } else {
    console.log((e.target = lor));
  }
});
