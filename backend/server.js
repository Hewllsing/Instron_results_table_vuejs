const express = require('express');
const cors = require('cors');
require('dotenv').config();

const resultadosRoutes = require('./routes/resultadosRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', resultadosRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor Node.js rodando na porta ${PORT}`);
});