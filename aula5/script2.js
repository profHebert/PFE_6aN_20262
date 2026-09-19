let a,b,c,d;
let saida = document.getElementById("saida");
a=10;
b=2;
a+=b;//a=12
b-=5;//b=-3
saida.innerHTML="a = "+a;//a=12
saida.innerHTML+="<br>b = "+b;//b=-3
c=11;
d=6;
c%=d;//c=5
d+=a;//d=18
saida.innerHTML+="<br>c = "+c;
saida.innerHTML+="<br>d = "+d;