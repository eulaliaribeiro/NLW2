// procurar o botão
document
  .querySelector("#time-adder")
  // quando clicar no botão
  .addEventListener("click", cloneField);

// executar uma ação
function cloneField() {
  // duplicar os campos. quais campos?
  const newFieldContainer = document
    .querySelector(".schedule-item")
    .cloneNode(true);

  // limpar os campos. quais campos?
  const fields = newFieldContainer.querySelectorAll("input");

  // para cada campo, limpar
  fields.forEach(function (field) {
    //pegar o field do momento e limpa ele
    field.value = "";
  });

  // colocar na página. onde?
  document.querySelector("#schedule-items").appendChild(newFieldContainer);
}
