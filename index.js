import express from 'express';
import processos from './processos.json' assert {type: "json"};

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.listen(PORT,() => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.get('/',(request, response) => {
    return response.send('<h1>Trabalhando com servidor express</h1>');
});

app.get('/processos',(request, response) => {
    return response.send(processos);
});