function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res'); 
    if (fano.value < 1930 || fano.value > ano){
        window.alert('Verifique os dados e tente novamente');
    }  else {
        var fsex = window.document.getElementsByName('radsex');
        var idade = ano - Number.parseInt(fano.value); 
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (fsex[0].checked){
            genero = 'Homem';
            if (idade >= 0 && idade < 7){
                img.setAttribute('src', 'homembebe.png');
            } else if (idade < 18){
                img.setAttribute('src', 'homemjovem.png');
            } else if (idade < 50) {
                img.setAttribute('src', 'homemadulto.png');
            } else {
                img.setAttribute('src', 'homemidoso.png');
            }
        }else if(fsex[1].checked){
            genero = 'Mulher';
            if (idade >= 0 && idade < 7){
                img.setAttribute('src', 'mulherbebe.png');
            } else if (idade < 18){
                img.setAttribute('src', 'mulherjovem.png');
            } else if (idade < 50) {
                img.setAttribute('src', 'mulheradulta.png');
            } else {
                img.setAttribute('src', 'mulheridosa.png');
            }
        }
        res.style.textAlign = 'center'; 
        res.innerHTML = `Detctamos ${genero} com ${idade} anos`;
        res.appendChild(img)
    }

}