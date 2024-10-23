//dom

const lampada = document.querySelector('#lampada')

const btligar =document.querySelector('#btligar')

const btdesligar =document.querySelector('#btdesligar')

//evento

btligar.addEventListener('click',acender)

btdesligar.addEventListener('click',apagar)

lampada.addEventListener('dblclick',quebra)

//função

function acender(){
    lampada.src = 'imagem/acesa.gif'
}

function apagar(){
    lampada.src = 'imagem/apagada.gif'
}

function quebra(){
    lampada.src = 'imagem/quebrada.jpg'
}
