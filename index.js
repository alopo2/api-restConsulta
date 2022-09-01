import cors from 'cors'
import express from 'express';
import processos from './processos.json' assert {type: "json"};

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors())
app.use(express.json());

app.listen(PORT,() => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.get('/processos',(request, response) => {
    return response.send(processos);
});