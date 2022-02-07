// alert('Olá')

function contar() {
  var ini = document.getElementById("txti");
  var fim = document.getElementById("txtf");
  var passo = document.getElementById("txtp");
  let res = document.getElementById("res");

  if (
    ini.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    res.innerHTML = 'Impossível contar'
    alert("Faltam dados");
  } else {
    res.innerHTML = "Contando: <br>";
    let i = Number(ini.value);
    let f = Number(fim.value);
    let p = Number(passo.value);

    if(p <= 0) {
        alert('Passo inválido!')
        p = 1
    }

    if (i < f) {
        //contagem crescente
      for (let c = 1; c <= f; c += p) {
        res.innerHTML += `${c} 🤓 `;
      }
    } else {
        // contagem regressiva
      for (let c = 1; c >= f; c -= p) {
        res.innerHTML += ` ${c} 🤓`;
      }
    }
    res.innerHTML += `🏁`;
  }
}
