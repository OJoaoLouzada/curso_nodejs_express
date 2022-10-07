const express = require('express')
const app = express()
const port = 3000 // variável ambiente

const path = require('path')

// Ler o body
app.use(
  express.urlencoded({
    extended: true,
  }),
)
app.use(express.json())

// Arquivos estáticos
app.use(express.static('public'))

const basePath = path.join(__dirname, 'templates')

const users = require('./users')

// Rotas

app.use('/users', users)

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
  console.log(`App rodando na porta ${port}.`)
})