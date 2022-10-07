const express = require('express')
const app = express()
const port = 3000 // variável ambiente

const path = require('path')
const basePath = path.join(__dirname, 'templates')

// Rotas
app.get('/users/:id', (req, res) => {
  const id = req.params.id

  // Lê a tabela users e resgata um usuário do banco de dados
  console.log(`Estamos buscando pelo usuário ${id}.`)

  res.sendFile(`${basePath}/users.html`)
})

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
  console.log(`App rodando na porta ${port}.`)
})