var nome = prompt("Qual seu nome?");
/*
if (nome === null) {
  alert("você cancelou o Prompt");
} else if (
  confirm(" Olá " + nome + "\n" + "\n" + "você sabe programar em Javascript?")
) {
  alert("Que ótimo " + nome + ", você irá aprender ainda mais!");
} else {
  alert("Não tem problema " + nome + ", você irá aprender agora!");
}
*/
document.body.innerHTML += `<p id = "large">Seja Bem Vindo <b>${nome}</b></p>`;
document.querySelector("#large").style.fontSize = "25px";




