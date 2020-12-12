var express = require('express');
const product = require('../json/index')
var router = express.Router();
let arr = []
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/api/product', (req,res)=>{
  res.send(product)
})
router.get('/api/product/:id', (req,res)=>{
  let idProduct = product.find(r => r._id === req.params.id)
  res.send(idProduct)
})
router.post('/api/product', (req,res)=>{
  let idProduct = product.find(r => r._id === req.body.id)
  arr.push(idProduct)
  console.log(arr);
})
router.post('/api/product/delete', (req,res)=>{
  let idProduct = product.find(r => r._id === req.body.id)
  arr.pop(idProduct)
  console.log(arr);
})
router.get('/api/product/cart', (req, res)=>{
  res.json(arr)
})
module.exports = router;
