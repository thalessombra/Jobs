const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const app = express(); 
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '71829301Th!@#$%',
    database: 'myproject_db'
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conexão com o banco de dados estabelecida!');
});
app.get('/usuarios', (req, res) => {
    connection.query('SELECT * FROM usuarios', (err, results) => {
        if (err) {
            console.error('Erro ao buscar informações:', err);
            res.status(500).json({ error: 'Erro ao buscar informações.' });
            return;
        }
        res.json(results);
    });
});


app.get('/usuarios/:id', (req, res) => {
    const id = req.params.id;
    connection.query('SELECT * FROM usuarios WHERE id = ?', [id], (err, results) => {
        if (err) {
            console.error('Erro ao buscar informações por ID:', err);
            res.status(500).json({ error: 'Erro ao buscar informações por ID.' });
            return;
        }
        if (results.length === 0) {
            res.status(404).json({ error: 'Usuário não encontrado.' });
            return;
        }
        res.json(results[0]);
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});