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

app.get('/about', (_req, res) => {
        res.render('about', { 
            title: 'About' 
        });
    });

app.get('/blog', (_req, res) => {
        res.render('blog', { 
            title: 'Blogs' 
        });
    });

app.get('/gallary', (_req, res) => {
        res.render('gallary', { 
            title: 'Gallary' 
        });
    });

app.get('/latest-blog', (_req, res) => {
        res.render('latest-blog', { 
            title: 'Latest Blogs' 
        });
    });
       
app.listen(3000, () => console.log("Listening on port 3000"));