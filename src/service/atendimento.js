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
    
    async Criar(dia, hora, valor, concluido) {
        if(!dia || !hora || !valor || !concluido) {
            throw new Error("Favor informar todos os dados")
        }
        
        await Atendimento.create({dia, hora, valor, concluido})
    }
    
    async Alterar(id, dia, hora, valor, concluido) {
        if(!id || isNaN(id) || !dia || !hora || !valor || !concluido) {
            throw new Error("Favor informar todos os dados")
        }
        const atendimentoAlterar = await Atendimento.findByPk(id)
        if (!atendimentoAlterar) {
            throw new Error("Atendimento não encontrado")
        }

        atendimentoAlterar.dia = dia
        atendimentoAlterar.hora = hora
        atendimentoAlterar.valor = valor
        atendimentoAlterar.concluido = concluido


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

    async BuscarPendente() {
        return await Atendimento.findAll({
            where: {
                state: false
            }
        })
    }

    async State(id) {
        if(!id || isNaN(id)) {
            throw new Error("Favor informar todos os dados")
        }
        const atendimentoState = await Atendimento.findByPk(id)
        
        if (!atendimentoState) {
            throw new Error("Atendimento não achado")
        }
        atendimentoState.concluido = !atendimentoState.concluido
            await atendimentoState.save()
                return atendimentoState
    
    }
    
}

export default new ServiceAtendimento()