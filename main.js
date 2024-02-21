const body = document.querySelector("body")
const firstScreen = document.querySelector(".screen1")
const secondScreen = document.querySelector(".screen2")
const closedCookie = document.querySelector("#closedCookie")
const openedCookie = document.querySelector("#openedCookie")
const openAnotherCookie = document.querySelector("#openAnotherCookie")
const phrase = document.querySelector("#phrase")
const phrases = ["A vida trará coisas boas se tiver paciência.", "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.", "Não compense na ira o que lhe falta na razão.", "Defeitos e virtudes são apenas dois lados da mesma moeda.", "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.", "Siga os bons e aprenda com eles.", "Não importa o tamanho da montanha, ela não pode tapar o sol."]

closedCookie.addEventListener("click", () => {
    toggleScreenAndBackground();
    chooseCookie();
})
openedCookie.addEventListener("click", chooseCookie)
openAnotherCookie.addEventListener("click", chooseCookie)

function toggleScreenAndBackground(){
    firstScreen.classList.toggle("hidden")
    secondScreen.classList.toggle("hidden")
    body.classList.toggle("openedCookie")
}

function chooseCookie(){
    let randomIndex = Math.round(Math.random() * phrases.length - 1)
    phrase.innerText = phrases[randomIndex]
}
