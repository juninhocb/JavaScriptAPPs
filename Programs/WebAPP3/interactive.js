function contar(){
    var ini = window.document.getElementById('ini');
    ini = Number.parseInt(ini.value);
    var fim = window.document.querySelector('input#fim');
    fim = Number.parseInt(fim.value);
    var pas = window.document.getElementById('pas');
    pas = Number.parseInt(pas.value);
    var msg = window.document.getElementById('cnt');
    var ctl = ini; 
    var flag = 5;
    if( String(ini) == 'NaN' || ini >= fim || pas < 1 ){
        msg.innerHTML = "Impossível contar";
     }else {
        msg.innerHTML = ` Contando de ${ini} a ${fim}: <br/>`
        while(ctl <= fim){
        if (ctl != fim){
        msg.innerHTML += `${ctl} \u{1F449}`
        ctl += pas; 
        }else {
         msg.innerHTML += `${ctl} \u{1F3C1}`
         ctl += pas;
         flag = 2; 
        }
     }}
     if(flag != 2){
        msg.innerHTML += 'Passo mal calculado.. \u{1F613}'
     }
    
}