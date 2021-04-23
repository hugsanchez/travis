const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send(`
        <html>
            <body>The Acme API</body>
            <h1>Hello</h1>
        </html>
    `)
})

module.exports = app;