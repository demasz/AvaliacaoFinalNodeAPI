import ServiceCliente from '../service/cliente.js'

class ControllerCliente {

    async Buscar(req, res) {
        try {
            const clientes = await ServiceCliente.Buscar()

            res.send({ clientes })
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
            await ServiceCliente.Criar(nome, email, senha)

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
            await ServiceCliente.Alterar(id, nome, email, senha)

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