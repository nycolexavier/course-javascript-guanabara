// alert('Olá')

function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if(num.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)

        let c = 1
        // limpar a tabuada
        tab.innerHTML = ''

        while(c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} + ${c} = ${n*c}`
            // item.value `tab${c}`
            tab.appendChild(item)
            c++;
        }
    }
}