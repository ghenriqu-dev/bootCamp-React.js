import './style.css'

const link = document.querySelector('[data-js="link"]')
const divApp = document.querySelector('[data-js="app"]')

const html = `
<h1>B. Adademy</h1>
<p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
`

divApp.innerHTML = html

link.addEventListener('click', event =>{
  event.preventDefault()
  divApp.classList.toggle('hide')
  link.innerHTML = divApp.classList.contains('hide') ? 'Exibir' : 'Esconder'
})
