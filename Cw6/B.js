const express = require('express');
const app = express();
const port = 3000;

app.get('/:page', (req, res) => {
  const page = req.params.page;
  
  if (page === 'hello') {
    res.send('Hello World');
  } else if (page === 'form') {
    res.send(`
      <form action="/formdata" method="POST">
        <input type="text" name="name" placeholder="Name" /><br />
        <input type="email" name="email" placeholder="Email" /><br />
        <textarea name="message" placeholder="Message"></textarea><br />
        <button type="submit">Submit</button>
      </form>
    `);
  } else {
    res.send('Nie znaleziono strony');
  }
});

app.post('/formdata', (req, res) => {
  const { name, email, message } = req.body;
  res.send(`
    <h2>Form Data</h2>
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Message: ${message}</p>
  `);
});

app.listen(port, () => {
  console.log(`Serwer nasłuchuje na porcie ${port}`);
});
