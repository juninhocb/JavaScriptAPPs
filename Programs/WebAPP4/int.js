function calcula(){
    var nmr = window.document.querySelector('input#vlr');
    nmr = Number.parseInt(nmr.value);
    var msg = window.document.getElementById('res');
    var list = document.createElement('select');
    list.setAttribute('id', 'resultado');
    list.setAttribute('size', '10');
    msg.appendChild(list);
    var multiplicador = 1;
    var atual = nmr;
    if(String(nmr) != 'NaN'){
        for (multiplicador; multiplicador <= 10; multiplicador++){
            let item = document.createElement('option')
            atual = nmr * multiplicador;
            item.text = `${nmr} * ${multiplicador} = ${atual}`;
            list.appendChild(item);
            
    }} else {
        window.alert('Não foi possível obter a tabuada, insíra um número válido!');
        
    }
}
