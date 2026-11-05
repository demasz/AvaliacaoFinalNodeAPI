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
                type: database.db.Sequelize.INTEGER
            },
            hora: {
                type: database.db.Sequelize.INTEGER
            },
            valor: {
                type: database.db.Sequelize.INTEGER
            },
            state: {
                type: database.db.Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false
            }
        })
    }
}

export default new Atendimento().model