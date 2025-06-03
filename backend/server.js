const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send('<h1>Hello there</1>')
})

const port = 3000;
app.listen(port , () => {
    console.log('Listening to port:', port);
})