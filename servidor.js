const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8'); // Especifica a codificação UTF-8

  if (req.url === '/') {
    res.end('Bem-vindo a página inicial!');
  } else if (req.url === '/sobre') {
    res.end('Você acessou a página Sobre.');
  } else if (req.url === '/contato') {
    res.end('Você acessou a página Contato.');
  } else {
    res.statusCode = 404;
    res.end('Página não encontrada.');
  }
});

server.listen(port, hostname, () => {
  console.log(`Servidor rodando em http://${hostname}:${port}/`);
});
