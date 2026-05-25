const express = require('express');
const router = express.Router();
const { connectDB } = require('../db');

router.get('/resultados', async (req, res) => {
    try {
        const pool = await connectDB();

        const result = await pool.request().query(`
            SELECT 
                id,
                table_number,
                result_json,
                created_at
            FROM resultados
            ORDER BY created_at DESC
        `);

        res.json(result.recordset);
    } catch (error) {
        console.error('Erro ao buscar resultados:', error);
        res.status(500).json({
            message: 'Erro ao buscar resultados',
            error: error.message
        });
    }
});

module.exports = router;