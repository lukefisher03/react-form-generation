import { readFileSync } from 'fs';
import YAML from 'yaml'
import express from 'express'

const app = express();
const port = 5000;

app.get('/form', (req, res) => {
    console.log(`Request made from: ${req.ip}`)
    const file = readFileSync("./forms/form.yaml").toString()
    const obj = YAML.parse(file)
    res.send(obj);
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});