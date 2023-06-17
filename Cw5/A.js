const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Strona główna');
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('O nas');
  } else if (req.url === '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Kontakt');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Nie znaleziono strony');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Serwer nasłuchuje na porcie ${port}`);
});
