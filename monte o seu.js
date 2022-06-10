function simNaoCheck() {
    if (document.getElementById('selecionaSim').checked) {
        document.getElementById('seSim').style.display = 'block';
        document.getElementById('estilonome').style.display = 'block';
    }
    else{
        document.getElementById('seSim').style.display = 'none';
        document.getElementById('estilonome').style.display = 'none';
    }
    
}
function capinha() {
    if (document.getElementById('capinhasim').checked) {
        document.getElementById('capinhacontent').style.display = 'block';
    }
    else{
        document.getElementById('capinhacontent').style.display = 'none';
    }
}
function capinhachoice(){
    document.getElementById('capinha2').style.display = 'block';
    var x= document.getElementById('selectcapinha').value;
    document.getElementById('textcapinha').innerHTML = "Não se preocupe, mesmo os exemplos de imagens sendo de um modelo diferente do seu, a capinha que chegará em sua casa é para o " + x + ".";
    
}
function tipo(){
    if (document.getElementById('pulseira').checked){
        document.getElementById('pulsebox').style.display = 'block';
        document.getElementById('colarbox').style.display = 'none';
        document.getElementById('anelbox').style.display = 'none';
        document.getElementById('tornobox').style.display = 'none';
        document.getElementById('strapbox').style.display = 'none';
    }
    if (document.getElementById('colar').checked){
        document.getElementById('pulsebox').style.display = 'none';
        document.getElementById('colarbox').style.display = 'block';
        document.getElementById('anelbox').style.display = 'none';
        document.getElementById('tornobox').style.display = 'none';
        document.getElementById('strapbox').style.display = 'none';
    }
    if (document.getElementById('anel').checked){
        document.getElementById('pulsebox').style.display = 'none';
        document.getElementById('colarbox').style.display = 'none';
        document.getElementById('anelbox').style.display = 'block';
        document.getElementById('tornobox').style.display = 'none';
        document.getElementById('strapbox').style.display = 'none';
    }
    if (document.getElementById('torno').checked){
        document.getElementById('pulsebox').style.display = 'none';
        document.getElementById('colarbox').style.display = 'none';
        document.getElementById('anelbox').style.display = 'none';
        document.getElementById('tornobox').style.display = 'block';
        document.getElementById('strapbox').style.display = 'none';
    }
    if (document.getElementById('strap').checked){
        document.getElementById('pulsebox').style.display = 'none';
        document.getElementById('colarbox').style.display = 'none';
        document.getElementById('anelbox').style.display = 'none';
        document.getElementById('tornobox').style.display = 'none';
        document.getElementById('strapbox').style.display = 'block';
    }
    
}