// @create-index

const express = require('express');

const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = 3000;


app.use(express.json());

app.use(cors());

app.get('/data',(req, res) => {
    fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) return res.status(500).send('Error reading data.json');
res.json(JSON.parse(data));
    });

});


app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Backend running at http://localhost:${PORT}');
    }
});