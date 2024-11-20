var nome = prompt("Qual seu nome?");
            if (nome === null) {
                alert("você cancelou o Prompt");
            }
            else if(confirm(" Olá " + nome +  "\n" + "\n" + "você sabe programar em Javascript?")) {
                alert("Que ótimo " + nome + ", você irá aprender ainda mais!");

            }else {( alert("Não tem problema " + nome + ", você irá aprender agora!"))

            }
            var h1 = document.createElement("h1");
            h1.textContent = "Praticando 1 JS";
            document.body.appendChild(h1);