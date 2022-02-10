// alert('Olá')

let num = document.querySelector("input#fnum");
let lista = document.querySelector("select#flista");
let res = document.querySelector("div#res");
let valores = [];

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inlista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  if (isNumero(num.value) && !inlista(num.value, valores)) {
    valores.push(Number(num.value));
    let item = document.createElement("option");
    item.text = `Valor ${num.value} adicionando.`;
    lista.appendChild(item);
  } else {
    alert("Valor inválido ou já encontrado na lista");
  }
  // apagar o numero dando certo ou errado e dando foco na caixa de mensagem
  num.value = "";
  num.focus();
}
