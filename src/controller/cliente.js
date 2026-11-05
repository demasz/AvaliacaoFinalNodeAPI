import ServiceCliente from '../service/cliente.js'

class ControllerCliente {

    async Buscar(req, res) {
        try {
            const nomes = await ServiceCliente.Buscar()

            res.send({ nomes })
        } catch (e) {
            res.send({ message: e.message })
        }
    }

    async BuscarUm(req, res) {
        try {
            const id = req.params.id
            const nome = await ServiceCliente.BuscarUm(id)

            res.send({ nome })
        } catch (error) {
            res.send({ message: error.message })
        }
    }

    async Criar(req, res) {
        try {
            const nome = req.body.nome
            const email = req.body.email
            const senha = req.body.senha
            const state = req.body.state
            await ServiceCliente.Criar(nome, email, senha, state)

            res.send({ message: "Criado com sucesso!" })
        } catch (error) {
            res.send({ message: error.message })
        }
    }
    
    async Alterar(req, res) {
        try {
            const id = req.params.id
            const nome = req.body.nome
            const email = req.body.email
            const senha = req.body.senha
            const state = req.body.state
            await ServiceCliente.Alterar(id, nome, email, senha, state)

            res.send({ message: "Alterado com sucesso!" })
        } catch (error) {
            res.send({ message: error.message })
        }
    }
    
    async Deletar(req, res) {
        try {
            const id = req.params.id
            await ServiceCliente.Deletar(id)
            
            res.send({ message: "Deletado com sucesso!" })
        } catch (error) {
            res.send({ message: error.message })
        }
    }
}

export default new ControllerCliente()