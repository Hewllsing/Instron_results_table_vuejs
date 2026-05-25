const sql = require('mssql');
require('dotenv').config();

const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    port: parseInt(process.env.DB_PORT),

    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};

async function connectDB() {
    try {
        const pool = await sql.connect(dbConfig);

        console.log('SQL Server conectado');

        return pool;
    } catch (error) {
        console.error('Erro SQL Server:', error);

        throw error;
    }
}

module.exports = {
    connectDB,
    sql
};