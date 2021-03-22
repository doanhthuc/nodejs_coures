const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;
const path = require('path');
const exphbs = require('express-handlebars');
var methodOverride = require('method-override');

const route = require('./routes');
const db = require('./config/db');

db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

app.use(methodOverride('_method'));

// app.use(morgan('combined'));

app.engine(
    '.hbs',
    exphbs({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    })
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

route(app);

app.listen(port, () => {
    console.log(`Dang lang nghe sever tai http://localhost:${port}`);
});
