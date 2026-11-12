import express from 'express'
import routerPessoa from './src/router/cliente.js'
import routerAtendimento from './src/router/atendimento.js'
import database from './src/config/database.js'

const app = express();
app.use(express.json())

app.use("/api/c", routerPessoa)
app.use("/api/a", routerAtendimento)

database.db
    .sync({force: false})
    .then(( ) => {
        app.listen(3000, () => {
            console.log("Servidor ouvind na porta 3000")
    })
})
    .catch((e) => {
        console.log(e)
    })