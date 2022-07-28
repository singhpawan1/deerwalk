const express = require('express');
const productData = require('../data/products.json')
const router = express.Router();

router.get('/api/products',(req,res)=>res.json(productData))

router.get('/api/products/1',(req,res)=>res.json(productData[0]))

router.get('/api/products/2',(req,res)=>res.json(productData[1]))

router.get('/api/products/3',(req,res)=>res.json(productData[2]))

module.export=router






















module.exports= router;