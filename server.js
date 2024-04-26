const http = require('http');
const path = require('path');
const favicon = require('express-favicon');
require('dotenv').config();

const express = require('express');
const app = express();

http.createServer(app).listen(process.env.PORT)

let pages = {
    main: "/",
    about_us: "/about_us.html",
    my_projects: "/my_projects.html",
    reg: "/reg.html",
    err: "/error.html"
}

app.use('/img', express.static(__dirname + '/img'))
app.use(express.static(__dirname + "/static"))
app.use(favicon(__dirname + '/img/favicon.ico'));
app.use(express.static(__dirname + "/fonts"))

app.get(pages.main, (req,res)=> {
 res.sendFile(path.join(__dirname, '/index.html')) ;
     })
app.get("/index.html", (req,res)=> {
        res.sendFile(path.join(__dirname, '/index.html')) ;
        res.redirect('/');
            })
app.get(pages.about_us, (req,res)=> {
 res.sendFile(path.join(__dirname, '/about_us.html')); 
     })
app.get(pages.my_projects, (req,res)=> {
 res.sendFile(path.join(__dirname, '/my_projects.html'));
     })
app.get(pages.reg, (req,res)=>{
 res.sendFile(path.join(__dirname, '/reg.html'));
     }) 
app.get('*', (req, res) => { 
        res.status(404)
        res.sendFile(path.join(__dirname, '/error.html'))
     }); 