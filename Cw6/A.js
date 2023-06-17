const express = require('express');
const app = express();
const port = 3000;

app.get('/:page', (req, res) => {
  const page = req.params.page;
  res.send(`Strona: ${page}`);
});

app.use((req, res) => {
  res.status(404).send('Nie znaleziono strony');
});

app.listen(port, () => {
  console.log(`Serwer nasłuchuje na porcie ${port}`);
});
