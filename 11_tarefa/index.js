const express = require('express')
const app = express()
const server = 5000
const path = require('path')

// Arquivos estáticos (css, js, img)
app.use(express.static('public'))

// basePath
const basePath = path.join(__dirname, 'templates')

// Importando os módulos routers
const users = require('./users')
const vehicles = require('./vehicles')

// ROTAS
// Rotas dos routers
app.use('/users', users)
app.use('/vehicles', vehicles)

//Rota principal
app.get('/', (req, res) => {
  res.send(res.sendFile(`${basePath}/index.html`))
})

app.listen(server, () => {
  console.log(`App rodando na porta ${server}.`)
})