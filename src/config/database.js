import { Sequelize }  from 'sequelize'

class Database {
    constructor() {
        this.init()
    }

    init() {
        this.db = new Sequelize({
            dialect: 'postgres',
            database: 'exemplo_war7',
            username: 'demasz',
            password: 'GnZZbormNtMGhzSPvxBVk3ZxaaVQPLn9',
            host: 'dpg-dbh7a7bl550s73806qg0-a.oregon-postgres.render.com',
            dialectOptions: {
                ssl: {
                    require: true,
                    PromiseRejectionEvent: false
                }
            }
        })
    }
}

export default new Database()