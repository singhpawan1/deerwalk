// const express = require('express');
// const productData = require('../data/productData.json')
const productRouter = require('./Routes/productRoute')


const express =require('express')
  const server=express();  //cannot create more than  once



  server.get("/",(req,res)=>res.send("index file"))
 server.use(productRouter) //routeused
 
