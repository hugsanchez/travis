const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send(`
        <html>
            <body>The Acme API</body>
        </html>
    `)
})