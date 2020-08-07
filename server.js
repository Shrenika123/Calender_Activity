const jsonServer = require('json-server');
const express=require('express')
var app=express()
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8000;

if(process.env.NODE_ENV==='production')
{
 app.use(express.static('client/build'))
}

server.use(middlewares);
server.use(router);

server.listen(port);