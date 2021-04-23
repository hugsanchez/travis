const express = require('express');
const app = express();
const { models: { Actor, Movie, Role}} = require('./db');


app.get('/', (req,res) => {
    res.send(`
        <html>
            <body>The Acme API</body>
            <h1>Hello</h1>
        </html>
    `)
})

app.get('/api/movies', async(req,res,next) => {
    const movies = await Movie.findAll();
    res.send(movies);
})

module.exports = app;