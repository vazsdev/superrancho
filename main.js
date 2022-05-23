var divlistasver = document.querySelector('div#divlistas')

function mostrarlistas() {
    divlistasver.style = 'transition: 0.7s;'
    divlistasver.innerHTML = '<img style="border-radius: 15px; box-shadow: gray 4px 4px; margin-left: 30px" id="img1" src="imagens/rancho-139.png" alt="imagem_rancho_139.png" width="550px" height="500px">'   +   '<img id="img2" style="border-radius: 15px; box-shadow: gray 4px 4px; margin-top: 15px; margin-left: 30px;" src="imagens/rancho-234.png" alt="imagem_rancho_234.png" width="550px" height="500px">'+   '<img id="img3" style="border-radius: 15px; box-shadow: gray 4px 4px; margin-left: 30px" src="imagens/rancho-264.png" alt="imagem_rancho_264.png" width="550px" height="500px">'   +   '<img id="img4" style="border-radius: 15px; box-shadow: gray 4px 4px; margin-top: 30px; margin-left: 30px;" src="imagens/rancho-314.png" alt="imagem_rancho_314.png" width="550px" height="500px"></img>'

    var divapresentacao = document.querySelector('div#apresentacao')
    divapresentacao.style = 'margin-top: 15px;'
}