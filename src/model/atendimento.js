import database from "../config/database.js"

class Atendimento {
    constructor() {
        this.model = database.db.define("atendimento", {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            dia: {
                type: database.db.Sequelize.BOOLEAN
            },
            hora: {
                type: database.db.Sequelize.BOOLEAN
            },
            valor: {
                type: database.db.Sequelize.BOOLEAN
            },
            concluido: {
                type: database.db.Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false
            }
        })
    }
}

export default new Atendimento().model