function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano)  {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        // alert('tudo ok')
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        // res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        // img.style.width = '250px';
        // img.style.height = '250px';
        // img.style.border= '50%';

        // .imagem 
        // width: 250px;  
        // height: 250px;
        // border-radius: 50%;


        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <10) {
                // Criança
                img.setAttribute('src', 'assets/foto-bebe-m.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'assets/foto-jovem-m.png')
            } else if (idade <50) {
                // Adulto
                img.setAttribute('src', 'assets/foto-adulto-m.png')
            } else {
                // Idoso
                img.setAttribute('src', 'assets/foto-idoso-m.png')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'assets/foto-bebe-f.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'assets/foto-jovem-f.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'assets/foto-adulto-f.png')
            } else {
                // Idosa
                img.setAttribute('src', 'assets/foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}