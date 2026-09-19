let saida = document.querySelector("#saida");
saida.innerHTML="Funciona aula5";
const av1 = parseFloat(prompt("Digite a nota av1"));//
const av2 = parseFloat(prompt("Digite a nota av2"));//
let media = (av1 + av2) / 2;
saida.innerHTML = "av1 = " + av1.toFixed(1);
saida.innerHTML += "<br>av2 = " + av2.toFixed(1);
saida.innerHTML = "<br>media = "+media.toFixed(1);
/*
Solicitar a entrada das notas av1 , av2
Calcular a média entre as duas notas
Mostrar as notas av1, av2 e a média
Exemplo de saída:
av1 = 5.0
av2 = 7.0
média = 6.0

*/