const express = require('express');
const path = require("path");

const app = express();

app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'pug');

app.get('/', (_req, res) => {
        res.render('index', { 
            title: 'Home' 
        });
    });
       
app.listen(3000, () => console.log("Listening on port 3000"));