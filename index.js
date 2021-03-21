const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome app!');
});

app.listen(port, () => {
    console.log(`Dang lang nghe sever tai http://localhost:${port}`);
});
