const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.sendFile(port);
});

app.listen(port, () => {
  console.log("rodando na porta " + port)
});