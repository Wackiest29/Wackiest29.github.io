const express = require('express');
const app = express();
const port = 5500;

app.use(express.static(__dirname));

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
