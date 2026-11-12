import ServiceAtendimento from '../service/atendimento.js'

class ControllerAtendimento {

    async Buscar(req, res) {
        try {
            const dias = await ServiceAtendimento.Buscar()
            res.send({ dias })
        } catch (e) {
            res.send({message: e.message})
        }
    }

    async BuscarUm(req, res) {
        try {
            const id = req.params.id
            const dia = await ServiceAtendimento.findByPk(id)     
            
            res.send({ dia })
        } catch (error) {
            res.send({ message: error.message})
        }
    }

    async Criar(req, res) {
        try {
            const dia = req.body.dia
            const hora = req.body.hora
            const valor = req.body.valor
            const concluido = req.body.concluido
                await ServiceAtendimento.Criar(dia, hora, valor, concluido)
                
                res.send({ message: "Criado com sucesso!" })
            } catch (error) {
                res.send({ message: error.message })
            }
        }
    
    async Alterar(req, res) {
            try {
                const id = req.params.id
                const dia = req.body.dia
                const hora = req.body.hora
                const valor = req.body.valor
                const concluido = req.body.concluido
                await ServiceCliente.Alterar(id, dia, hora, valor, concluido)
                
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

    async BuscarPendente(req, res) {
        try {
            const atendimentos = await ServiceAtendimento.BuscarPendente()
            res.send({ atendimentos })
    } catch (error) {
        res.send({message: error.message})
    }
}

    async State(req, res) {
        const id = req.params.id
        const atendimento = await ServiceAtendimento.State(id)
        res.send({message: "Alterado!", atendimento})
     } catch (error) {
        res.send({message: error.message})
    }

} 
export default new ControllerAtendimento()


    
