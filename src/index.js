const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;
const path = require('path');
const exphbs = require('express-handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('combined'));

app.engine(
    '.hbs',
    exphbs({
        extname: '.hbs',
    })
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(port, () => {
    console.log(`Dang lang nghe sever tai http://localhost:${port}`);
});