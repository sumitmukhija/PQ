const express = require('express');
const path = require('path');
const hbs = require('hbs');
const quote = require('./controllers/quote_controller')

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(__dirname, '../public')))
app.set('view engine', 'hbs')
hbs.registerPartials(path.join(__dirname, '../views/partials'))

app.get('/', (req, res) => {
    quote((quoteData, err) => {
        if (err) {
            res.render("index", { quote: err });
        }
        if (quoteData && quoteData.status === 200) {
            let quote = quoteData.data.en
            res.render("index", { quote });
        }
        else {
            res.render("index", {quote: "Could not fetch a quote. Try again?"})
        }
    })
});

app.listen(PORT)
