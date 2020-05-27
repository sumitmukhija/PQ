const express = require('express');
const path = require("path");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(__dirname, '../public')))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.render('index', {quote: 'Test quote'})
});

app.listen(PORT)
