const app = require('express')();
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('working!')
});

app.listen(PORT)
