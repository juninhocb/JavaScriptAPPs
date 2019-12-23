function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    var min = data.getMinutes();
    msg.innerHTML = `Agora são: ${hora} Horas e ${min} Minutos. <br/> `; 
    if (hora >= 0 && hora < 12){
        //BOM DIA
        img.src = 'fotomanha.png';
        document.body.style.background = '#f9d4ab'
        msg.innerHTML +=  ``;
        window.alert('BOM DIA');
    } else if (hora >= 12 & hora <= 18){
        //BOA TARDE
        img.src = 'fototarde.png';
        document.body.style.background = '#ff8000'
        msg.innerHTML +=  ``;
        window.alert('BOA TARDE');
    } else {
        // BOA NOITE
        img.src = 'fotonoite.png';
        document.body.style.background = '#0a2230'
        msg.innerHTML +=  ``;
        window.alert('BOA NOITE');
    }
    
}