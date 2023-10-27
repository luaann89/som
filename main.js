//crianda a função tocaSomAplauso e buscando id da tecla para tocar,
function tocaSom( idElementoAudio)
document . querySelector (idElementoAudio).play()
1/referencia constante listaDeTeclas que busca todas as classes tecla
const listaDeTeclas = document .querySelectorAll(".tecla")
//criar a variavel de contagem
let contador = 0
//1aco de repetição while
while (contador < listaDeTeclas.length)(
faz funcionar som com teclas
const efeito
listaDeTeclas [contador].classlist[1]
const idAudio = "#som_"+ efeito
listaDeTeclas [contador ].onclick = function()(
tocasom(idAudio)
contador = contador
console.log(contador)