let saida = document.getElementById("saida");
let oct = 0o10;
let bin = 0b10; 
let hexa = 0x10;
let dia, nota,mes,ano;
dia = 10;
dia = 13;
mes = 9;
ano = 2026;
nota = 9.74;
let cep ="01012123";
const PI = 3.1415;
let calc;
calc = PI + 2;
saida.innerHTML="nota: "+nota;//nota: 9.74
saida.innerHTML+="<br>nota formatada: "+nota.toFixed(1);//9.7
saida.innerHTML+="<br>dia: "+dia;//10
saida.innerHTML+="<br>oct: "+oct;//8
saida.innerHTML+="<br>bin: "+bin;//2
saida.innerHTML+="<br>hexa: "+hexa;//16
saida.innerHTML+="<br>cep :"+cep;
saida.innerHTML+="<br>Data: "+dia+"/"+mes+"/"+ano;
saida.innerHTML+="<hr>calc: "+calc;
//Data: 10/9/2026
/*
decimal 00 01 02 03 04 05 06 07 08 09 10
octal 01234567 10
binario 00 01 10
hexadecimal 0123456789abcdef 10
*/