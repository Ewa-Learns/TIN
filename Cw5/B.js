// Moduł obsługujący różne stringi
const stringHandler = {
  home: () => 'Strona główna',
  about: () => 'O nas',
  contact: () => 'Kontakt',
  notFound: () => 'Nie znaleziono strony',
};

// Serwer HTTP z wykorzystaniem modułu
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(stringHandler.home());
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(stringHandler.about());
  } else if (req.url === '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(stringHandler.contact());
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end(stringHandler.notFound());
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Serwer nasłuchuje na porcie ${port}`);
});
