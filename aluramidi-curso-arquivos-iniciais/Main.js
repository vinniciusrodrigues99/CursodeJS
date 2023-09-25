function tocaSomPom()
{
    document.querySelector('#som_tecla_pom').play();
}
function tocaSomClap()
{
    document.querySelector('#som_tecla_cap').play();
}
function tocaSons(seletorAudio)
{
   const elemento = document.querySelector(seletorAudio);
    if(elemento != null && elemento.localName ==='audio')
    {
    elemento.play();
    }
    else
    {
        console.log('elemento não encontrado ou seletor inválido');
    }

}
// document.querySelector('.tecla_pom').onclick = tocaSomPom; //atribuição 
const listaDeTeclas = document.querySelectorAll('.tecla');
    for(let i=0; i<listaDeTeclas.length; i++)
    {
   /*  listaDeTeclas[i].onclick = tocaSomPom;
    ListaDeAudios[i].onclick = tocaSons;
    */ 
   const tecla = listaDeTeclas[i];
   const instrumento = tecla.classList[1];
   //template String
   const idAudio = `#som_${instrumento}`;
   //console.log(instrumento);
   tecla.onclick = function(){
    tocaSons(idAudio);
    }
    tecla.onkeydown = function(evento) //passa como parâmetro um evento
    {
    // console.log(evento.code == 'Space');  //vai exibir na tela as teclas que eu apertar
        if(evento.code === 'Space' || evento.code ==='Enter')
        {
            tecla.classList.add('ativa');
        }

    }
tecla.onkeyup = function(){
    tecla.classList.remove('ativa');
}
}   

