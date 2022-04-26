const express = require('express');
const path = require('path');
const db = require('../database');

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/api/cows', (req, res) => {
  db.queries.get((cows) => {
    console.log('1. cows data from db', cows);
    res.send(cows);
  });
});

app.post('/api/cows', (req, res) => {
  // console.log('app post req.body: ', req.body)
  db.queries.add(req.body, () => {
    res.send(req.body);
  });
});

app.delete('/api/cows', (req, res) => {
  db.queries.delete(req.body, () => {
    res.send('Successfully deleted!');
  });
});

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});
