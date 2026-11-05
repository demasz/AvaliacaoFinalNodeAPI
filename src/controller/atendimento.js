import ServiceAtendimento from '../service/atendimento.js'

class ControllerAtendimento {

    async Buscar(req, res) {
        try {
            const dias = await ServiceAtendimento.Buscar()
            res.send({dias})
        } catch (e) {
            res.send({message: e.message})
        }
    }

    async BuscarUm(req, res) {
        try {
            const id = req.params.id
            const dia = await ServiceAtendimento.BuscarUm(id)     
            
            res.send({dia})
        } catch (error) {
            res.send({ message: error.message})
        }
    }

    async Criar(req, res) {
        try {
            const dia = req.params.id
            const hora = req.params.id
            const valor = req.valor.id
                await ServiceAtendimento.Criar(dia, hora, valor)
                
                res.send({ message: "Criado com sucesso!" })
            } catch (error) {
                res.send({ message: error.message })
            }
        }
    
    async Alterar(req, res) {
            try {
                const id = req.params.id
                const dia = req.params.id
                const hora = req.params.id
                const valor = req.valor.id
                await ServiceCliente.Alterar(id, dia, hora, valor)
                
                res.send({ message: "Alterado com sucesso!" })
            } catch (error) {
                res.send({ message: error.message })
            }
        }   
        
    async Deletar(req, res) {
            try {
                const id = req.params.id
                await ServiceAtendimento.Deletar(id)
                
                res.send({ message: "Deletado com sucesso!" })
            } catch (error) {
                res.send({ message: error.message })
            }
        }

    async State(req, res) {
        try {
            const atendimentos = await ServiceAtendimento.State()
            res.send({ atendimentos })
    } catch (error) {
        res.send({message: error.message})
    }
}

} 
export default new ControllerAtendimento()


    
