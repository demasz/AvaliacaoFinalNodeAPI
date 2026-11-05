import Atendimento from '../model/atendimento.js'

class ServiceAtendimento {

    async Buscar() {
        return Atendimento.findAll()
    }
    
    async BuscarUm(id) {
        if(!id || isNaN(id)) {
            throw new Error("Favor informar somente números")
        }

        return Atendimento.BuscarUm(id)
    }
    
    async Criar(dia, hora, valor) {
        if(!dia || !hora || !valor) {
            throw new Error("Favor informar todos os dados")
        }
        
        await Atendimento.create({dia, hora, valor})
    }
    
    async Alterar(id, dia, hora, valor) {
        if(!id || isNaN(id) || !dia || !hora || !valor) {
            throw new Error("Favor informar todos os dados")
        }
        const atendimentoAlterar = await Atendimento.findByPk(id)
        if (!atendimentoAlterar) {
            throw new Error("Cliente não encontrado")
        }

        atendimentoAlterar.dia = dia
        atendimentoAlterar.hora = hora
        atendimentoAlterar.valor = valor

        await atendimentoAlterar.save()
    }

    async Deletar(id) {
        if(!id || isNaN(id)) {
            throw new Error("Favor informar o Id corretamente")
        }
        const atendimentoDelete = await Atendimento.findByPk(id)
        
        if(!atendimentoDelete) {
            throw new Error("Favor informar o Id corretamente")
        }
        await atendimentoDelete.destroy()
    }

    async State(id) {
        return await Atendimento.findAll({
            where: {
                state: false
            }
        }
        )
    }
    
}

export default new ServiceAtendimento()