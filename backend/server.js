const express = require('express');
const app = express();
const port = 5000;

app.get('/form', (req, res) => {
    console.log(`Request made from: ${req.hostname}`)
    res.send('Hello from Express!');
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});