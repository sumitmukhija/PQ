const express = require('express');
const path = require("path");
const hbs = require('hbs');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(__dirname, '../public')))
app.set('view engine', 'hbs')
hbs.registerPartials(path.join(__dirname, '../views/partials'))

app.get('/', (req, res) => {
    res.render('index', {quote: 'Test quote'})
});

app.listen(PORT)
