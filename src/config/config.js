// Define a string de conexão com o banco de dados
module.exports = {
    development: {
        database: {
            host: 'ls-c4c3cdb3a49ec563bb083c672f25f164b79f2d05.ctjp1co0hzia.us-east-1.rds.amazonaws.com',
            port: 3306,
            name: 'db_usuario',
            dialect: 'mysql',
            user: 'dbmasteruser',
            password: 'u`?j9S>1|s^p,%g9p+v.-Do:>Md)B}{N'
        }
    },
    production: {
        database: {
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    }
}