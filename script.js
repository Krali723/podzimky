function kvadr() {
  let a = document.getElementById("a").valueAsNumber;
  let b = document.getElementById("b").valueAsNumber;
  let c = document.getElementById("c").valueAsNumber;

  let d = (b*b)-(4*a*c);

  if (d < 0){
    document.getElementById("Disk").innerHTML=d;
    document.getElementById("x1").innerHTML="rce nemá řešení";
    document.getElementById("x2").innerHTML="rce nemá řešení";
  } else if (d == 0){
    document.getElementById("Disk").innerHTML=d;
    x1 = -b/(2*a);
    document.getElementById("x1").innerHTML=x1;
    document.getElementById("x2").innerHTML="shodné s x1";
  } else {
    document.getElementById("Disk").innerHTML=d;
    x1 = (-b + Math.sqrt(d))/(2*a);
    x2 = (-b - Math.sqrt(d))/(2*a);
    document.getElementById("x1").innerHTML=x1;
    document.getElementById("x2").innerHTML=x2;
  }
}

function fib_pos() {
  let m = document.getElementById("max").valueAsNumber;
  let posl = "0 ";
  let sum = 1;
  let n1 = 0;
  let n2 = 1;

  while (sum <= m) {
    posl = posl + sum + " ";
    sum = n1 + n2;
    n1 = n2;
    n2 = sum;
  }
  document.getElementById("posl").innerHTML = posl;
}
function prvocisla() {
  let pocet = document.getElementById("cislo").valueAsNumber;
  let vypis = " ";
  let count = 0;
  let num = 1;
  
  while (count < pocet) {
    if (P(num)) {
      vypis = vypis + num + " ";
      num = num + 1;
      count = count + 1;
    } else {
      num = num + 1;
    }
  }
  document.getElementById("vypis").innerHTML = vypis;
}

function P(c) {
  for (let d=2; d<=Math.sqrt(c); d++){
    if (c % d == 0) {
      return false;
    }
  }
  return true;
}